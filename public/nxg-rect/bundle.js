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

    svg.selectAll("path").duration(500).style("stroke", "green");
 })