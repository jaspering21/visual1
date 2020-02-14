var group = d3.select('#graphic5')
.append('svg')
.attr({
    width: 150,
    height: 200
})

.attr("style", "transform: translate(" + "16.6rem" + "," + "-115rem" + ")")
.append('g')
.attr("style", "transform: translate(" + "83px" + "," + "83px" + ")");

var data = [100];
var pieSegments = d3.layout.pie().sort(null); 
var piedata = pieSegments(data)

var arcGenerator = d3.svg.arc()
.innerRadius(53)
.outerRadius(64.35);

var colors =  d3.scale.ordinal().range(["#fec44f"]);
group.selectAll('path')
.data(piedata)
.enter()
.append('path')
.attr({
    d: arcGenerator,
    stroke: 'white',
    'stroke-width': 3,
    fill: function (d, i) {
        return colors(i);
    },
});
group.append("text")
.attr("text-anchor", "middle")
.attr('font-size', '2.5em')
.attr("fill","grey")
.attr('y', 14)
.text("17%");

group.append("text")
.attr("text-anchor", "middle")
.attr('font-size', '1.5em')
.attr("fill","grey")
.attr('y', 100)
.text("Not Very");