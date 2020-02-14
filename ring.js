//set up the margin for the donut chart
var margins = {
    top: 12,
    left: 48,
    right: 24,
    bottom: 24
};
//define the width and height and position for the donut chart
var width = 300- margin.left - margin.right,
height = 500 - margin.top - margin.bottom;
var group = d3.select('#graphic3')
            .append('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            //.append('g')
            //.attr('transform', 'translate(105, 105)');
            // transform: translate(-35rem, -159rem);
            .attr("class","g")
            .attr("style", "transform: translate(" + "9rem" + "," + "-173rem" + ")")
            .append('g')
            .attr("style", "transform: translate(" + "125px" + "," + "126px" + ")");

        var data = [3, 9, 15, 18, 24, 29];
        var pieSegments = d3.layout.pie().sort(null); 
        var piedata = pieSegments(data)
        //set up the staring point and end point for each donut charts segements
        var arcGenerator = d3.svg.arc()
            .innerRadius(80)
            .outerRadius(120)
    //         .startAngle(-0.8 * Math.PI)
	// .endAngle(1.2 * Math.PI);
            .startAngle(function (d) {
                return 2+d.startAngle;
            })
            .endAngle(function (d) {
                return 2+d.endAngle;
            });
            //["#cc4c02", "#ec7014", "#fe9929", "#fec44f", "#fee391", "#ffffb2"]
        var colors =  d3.scale.ordinal().range(["#ffffb2", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02"]);
        //draw each donut charts segement using path
        group.selectAll('path')
            .data(piedata)
            .enter()
            .append('path')
            .attr({
                d: arcGenerator,
                fill: function (d, i) {
                    return colors(i);
                },
            });

        //define each donut chart segent color
            var COLORS = ["#cc4c02", "#ec7014", "#fe9929", "#fec44f", "#fee391", "#ffffb2"],
            LABELS = ["Anticipated Cost Savings", "New Revenue Stream", "Ability to Reach New Customers", "Increased Agility","Reputational Value","A Customer's Successful Implementation"],
            VALUES =  [60,31.57,28.57,22.22,11.07,3.157];
        
        function groupedChart() {
            var color = d3.scale.ordinal()
                .range(COLORS);
        
            var margin = {
                top: 300,
                right: 40,
                bottom: 45,
                left: 40
            };
        
            var width = 300 - margin.left - margin.right,
                height = 300 - margin.top - margin.bottom;
        
            var svg = d3.select("#graphic3").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .attr("class","g")
                .attr("style", "transform: translate(" + "8rem" + "," + "-188rem" + ")")
                .append("g")
                .attr("style","transform: translate(" + "9px" + "," + "66px"+ ")");
            var legspacing = 50;
        
            var legend = svg.selectAll(".legend")
                .data(VALUES)
                .enter()
                //.attr("style", "transform: translate(" + "800px" + "," + "-1180px" + ")")
                .append("g")
                
            legend.append("rect")
                .attr("fill", color)
                .attr("width", 20)
                .attr("height", 20)
                .attr("y", function (d, i) {
                    return i * legspacing - 60;
                })
                .attr("x", 0);
        
            legend.append("text")
                .attr("class", "label")
                .attr("fill","grey")
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
        