// #convincingness - Playing with d3 and exploring the CitiBike dataset
// Emily Wang
// January 26, 2015

// Code snippets from the introduction on http://d3js.org/

d3.select("body").selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
.enter().append("p")
    .text(function(d) { return "I'm number " + d + "!"; });

d3.selectAll("p").style("color", function() {
  return "hsl(" + Math.random() * 360 + ",100%,50%)";
});

d3.selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
    .style("font-size", function(d) { return d + "px"; });

// Update…
var p = d3.select("body").selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
    .text(String);

// Enter…
p.enter().append("p")
    .text(String);

// Exit…
p.exit().remove();

d3.json("CitiBikeFebruary2014_100rows.json", function(json) {
    data = json;
});