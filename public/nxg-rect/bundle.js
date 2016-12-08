 $("#error").click(function(){
    var svg = d3.select("body").transition();

    svg.selectAll("rect").duration(500).style("fill", "red");
 })

  $("#green").click(function(){
    var svg = d3.select("body").transition();

    svg.selectAll("rect").duration(500).style("fill", "green");
 })

  $("#line-error").click(function(){
    var svg = d3.select("body").transition();

    svg.selectAll("path").duration(500).style("stroke", "red");
 })

  $("#line-green").click(function(){
    var svg = d3.select("body").transition();

    d3.selectAll(".nodegroup").transition().duration(500).style("opacity", "1");
 })

  $("#transition").click(function(){
    var svg = d3.select("body").transition();

    d3.selectAll("g").transition().duration(500)
    .attr("transform", function(d) { return "translate(" + 100 + "," + 100 + ")"; })
 })


function fadeOut(time){
  d3.selectAll(".nodegroup").transition().duration(time).style("opacity", 0).remove();
  d3.selectAll(".link").transition().duration(time).style("opacity", 0).remove();
}

function fadeIn(time){
  d3.selectAll("g").transition().duration(time).style("opacity", 1);
  // d3.selectAll(".link").transition().duration(time).style("stroke-opacity", 0.2);
}