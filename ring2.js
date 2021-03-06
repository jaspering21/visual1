var group = d3.select('#graphic5')
.append('svg')
.attr({
    width: 150,
    height: 200
})
//.append('g')
//.attr('transform', 'translate(105, 105)')
//.attr("class","g")
.attr("style", "transform: translate(" + "7.5rem" + "," + "-115rem" + ")")
.append('g')
.attr("style", "transform: translate(" + "83px" + "," + "83px" + ")");

var data = [53, 47];
var pieSegments = d3.layout.pie().sort(null); 
var piedata = pieSegments(data)

var arcGenerator = d3.svg.arc()
.innerRadius(45)
.outerRadius(64.35);
//         .startAngle(-0.8 * Math.PI)
// .endAngle(1.2 * Math.PI);
// .startAngle(function (d) {
//     return d.startAngle;
// })
// .endAngle(function (d) {
//     return d.endAngle;
// });
//["#cc4c02", "#ec7014", "#fe9929", "#fec44f", "#fee391", "#ffffb2"]
var colors =  d3.scale.ordinal().range(["#fe9929", "#fee391"]);
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
.attr('font-size', '1.5em')
.attr('y', 12)
.text("53%");

group.append("text")
.attr("text-anchor", "middle")
.attr('font-size', '1.5em')
.attr('y', 100)
.text("Yes");