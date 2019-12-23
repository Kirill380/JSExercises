"use strict";

let style = {
    fill: '#D20F0F',
    stroke: '#FF4400',
    strokeWidth: 2,
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

let rec = paper.rect(0, 0, 20, 20).attr(style).drag()

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

paper.click(function(e) {
    if (e.target.tagName == 'svg' || e.target.tagName == 'path') {
        paper.circle(e.offsetX, e.offsetY, 15)
            .attr(style)
            .mouseover(function(){ this.stop().animate({r:25}, 600, mina.bounce) })
            .mouseout(function(){ this.stop().animate({r:15}, 400, mina.backin) })
            .data("i", pathArray.length)
            .drag(
            move,
            () => path.stop().animate({opacity: .2}, 200, mina.easeinout),
            () => path.stop().animate({opacity: 1}, 500, mina.easeinout))

        pathArray.push({
            x : e.offsetX,
            y : e.offsetY
        })

        updatePath()
    }
});


