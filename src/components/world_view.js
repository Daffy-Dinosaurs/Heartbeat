import d3 from 'd3';
import world from './world-110m.json';
import names from './world-country-names.json';
import _ from 'lodash'
import topojson from 'topojson';

var projection
    , svg
    , path
    , g
    , worldPath
    , countries
    , width
    , height
    , sens
    , focused
    ;

const worldGlobe = {
  count: 0,
  loaded: false
};

worldGlobe.go = function(countryObject) {
  // Map configuration
  console.log("Being Called!!");
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

    countries = topojson.feature(world, world.objects.countries).features
    // set projection type and paremetes
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



    worldGlobe.loaded = true;
  }

console.log(projection);




  //  Main function
  //  queue()
  //   .defer(d3.json, "world")
  //   // .defer(d3.tsv, "/d/5685937/world-110m-country-names.tsv")
  //   .await(ready);
   ready(null, world)

  function ready(error, world, countryData) {

    var countryById = {},
    pause = false;


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
      console.log("Drag start");
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
    }));

    // Zoom behavior
    worldPath.call(d3.behavior.zoom())



     //Mouse events
    //  .on("mouseover", function(d) {
    //    countryTooltip.text(countryById[d.id])
    //    .style("left", (d3.event.pageX + 7) + "px")
    //    .style("top", (d3.event.pageY - 15) + "px")
    //    .style("display", "block")
    //    .style("opacity", 1);
    //  })
    //  .on("mouseout", function(d) {
    //    countryTooltip.style("opacity", 0)
    //    .style("display", "none");
    //  })
    //  .on("mousemove", function(d) {
    //    countryTooltip.style("left", (d3.event.pageX + 7) + "px")
    //    .style("top", (d3.event.pageY - 15) + "px");
    //  });
    // Country focus on option select
    // Attach this functionality for when a country is clicked
    // console.log("before>>>>>>>>???????????")
    //
    //     console.log("DOM fully loaded and parsed");
    //     console.log("You stop it: ", d3.selectAll("ul").selectAll("li"))
    //
    //
    // d3.selectAll("ul").selectAll("li").on("click", function() {
    //   console.log("<<<<<///>>>>>>>",this)
    if(countryObject !== null && countryObject !== undefined){
    console.log("Am i in here to rotate the country!!!!");

      var rotate = projection.rotate(),
      focusedCountry = country(countries, countryObject);
      console.log("////////", focusedCountry.id);
      var p = d3.geo.centroid(focusedCountry);

      svg.selectAll(".focused").classed("focused", focused = false);

      //  Globe rotating
      (function transition() {
        d3.transition()
        .duration(2500)
        .tween("rotate", function() {
          var r = d3.interpolate(projection.rotate(), [-p[0], -p[1]]);
          return function(t) {
            projection.rotate(r(t));
            svg.selectAll("path").attr("d", path)
            .classed("focused", function(d, i) { return d.id == focusedCountry.id ? focused = d : false;
             });
          };
        })
      })();
    }
      // });

    function country(cnt, sel) {
      for(var i = 0, l = cnt.length; i < l; i++) {
        if(cnt[i].id == sel.localeId) {return cnt[i];}
      }
    };
  }

}
export default worldGlobe
