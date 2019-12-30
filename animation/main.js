"use strict";

//function animateOf(anim) {
// return setInterval(function() {
//       let currSec = new Date().getSeconds()
//       anim(currSec)
// }, 1000); //  1 sec
//};

function animateOf(anim) {
 return setInterval(function() {
       let epochSec = Date.now() / 1000
       anim(epochSec)
 }, 1000); //  1 sec
};

let paper = Snap(400, 400);
let r = paper.rect(150, 100, 100, 220);
r.attr({
    fill: "transparent",
    stroke: "#000",
    strokeWidth: 3
});

let cRed = paper.circle(200, 140, 25);
cRed.attr({
    fill: "black",
    strokeWidth: 3
});

let cYellow = paper.circle(200, 210, 25);
cYellow.attr({
    fill: "black",
    strokeWidth: 3
});

let cGreen = paper.circle(200, 280, 25);
cGreen.attr({
    fill: "black",
    strokeWidth: 3
});
animateOf(function(t) {
let cond = (t % 9);
if ( cond >= 0 && cond < 3) {
 cGreen.attr({fill: "green"});
 cYellow.attr({fill: "black"});
 cRed.attr({fill: "black"});
 }
else if ( cond >= 3 && cond < 4) {
 cYellow.attr({fill: "yellow"});
 cGreen.attr({fill: "black"});
}
else if ( cond >= 4 && cond < 7 ) {
 cRed.attr({fill: "red"});
 cYellow.attr({fill: "black"});
}
else if ( cond >= 7) {
 cYellow.attr({fill: "yellow"});
}} );

//if ( t % 3 == 0) { cRed.attr({fill: "red"}) } else { cRed.attr({fill: "black"}) } } );

let paper2 = Snap(800, 400);

let pathStyle = {
    stroke: "#222",
    fill: "transparent",
    strokeWidth: 1, opacity:0
};

function tree(n, x, y, anim) {
    let bases = [{baseX: x, baseY: y, baseAngle : 0}];
    for (let i = 0; i < n; i++) {
        let newBases = []
        for (let j = 0; j < Math.pow(2, i); j++) {
            let sign = isEven(j) ? 1 : -1
            let {baseX, baseY, baseAngle} = bases[Math.floor(j / 2)]
            let newAngle = i > 0 ? baseAngle + sign * 18 : 0
            let newX = baseX + 20 * Snap.sin(newAngle)
            let newY = baseY - 20 * Snap.cos(newAngle)
            paper2.path("").attr(pathStyle).attr({d: `M ${baseX},${baseY} L ${newX},${newY}`}).animate({opacity:1}, 8000, mina.easeout);
            newBases.push({baseX:newX, baseY:newY, baseAngle: newAngle})
        }
        bases = newBases
    };

    bases.forEach((item) => anim(item.baseX, item.baseY) )

};

function flowersBloom(x, y) {
let flower = paper2.circle(x, y, 1);
flower.attr({
    fill: "pink",
}).stop().animate({r:5}, 5000, mina.bounce);
};

function isEven(n) {
    return n % 2 == 0;
};

tree(8, 400, 350, flowersBloom);
