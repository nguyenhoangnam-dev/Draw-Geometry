// This is all variable in project
// This is jxgbox id
var box = document.getElementById("jxgbox")

// This is width, height of jxgbox
const wid = box.offsetWidth;
const hei = box.offsetHeight;

// This is unit of coordinate
var axisX = 8;
var axisY = Math.round((axisX * hei / wid) * 100) / 100;

// This create new coordinate
var brd = JXG.JSXGraph.initBoard("jxgbox", {
    renderer: 'canvas',
    axis: false,
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

// This for color-picker
var fill = document.getElementById("fillColor");
fill.value = ""
var fillColor = new CP(fill);
var stroke = document.getElementById("strokeColor");
stroke.value = ""
var strokeColor = new CP(stroke);

// This array contain all point
var allPoint = [];

// This are all lines
var allLine = [];

// This show this point in line
var isLine = [];

// This all circle
var allCirc = [];

// This show this point in circle
var isCirc = [];

// This store all text
var allText = []

// This for text
var newText = [];

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

var squareDiv5 = document.createElement('div');
squareDiv5.id = 'six';
squareDiv5.className = 'square';

moreTool.appendChild(squareDiv);
moreTool.appendChild(squareDiv1);
moreTool.appendChild(squareDiv2);
moreTool.appendChild(squareDiv3);
moreTool.appendChild(squareDiv4);
moreTool.appendChild(squareDiv5);

var tex;
var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
var four = document.getElementById('four')
var five = document.getElementById('five')
var six = document.getElementById('six')

// This is all more tool choice
var choiceTool = [one, two, three, four, five, six];

// This for midpoint 
var mid = [];

// This for intersection
var inter = []

// This create a perpendicular
var perp = []

// This all kind of line, point
var pointKind = ["point", "intersection", "midpoint"]
var lineKind = ["line", "perpendicular", "parallel", "segment", "bisector", "polarline"]
var circleKind = ["circle", "circumcircle", "incircle"]

// This for parallel
var para = [];

// This for segment
var segment = []

// This for angle bisector
var ang = []

// This for tangent
var tangent = []
var sample

// This for circumcircle
var circum = []

// This for incircle
var incircle = []

// This save color of allpoint
var allPointColor = []
var allLineColor = []
var allCircColor = []

//  This is temporary store intersection point
var tempInter

// This for screenshot 
var download = document.getElementById("download");

var slider = document.getElementById("range");
var allLineWidth = []
var allCircWidth = []

// This for search 
var options = {
    valueNames: ['id', 'name'],
    item: '<li><p class="id name"></p></li>'
};

var values = [{
        id: 1,
        name: 'Apollonius circle'
    },
    {
        id: 2,
        name: 'Anti-Steiner point'
    },
    {
        id: 3,
        name: 'Anti-cenvian triangle'
    },
    {
        id: 4,
        name: 'Anti-Pedal triangle'
    },
    {
        id: 5,
        name: 'Antigonal point'
    },
    {
        id: 6,
        name: 'Angle'
    },
    {
        id: 7,
        name: 'Brocard point'
    },
    {
        id: 8,
        name: 'Brocard triangle'
    },
    {
        id: 9,
        name: 'Cevian triangle'
    },
    {
        id: 10,
        name: 'Circumcenter'
    },
    {
        id: 11,
        name: 'cyclocevian point'
    },
    {
        id: 12,
        name: 'centroid'
    },
    {
        id: 13,
        name: 'Dumpty point'
    },
    {
        id: 14,
        name: 'Euler point'
    },
    {
        id: 15,
        name: 'Euler line'
    },
    {
        id: 16,
        name: 'Euler circle'
    },
    {
        id: 17,
        name: 'Excenter'
    },
    {
        id: 18,
        name: 'Feuerbach point'
    },
    {
        id: 19,
        name: 'Fermat point'
    },
    {
        id: 20,
        name: 'Gauss line'
    },
    {
        id: 21,
        name: 'Humpty point'
    },
    {
        id: 22,
        name: 'Hagge circle'
    },
    {
        id: 23,
        name: 'Kiepert hyperbola'
    },
    {
        id: 24,
        name: 'Kosnita point'
    },
    {
        id: 25,
        name: 'Jerabek hyperbola'
    },
    {
        id: 26,
        name: 'Lemoine point'
    },
    {
        id: 27,
        name: 'Miquel point'
    },
    {
        id: 28,
        name: 'Miquel circle'
    },
    {
        id: 29,
        name: 'Medial triangle'
    },
    {
        id: 30,
        name: 'Mixtilinear incircle'
    },
    {
        id: 31,
        name: 'Mixtilinear excircle'
    },
    {
        id: 32,
        name: 'Nagel point'
    },
    {
        id: 33,
        name: 'Napoleon point'
    },
    {
        id: 34,
        name: 'Orthocenter'
    },
    {
        id: 35,
        name: 'Orthogonal segment'
    },
    {
        id: 36,
        name: 'Orthic triangle'
    },
    {
        id: 37,
        name: 'Poncelet point'
    },
    {
        id: 38,
        name: 'Poncelet point'
    },
    {
        id: 39,
        name: 'Pedal triangle'
    },
    {
        id: 40,
        name: 'Perpendicular bisector'
    },

    {
        id: 41,
        name: 'Steiner line'
    },
    {
        id: 42,
        name: 'Simson line'
    },
    {
        id: 43,
        name: 'Square'
    },
    {
        id: 44,
        name: 'Symedian line'
    },
    {
        id: 45,
        name: 'Trillinear pole'
    },
    {
        id: 46,
        name: 'Trillinear polar'
    },
    {
        id: 47,
        name: 'Tangent line'
    },
    {
        id: 48,
        name: 'Thebault circle'
    },
    {
        id: 49,
        name: 'Isotomic conjugate'
    },
    {
        id: 50,
        name: 'Isogonal conjugate'
    },
];

var search = document.getElementById("search");
var searchValue;
var listOption = document.getElementById("list");
var textChoice = document.getElementsByClassName("name")
var userList = new List('users', options, values)
userList.show(1, 10);

var searchId