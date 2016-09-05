/**
 * Created by codgod on 8/30/16.
 */

// sizes for area
var width = 700;
var height = 600;
var radius_1 = 100;
var radius_2 = 80;
var radius_3 = 50;

var circle_data = [
    { x: width/2, y: height - (radius_1), r: 100, color: "#ADD8E6" }, // First biggest circle
    { x: width/2, y: (height - (radius_1*2+radius_2)), r: 80, color: "#ADD8E6" }, // Middle circle
    { x: width/2, y: (height-(radius_1*2+radius_2*2+radius_3)), r: 50, color: "#ADD8E6" }, // Circle for head snowman
    { x: width/2-radius_3/2, y: (height-(radius_1*2+radius_2*2+radius_3)), r: 10, color: "black" }, // eyes for snowman
    { x: width/2+radius_3/2, y: (height-(radius_1*2+radius_2*2+radius_3)), r: 10, color: "black" }
];


// Create function for creating our snowman
function createSnowMan() {
    var svg  = d3.select("body").style("background-color", "black").append("svg") // create new element svg and append to body
        .attr("width", width)
        .attr("height", height)
        .style("background-color", "white");
    //'selectAll' method select all element with the same HTML tag name or class name or id name, etc.
    // (method creates a array like of empty elements if this elements do not exist in the DOM)
    // and combine all them in array like structure thus that,
    // for example, each `attr` method will be applied to each of them (see below).
    svg.selectAll("circle")
    //'data' - this method takes data structure and bind data with every element in
    // array like structure. Result call data() is reservation d3 places for data.
        .data(circle_data)
        // 'enter' - method returns reserved placed for elements with bound new data.
        .enter()
        //Append circle to svg element
        .append("circle")
        .attr("cy", function (d) { return d.y; }) // 'd' - is the one object from array like structure
        .attr("cx", function (d) { return d.x; })
        .attr("r", function (d) { return d.r; })
        .style("fill", function (d) { return d.color });

    // Now we draw nous for our snowman. This will be simples triangle.

    // This is data for our triangle for snowman nous
    var triangleData = [
        {"x" : width/2, "y" : (height-(radius_1*2+radius_2*2+radius_3) + 5) },
        {"x" : width/2 + 30, "y" : (height-(radius_1*2+radius_2*2+radius_3)) + 30 },
        {"x": width/2 , "y": (height-(radius_1*2+radius_2*2+radius_3)) + 15 },
        {"x" : width/2, "y" : (height-(radius_1*2+radius_2*2+radius_3) + 5) }
    ];

    // 'd3.line()' - method for create triangle. Builds thee point and connects them.
    var lineFunction = d3.line().x(function(d) { return d.x; }).y(function(d) { return d.y; });

    // 'path' - This is specific tag in d3.js, which has parameter 'd' for drawing line.
    svg.append("path")
        .attr("d", lineFunction(triangleData))
        .attr("stroke", "orange")   // line color
        .attr("stroke-width", 2)
        .attr("fill", "orange");     // color inside
}

createSnowMan();