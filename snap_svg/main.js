"use strict";

let style = {
    fill: '#387',
    stroke: '#222',
    strokeWidth: 5
};

let paper = Snap(800, 400)

let path = paper.path("").attr({
    stroke: "#222",
    fill: "transparent",
    strokeWidth: 3
})

let pathArray = []

let updatePath = function() {
    let first = pathArray[0]
    path.attr({
        d: `M ${first.x}, ${first.y}` + pathArray.slice(1).reduce((sum, c) => sum + `L ${c.x}, ${c.y}`, "")
    })
}


let move = function(dx, dy, xpos, ypos) {
    var radius = this.getBBox().r0;
    if (xpos <= 800 - radius && ypos <= 400 - radius && xpos > radius && ypos > radius) {
        this.attr({cx: xpos, cy: ypos})
        var currNode = pathArray[this.data("i")];
        currNode.x = xpos
        currNode.y = ypos
        updatePath()
        console.log(`${xpos} - ${ypos}`)
    }
    console.log("Borders are reached")
}

paper.click( e => {
    if (e.target.tagName == 'svg' || e.target.tagName == 'path') {
        paper.circle(e.offsetX, e.offsetY, 15)
            .attr(style)
            .mouseover(function(){ this.stop().animate({r:25}, 500, mina.elastic()) })
            .mouseout(function(){ this.stop().animate({r:15}, 300, mina.easeinout()) })
            .data("i", pathArray.length)
            .drag(move,
            () => path.stop().animate({opacity: .2}, 200, mina.easeinout()),
            () => path.stop().animate({opacity: 1}, 500, mina.easeinout()))

        pathArray.push({
            x : e.offsetX,
            y : e.offsetY
        })

        updatePath()
    }
})