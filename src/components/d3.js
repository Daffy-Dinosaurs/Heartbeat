//d3Globe
import d3 from 'd3';
import q from 'd3-queue';
import topojson from 'topojson';
import filePath from 'path'


var d3Globe = {};

var width = 960,
    height = 960;
console.log(d3)
console.log(q)
d3Globe.create = function(props){
  var projection = d3.geo.orthographic()
    .translate([props.width / 2, props.height / 2])
    .scale(props.width / 2 - 20)
    .clipAngle(90)
    .precision(0.6);

  var canvas = d3.select("body").append("canvas")
    .attr("width", props.width)
    .attr("height", props.height);

  var c = canvas.node().getContext("2d");

  var path = d3.geo.path()
    .projection(projection)
    .context(c);


  // console.log(d3.json('world-110m.json' ))
// console.log(__dirname, );
  // q.queue()
  //   .defer(d3.json, '/components/world-110m.json')
  //   .defer(d3.tsv, __dirname + '/world-country-names.tsv')
  //   .await(this.ready);
  ready(props.world, props.country)

  function ready (world, names, error) {
    if (error) throw error;
    var title = d3.select("h1");

    var globe = {type: "Sphere"},
        land = topojson.feature(world, world.objects.land),
        countries = topojson.feature(world, world.objects.countries).features,
        borders = topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }),
        i = -1,
        n = countries.length;
  //
//       names = names.split("\n");
// console.log("this is names: ",names)
//
//   countries = countries.filter(function(d) {
//     return names.some(function(n) {
//       if (d.id == n.id) return d.name = n.name;
//     });
//   }).sort(function(a, b) {
//     return a.name.localeCompare(b.name);
//   });

  (function transition() {
    d3.transition()
        .duration(1250)
        .each("start", function() {
          title.text(countries[i = (i + 1) % n].name);
        })
        .tween("rotate", function() {
          var p = d3.geo.centroid(countries[i]),
              r = d3.interpolate(projection.rotate(), [-p[0], -p[1]]);
          return function(t) {
            projection.rotate(r(t));
            c.clearRect(0, 0, width, height);
            c.fillStyle = "#ccc", c.beginPath(), path(land), c.fill();
            c.fillStyle = "#f00", c.beginPath(), path(countries[i]), c.fill();
            c.strokeStyle = "#fff", c.lineWidth = .5, c.beginPath(), path(borders), c.stroke();
            c.strokeStyle = "#000", c.lineWidth = 2, c.beginPath(), path(globe), c.stroke();
          };
        })
      .transition()
        .each("end", transition);
  })();
};

d3.select(self.frameElement).style("height", height + "px");
}
export default d3Globe;
