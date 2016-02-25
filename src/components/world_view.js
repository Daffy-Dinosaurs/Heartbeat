import d3 from 'd3';
import axios from 'axios'
import world from '../../datasets/world-110m.json';
import names from '../../datasets/countries.json';
import _ from 'lodash';
import topojson from 'topojson';

let projection
    , svg
    , path
    , g
    , worldPath
    , countries
    , width
    , height
    , sens
    , focused
    , countryTooltip
    , countryById = {}
    , grabId
    , time
    , rotate
    , velocity
    ;

const worldGlobe = {
  count: 0,
  loaded: false
};

worldGlobe.go = function(countryObject) {
  // Map configuration

  if(!worldGlobe.loaded){
    width  = 925;
    height = 820;
    sens = 0.25;
    // var rScale = d3.scale.sqrt();
    // var peoplePerPixel = 50000;
    // var max_population = [];

  // Configuration for the spinning effect
  time = Date.now();
  rotate = [0, 0];
  velocity = [0.005, -0];

  // Tool tip div
  countryTooltip = d3.select("body").append("div").attr("class", "countryTooltip");

  // Parse country data
  countries = topojson.feature(world, world.objects.countries).features;

  // set projection type and parameters
  projection = d3.geo.orthographic(3)
    .scale(300)
    .translate([(width / 2) + 10, (height / 2) ])
    .clipAngle(90)
    .precision(0.3);

  path = d3.geo.path()
    .projection(projection);

  svg = d3.select(".globe").append("svg")
    .attr("width", "900")
    .attr("height", "720")
  g = svg.append("g")


  g.append("path")
    .datum({type: "Sphere"})
    .attr("class", "sphere")
    .attr("d", path)
    .attr("fill", "#1C6BA0")
    .attr("transform", "translate(0, -20)");


  worldPath = svg.selectAll("path.land")
    .data(countries)
    .enter().append("path")
    .attr("class", "land")
    .attr("d", path)
    .attr("fill", "#C1B398")
    .attr("transform", "translate(0, -20)")


  // Parse names for tool tip
  names.forEach(function(d){
    countryById[d.localeId] = d.countryName;
  });

  worldGlobe.loaded = true;
}

ready(null, world);

function ready(error, world) {

// spinning_globe();
//   //  TODO: work on making the globe spin and stop when the globe dragged
//    function spinning_globe(val){
//
//      d3.timer(function() {
//        rotate = [0, 0];
//        velocity = [0.005, -0];
//        // get current time
//        var dt = Date.now() - time;
//        // get the new position from modified projection function
//        projection.rotate([rotate[0] + velocity[0] * dt, rotate[1] + velocity[1] * dt]);
//        // update cities position = redraw
//        svg.selectAll("path.land").attr("d", path);
//        pause = val;
//        return pause;
//      });
//    }



    // Drag event
    worldPath.call(d3.behavior.drag()
    .origin(function() { var r = projection.rotate(); return {x: r[0] / sens, y: -r[1] / sens}; })
    .on("dragstart", function() {
      // d3.event.sourceEvent.stopPropagation();
      // console.log("Drag start");
      //  pause = true;
      //  spinning_globe(pause);
    })
    .on("drag", function() {
      var rotate = projection.rotate();
      projection.rotate([d3.event.x * sens, -d3.event.y * sens, rotate[2]]);
      svg.selectAll("path.land").attr("d", path);
      svg.selectAll(".focused").classed("focused", focused = false);
    })
    .on("dragend", function() {
      //  pause = false;
      //  spinning_globe(pause)
    })
 );
   //  Mouse events
   worldPath.on("mouseover", function(d) {
     countryTooltip.text(countryById[d.id])
     .style("left", (d3.event.pageX + 7) + "px")
     .style("top", (d3.event.pageY - 15) + "px")
     .style("display", "block")
     .style("opacity", 1);
   })
   .on("mouseout", function(d) {
     countryTooltip.style("opacity", 0)
     .style("display", "none");
   })
   .on("mousemove", function(d) {
     countryTooltip.style("left", (d3.event.pageX + 7) + "px")
     .style("top", (d3.event.pageY - 15) + "px");
   });

    //  // Zoom behavior
    // worldPath.call(d3.behavior.zoom()
    //    .scaleExtent([100, 800])
    //    .on("zoom", function(){
    //     //  worldPath.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    //    }));

    // Click event from Country On Globe
    worldPath.on("click", function(d) {
      console.log("this is on click: ", d);
      var saved = d3.select("#c" + d.id);
      saved[0][0].click()
    });


    // rotate country when country is selected
    if(countryObject !== null && countryObject !== undefined){

      var rotate = projection.rotate(),
      focusedCountry = country(countries, countryObject);
      var p = d3.geo.centroid(focusedCountry);

      svg.selectAll(".focused").classed("focused", focused = false);
      if (focusedCountry){
        transition();
      } else {
        console.log("There is no Country!!");
      }
      //  Globe rotating
      function transition() {
        d3.transition()
        .duration(2500)
        .tween("rotate", function() {
          var r = d3.interpolate(projection.rotate(), [-p[0], -p[1]]);
          return function(t) {
            projection.rotate(r(t));
            svg.selectAll("path").attr("d", path)
            .classed("focused", function(d, i) {
                return d.id == focusedCountry.id ? focused = d : false;
             });
          };
        });
      };
    }
      // });

    function country(cnt, sel) {
      for(var i = 0, l = cnt.length; i < l; i++) {
        if(cnt[i].id == sel.localeId) {return cnt[i];}
      }
    }
  }

};

worldGlobe.renderGlobeStats = function (storage, lowrange, highrange, category) {
  d3.selectAll('path.land').attr("class", "land").style("fill", function() {
    return '#383a3a';
  })

  let colorScale = d3.scale.linear()
                        .domain([lowrange, highrange])
                        .rangeRound([0, 14])
                        .nice();

  const colorArr1 = ['ffffff', 'e6ffff', 'ccffff', 'b3ffff', '99ffff', '80ffff', '66ffff',' 4dffff', '33ffff', '1affff', '00ffff', '00e6e6', '00cccc', '00b3b3', '009999'];
  const colorArr2 = ['b3ffb3', '99ff99', '80ff80', '66ff66', '4dff4d', '33ff33', '1aff1a', '00ff00', '00e600', '00cc00', '00b300', '009900', '008000', '006600', '004d00'];
  const colorArr3 = ['fff2e6', 'ffe6cc', 'ffd9b3', 'ffcc99', 'ffbf80', 'ffb366', 'ffa64d', 'ff9933', 'ff8c1a', 'ff8000', 'e67300', 'cc6600', 'b35900', '994d00', '804000'];

  function addingColor (array) {
      for (var i = 0; i < storage.length; i++) {
        let temp = colorScale(storage[i].value);
        storage[i].shade = array[temp];
        svg.selectAll('path').attr('d', path)
        .classed('.focused', function (d, j) {
          if (d.id === storage[i].Country.localeId) {
            d3.select(this).attr('class', 'land').style('fill', function () {
              return storage[i].shade;
            });
          }
        });
      }
    };

  if(category === 'Poverty') {
    addingColor(colorArr2);
  }

  if(category === 'Water Pollution') {
    addingColor(colorArr1);
  }

  if(category === 'Food Scarcity') {
    addingColor(colorArr3);
  }
}

export default worldGlobe
