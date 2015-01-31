// #convincingness - Playing with d3 and exploring the CitiBike dataset
// Emily Wang
// January 26, 2015

// Code snippets from the introduction on http://d3js.org/

d3.json("CitiBikeFebruary2014_100rows.json", function(json) {
    citibikeData = json;
});

var data = [4, 8, 15, 16, 23, 42];

// bar chart tutorial, part 1
// http://bost.ocks.org/mike/bar/

// mapping from data space (domain) to display space (range)
scaling = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return scaling(d) + "px"; })
    .text(function(d) { return d; });