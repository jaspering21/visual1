var data = [{
    "name": "IT Group",
    "value": 39,
},
{
    "name": "Multiple Group Decision",
    "value": 33,
},
{
    "name": "Executive Management",
    "value": 12,
},
{
    "name": "Business Unit",
    "value": 7,
},
{
    "name": "Innocation Group",
    "value": 7,
}];

//set up margin conventions 
var margin = {
    top: 10,
    right: 60,
    bottom: 10,
    left: 60
};

//define fixed width and height based on margin
var width = 400- margin.left - margin.right,
height = 200 - margin.top - margin.bottom;

//set up svg graph and position
var svg = d3.select("#graphic").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("class","g")
    .attr("style", "transform: translate(" + "44rem" + "," + "-123rem" + ")")
    .append("g");

var x = d3.scale.linear()
    .range([0, width])
    .domain([0, d3.max(data, function (d) {
    return d.value;
    })]);

var y = d3.scale.ordinal()
    .rangeRoundBands([height, 0], .1)
    .domain(data.map(function (d) {
    return d.name;
    }));

var bars = svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("g")

//append rects
bars.append("rect")
    .attr("class", "bar")
    .attr("y", function (d) {
    return y(d.name);
    })
    .attr("height", y.rangeBand())
    .attr("x", 0)
   .attr("width", function (d) {
    return x(d.value);
    });

//add a value label to the right of each bar
bars.append("text")
    .attr("class", "label")
    .attr("y", function (d) {
    return y(d.name) + y.rangeBand() / 2 + 4;
})
    .attr("x", function (d) {
    return 7;
    })
    .attr("fill","white")
    .attr('font-size', '5em')
    .text(function (d) {
    return d.value+"%";
}   );

//apend lable text
bars.append("text")
    .attr("class", "label")
    .attr("y", function (d) {
    return y(d.name) + y.rangeBand() / 2 + 4;
    })
    .attr("x", function (d) {
    return x(d.value)+ 5;
    })
    .attr("fill","orange")
    .text(function (d) {
    return d.name;
    });

    