"use strict"
var radiusOfExpandingCircle = 0;

function expandingCircle() {
    c = document.getElementById("cnvs").getContext("2d");

    if (radiusOfExpandingCircle < 75) {
        var Startcircle = new Path2D();
        Startcircle.arc(145, 75, radiusOfExpandingCircle++, 0, 2 * Math.PI);
        c.stroke(Startcircle);
        setTimeout(expandingCircle, 100);

    }

}

function rad2vol() {

    var rad = document.getElementById("rtxt").value;
    var vol = document.getElementById("vtxt");

    vol.value = [(4 / 3) * Math.PI] * Math.pow(rad, 3);

}
var c;

function drawCircle() {
    var c = document.getElementById("cnvs").getContext("2d");
    var circleValue = new Path2D();
    circleValue.arc(145, 75, document.getElementById("rtxt").value, 0, 2 * Math.PI, true);
    c.stroke(circleValue);
    if (document.getElementById("rtxt").value > 74) {
        alert("Radius exceeds the canvas borders");
    }
    if (isNaN(document.getElementById("rtxt").value)) {
        alert("Enter numbers only");
    }
}

function clearcanvas1() {
    c = document.getElementById("cnvs").getContext("2d");
    c.clearRect(0, 0, 759, 406);
}