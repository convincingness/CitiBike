// #convincingness - Playing with d3 and exploring the CitiBike dataset
// Emily Wang
// January 26, 2015

// bar chart tutorial, part 2
// http://bost.ocks.org/mike/bar/2/

var width = 420;
var barHeight = 20;

// mapping from data space (domain) to display space (range)
var xscaling = d3.scale.linear()
    .range([0, width]);

var chart = d3.select(".chart")
    .attr("width", width)

// beware globals for now!
// todo: make variable scope more robust
d3.json("CitiBikeFebruary2014_100rows.json", function(error, json) {
    citibikeData = json;
    console.log("loaded CitiBikeFebruary2014_100rows data!");
    tripdurationVals = d3.values(citibikeData["tripduration"]);
    console.log(d3.max(tripdurationVals));
    xscaling.domain([0, d3.max(tripdurationVals)]);

    chart.attr("height", barHeight * tripdurationVals.length);

    var bar = chart.selectAll("g")
        .data(citibikeData)
      .enter().append("g")
        .attr("transform", function (d, i) { return "translate(0," + i * barHeight + ")"; })

    bar.append("rect")
        .attr("width", function(d) { return xscaling(d.value); } )
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) { return x(d.value) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d.value; });

});

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}