//d3Globe
import queue from 'd3-queue';
import d3 from 'd3';


var d3Globe = {};

d3Globe.width = 960,
d3Globe.height = 960;

d3Globe.projection = d3.geo.orthographic()
    .translate([d3Globe.width / 2, d3Globe.height / 2])
    .scale(d3Globe.width / 2 - 20)
    .clipAngle(90)
    .precision(0.6);

d3Globe.canvas = d3.select("body").append("canvas")
    .attr("width", d3Globe.width)
    .attr("height", d3Globe.height);

d3Globe.c = d3Globe.canvas.node().getContext("2d");

d3Globe.path = d3.geo.path()
    .projection(d3Globe.projection)
    .context(d3Globe.c);

d3Globe.title = d3.select("h1");

queue();
    .defer(d3.json, './world-110m.json')
    .defer(d3.tsv, './world-country-names.tsv')
    .await(this.ready);

d3Globe.ready = function (error, world, names) {
  if (error) throw error;

  var globe = {type: "Sphere"},
      land = topojson.feature(world, world.objects.land),
      countries = topojson.feature(world, world.objects.countries).features,
      borders = topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }),
      i = -1,
      n = countries.length;


  countries = countries.filter(function(d) {
    return names.some(function(n) {
      if (d.id == n.id) return d.name = n.name;
    });
  }).sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });

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
            c.clearRect(0, 0, d3Globe.width, d3Globe.height);
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
d3.select(self.frameElement).style("height", d3Globe.height + "px");

module.exports = d3Globe;