//set up value base on the percentage
var dataset = [0,60,31.57,28.57,22.22,11.07,3.157,1.58];
//define all colors for the bar chart
var colors = ["#ffffd4", "#ffffb2", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02"];

//colort function to use colors range
var colorScale = d3.scale.quantile()
  .domain([0, colors.length - 1, d3.max(dataset, function(d) {
    return d;
  })])
  .range(colors);

//draw the svg bar chart
var svg=d3.select("#bar").append("svg")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class","bar")
    .style("height",function(d){
        //console.log(d);
        var barHeight = d*5;
        return barHeight +"px";
    })
    .style("background-color",function(d){
        return colorScale(d);
    });


//define colors for legends
    var COLORS = ["#cc4c02", "#ec7014", "#fe9929", "#fec44f", "#fee391", "#ffffb2","#ffffd4"],
    LABELS = ["Big Data Analytics", "AI/Machine Learning/Congnitive", "Public Cloud", "IoT","Blockchain","AR/VR","3D Printing"],
    VALUES =  [60,31.57,28.57,22.22,11.07,3.157,1.58];

function groupedChart() {
    var color = d3.scale.ordinal()
        .range(COLORS);
    //define the margin for legend
    var margin = {
        top: 300,
        right: 40,
        bottom: 45,
        left: 40
    };
    //define width and height for the legend
    var width = 500 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
    //draw svg graph and position for the legend
    var svg = d3.select("#graphic").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("class","g")
        .attr("style", "transform: translate(" + "21rem" + "," + "-87rem" + ")")
        .append("g")
        .attr("style","transform: translate(" + "9px" + "," + "66px"+ ")");
    var legspacing = 50;

    var legend = svg.selectAll(".legend")
        .data(VALUES)
        .enter()
        //.attr("style", "transform: translate(" + "800px" + "," + "-1180px" + ")")
        .append("g")
    //draw each legend as a square
    legend.append("rect")
        .attr("fill", color)
        .attr("width", 20)
        .attr("height", 20)
        .attr("y", function (d, i) {
            return i * legspacing - 60;
        })
        .attr("x", 0);
    //apend text for the legned
    legend.append("text")
        .attr("class", "label")
        .attr("y", function (d, i) {
            return i * legspacing - 46;
        })
        .attr("x", 30)
        .attr("text-anchor", "start")
        .text(function (d, i) {
            return LABELS[i];
        });

    
    }

d3.csv("data.csv", function (rates) {
    data = rates;
    groupedChart();
})
