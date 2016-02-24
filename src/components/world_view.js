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
    , shaded
    ;

const worldGlobe = {
  count: 0,
  loaded: false
};

worldGlobe.go = function(countryObject) {
  // Map configuration

  if(!worldGlobe.loaded){
    width  = 820;
    height = 620;
    sens = 0.25;
    // var rScale = d3.scale.sqrt();
    // var peoplePerPixel = 50000;
    // var max_population = [];

  // Configuration for the spinning effect
  var time = Date.now();
  var rotate = [0, 0];
  var velocity = [0.005, -0];

  // Tool tip div
  countryTooltip = d3.select("body").append("div").attr("class", "countryTooltip");

  // Parse country data
  countries = topojson.feature(world, world.objects.countries).features;

  // set projection type and parameters
  projection = d3.geo.orthographic(3)
    .scale(350)
    .translate([(width / 2) + 50, (height / 2) + 50])
    .clipAngle(90)
    .precision(0.3);

  path = d3.geo.path()
    .projection(projection);

  svg = d3.select(".globe").append("svg")
    .attr("width", "820")
    .attr("height", "720")
  g = svg.append("g");

  g.append("path")
    .datum({type: "Sphere"})
    .attr("class", "sphere")
    .attr("d", path)
    .attr("fill", "lightblue");

  worldPath = svg.selectAll("path.land")
    .data(countries)
    .enter().append("path")
    .attr("class", "land")
    .attr("d", path)
    .attr("fill", "#383a3a")

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
      console.log(">>>>>>>>>>>",focusedCountry);
      var p = d3.geo.centroid(focusedCountry);

      svg.selectAll(".focused").classed("focused", focused = false);
      if (focusedCountry){
        transition();
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

worldGlobe.renderGlobeStats = function (storage, lowrange, highrange) {
  // console.log('info coming through', storage, lowrange, highrange);
  let colorScale = d3.scale.linear()
                        .domain([lowrange, highrange])
                        .range([0, 5])
                        .nice();

  // let color = d3.rgb(240, 248, 255) // d3_Rgb object

  let colorArr = ['86C98A', '54A759', '2D8633', '116416', '004304'];


  for (var i = 0; i < storage.length; i++) {
    let temp = colorScale(storage[i].value)
    console.log('this is the temp variable', temp)
    // storage[i].shade = colorArr[temp];
    console.log(storage[i].shade)

    // let sortable = worldPath[0];
    // worldPath.map(function(d){
    // console.log(d)
    // })

    svg.selectAll("path").attr("d", path)
    .classed("shaded", function(d, j) {
      // console.log('this is D', d)
      if(d.id === storage[i].CountryId) {
        // console.log('passed conditional')
        // console.log('D3 item', d3.select(d))

        d3.select(this).attr("class", "").style("fill", function() {
          //console.log('this is the hex color', storage[i].color)
          return storage[i].shade;
        })
      }
    })


    //console.log(worldData);


    // for(var j = 0; j < sortable.length; j++) {
    //   console.log('this is world path item', sortable[j]);
    // }

  }
  //we still need to match a number to a color






  //get lowest and highest values from incoming storage object
  // var food = [], water = [], poverty = [];
  //
  // for (var i = 0; i < storage.length; i++){
  //   if (storage[i].category === "Food Scarcity" && storage[i].value !== 0){
  //     food.push(storage[i].value)
  //   }
  //   else if (storage[i].category === "Water Pollution" && storage[i].value !== 0){
  //     water.push(storage[i].value)
  //   }
  //   else if (storage[i].category === "Poverty" && storage[i].value !== 0){
  //     poverty.push(storage[i].value)
  //   }
  // }

  // var ranges = {
  // };
  //
  // ranges.foodLowest = Math.min(...food);
  // ranges.foodHighest = Math.max(...food);
  //
  // ranges.waterLowest = Math.min(...water);
  // ranges.waterHighest = Math.max(...water);
  //
  // ranges.povertyLowest = Math.min(...poverty);
  // ranges.povertyHighest = Math.max(...poverty);

  //translate value to % out of 100 (lowestVal = 0, highestVal = 100)


}

export default worldGlobe
