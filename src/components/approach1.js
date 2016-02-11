var approach1 = {};

approach1.graph = function(){

  var base = d3.select('body');

  var chart = base.append("canvas") //appends a new element with specified name as the last child of each element in current selection
    .attr("width", 400)
    .attr("height", 300);
  console.log(chart);

  var context = chart.node().getContext("2d"); //.getContext returns a drawing context on the canvas
  var data = [1,2,13,20,23];

  //scale functions map an input domain to an output range
    //returned scale object is both an object and a function
    //setter method returns the scale itself, allowing for multiple setters to be invoked in one statement
    //linear scales map continuous inputs (domain) to continuous outputs (range) 
    //an output can be expressed as a linear function of the input   (e.g. y = mx + b where x is input and y is output value)
    //output is usually the desired value to be rendered in the histogram

  var scale = d3.scale.linear() //constructs a linear scale
    .range([10,390]) //sets scale's output range to specified array of values
    .domain([1,23]); //sets scale's input domain to the specified array of numbers

  data.forEach(function(d, i) {
    context.beginPath();
    context.rect(scale(d), 150, 10, 10);
    context.fillStyle="red";
    context.fill();
    context.closePath();
  });
  
}

export default approach1