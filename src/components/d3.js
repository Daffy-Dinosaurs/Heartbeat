//d3Globe
import queue from 'd3-queue';
import d3 from 'd3';
import world from './world-110m.json';
import names from './world-country-names.json';

// import names from 'raw!./world-country-names.tsv';
import topojson from 'topojson';

var d3Globe = {}; //export object

d3Globe.go = function(id) { //function runs the boilerplate d3 code

  var width = 960;  //canvas dimensions
  var height = 960;

  var projection = d3.geo.orthographic() //projection is fed to PATH
      .translate([width / 2, height / 2])
      .scale(width / 2 - 60)
      .clipAngle(90)
      .precision(0.6);

  //CREATES and APPENDS canvas element to first ".container" elem on DOM tree, returns arr [canvas]
  if (d3.selectAll('canvas')[0].length < 1) {
    console.log('THERE WAS NO CANVAS');
    console.log(d3.selectAll('canvas'));

    var canvas = d3.select('.globe').append('canvas')
    .attr('width', width)
    .attr('height', height);
  } else {
    console.log('THERE ALREADY WAS THE CANVAS');
    var canvas = d3.selectAll('canvas');
  }

  //selects first non-null node inside canvas, and returns a drawing context ON the canvas with 2d rendering context (this selection is DRAW-ABLE)
  var c = canvas.node().getContext('2d');

  //Create + Store GEOJSON format component via geographic path generator
  //path -- returns path data string for a given feature arg
  var path = d3.geo.path()
      .projection(projection) // see https://goo.gl/rJ51aF
      .context(c); //

  var title = d3.select('.none');

  ready(world, names);

  function ready(world, names, error) {
    if (error) throw error;

    var globe = { type: 'Sphere' };
    var land = topojson.feature(world, world.objects.land);
    var countries = topojson.feature(world, world.objects.countries).features;
    var borders = topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; });

    var i = id;
    var n = countries.length;

    var countries = countries.filter(function(d) {
      return names.some(function(n) {
        if (d.id == n.id) return d.name = n.name;
      });
    }).sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });

    console.log(countries);

    function transition(id) {
      //traverse countries arr
      //find "i" for country in countries arr with "name"
      //set "i" to that country's "i"

      function selectedCountry(collection) {
        var result = -1;
        for (var i = 0; i < collection.length; i++) {
          var country = collection[i];
          if (country.id === id) {
            result = i;
          }
        }

        return result;
      }

      var properEye = selectedCountry(countries);
      console.log('======= =======  ======', properEye);

      d3.transition()
          .duration(1250)
          .each('start', function() { //transition event listener
            //   title.text(countries[i = (i + 1) % n].name); //on start, set title text to new country name in alphabetical order (i = -1)
            // })
            //id = countryName

            //import countryName
            console.log('id', id, 'properEye', properEye);

            i = id || 1;
            console.log('\n\n\n');
            console.log('\n\n\nhere is I:', i, '\n\n\n');
            title.text(countries[i].name); //on start, set title text to new country name in alphabetical order (i = -1)
          })
          .tween('rotate', function() { //name of tween, factory function with "i" and "d"
            if (!countries[i]) {
              i = 1;
            } else {
              i = properEye;
            }

            var p = d3.geo.centroid(countries[i]), //returns sphere centroid of current country object
                r = d3.interpolate(projection.rotate(), [-p[0], -p[1]]); //returns interpolation from point a (current rotation) to point b (array of two values)
            console.log('p', p, 'r', r, 'i', i, [-p[0], -p[1]]);
            return function(t) {
              projection.rotate(r(t));
              c.clearRect(0, 0, width, height);
              c.fillStyle = '#ccc', c.beginPath(), path(land), c.fill();
              c.fillStyle = '#f00', c.beginPath(), path(countries[i]), c.fill();
              c.strokeStyle = '#fff', c.lineWidth = .5, c.beginPath(), path(borders), c.stroke();
              c.strokeStyle = '#000', c.lineWidth = 2, c.beginPath(), path(globe), c.stroke();
            };
          })
        .transition();

      // .each("end", transition);
    };

    transition(id);
    d3.select(self.frameElement).style('height', height + 'px');
  }
};

module.exports = d3Globe;
