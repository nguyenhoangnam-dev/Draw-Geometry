// This is all variable in project
// This is width, height of jxgbox
const wid = document.getElementById("jxgbox").offsetWidth;
const hei = document.getElementById("jxgbox").offsetHeight;

// This is unit of coordinate
var axisX = 8;
var axisY = Math.round((axisX * hei / wid) * 100) / 100;

// This create new coordinate
var brd = JXG.JSXGraph.initBoard("jxgbox", {
    axis: true,
    boundingbox: [-axisX, axisY, axisX, -axisY],
    showCopyright: false
});


// This is basic event
var mouse = document.getElementById("mouse");
var point = document.getElementById("point");
var line = document.getElementById("line");
var circle = document.getElementById("circle");
var conic = document.getElementById("conic");
var choice = [mouse, point, line, circle, conic];

// This array contain all point
var allPoint = [];

// This are all lines
var allLine = [];

// This is fucking crazy idea
var aphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// This show this point in line
var isLine = [];

// This all circle
var allCirc = [];

// This show this point in circle
var isCirc = [];

// This is where to show more tool
var moreTool = document.getElementById("moreTool");

// Make button
var squareDiv = document.createElement('div');
squareDiv.id = 'one';
squareDiv.className = 'square';

var squareDiv1 = document.createElement('div');
squareDiv1.id = 'two';
squareDiv1.className = 'square';

var squareDiv2 = document.createElement('div');
squareDiv2.id = 'three';
squareDiv2.className = 'square';

var squareDiv3 = document.createElement('div');
squareDiv3.id = 'four';
squareDiv3.className = 'square';

var squareDiv4 = document.createElement('div');
squareDiv4.id = 'five';
squareDiv4.className = 'square';

moreTool.appendChild(squareDiv);
moreTool.appendChild(squareDiv1);
moreTool.appendChild(squareDiv2);
moreTool.appendChild(squareDiv3);
moreTool.appendChild(squareDiv4);

var tex;
var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
var four = document.getElementById('four')
var five = document.getElementById('five')

// This is all more tool choice
var choiceTool = [one, two, three, four, five];

// This for midpoint 
var mid = [];

// This for intersection
var inter = []

// This create a perpendicular
var perp = []

// This all kind of line, point
var pointKind = ["point", "intersection", "midpoint"]
var lineKind = ["line", "perpendicular", "parallel", "segment"]
var circleKind = ["circle", "circumcircle", "incircle"]

// This for parallel
var para = [];

// This for segment
var segment = []

// This for angle bisector
var ang = []

// This for circumcircle
var circum = []

// This for incircle
var incircle = []