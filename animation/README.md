1. Traffic lights

In the exercise, we defined a traffic light animation.

Animate a correct sequence of traffic light signalling:

a long green phase (lasts 3 sec)
a short amber phase (lasts 1 sec)
a long red phase (lasts 3 sec)
a short red and amber phase1 (lasts 1 sec)
back to green

The full cycle takes 8 sec.

Implementation steps:
1. Draw a rectangle with 3 circles inside like in the example below. Each circle should be represented by separate variable to change it color later.
2. Implement function which will change traffic light according to the sequence defined above and current time.
3. Here is a time framer with step in one second to which the traffic light function should be passed to create animation:

```javascript
function animateOf(anim) {
 return setInterval(function() {
       let epochSec = Date.now() / 1000
       anim(epochSec)
 }, 1000); //  1 sec
}

//example, change size of circle each second:
let paper = Snap(800, 400)

let c1 = paper.circle(250, 250, 15)

animateOf(function(t) { if ( t % 2 == 0) { c1.attr({r: 20}) } else { c1.attr({r: 15}) } } )
```

A result should look like:
https://code.world/run.html?mode=haskell&dhash=DkA91kScdnqBMXnuWMWDZTg


2. Blooming trees

In the class, we defined a tree, but it looks a bit dire. The code was

```javascript
let paper = Snap(800, 400)

let pathStyle = {
    stroke: "#222",
    fill: "transparent",
    strokeWidth: 1
}

function tree(n, x, y) {
    let bases = [{baseX: x, baseY: y, baseAngle : 0}];
    for (let i = 0; i < n; i++) {
        let newBases = []
        for (let j = 0; j < Math.pow(2, i); j++) {
            let sign = isEven(j) ? 1 : -1
            let {baseX, baseY, baseAngle} = bases[Math.floor(j / 2)]
            let newAngle = i > 0 ? baseAngle + sign * 18 : 0
            let newX = baseX + 20 * Snap.sin(newAngle)
            let newY = baseY - 20 * Snap.cos(newAngle)
            paper.path("").attr(pathStyle).attr({d: `M ${baseX},${baseY} L ${newX},${newY}`})
            newBases.push({baseX:newX, baseY:newY, baseAngle: newAngle})
        }
        bases = newBases
    }
}

function isEven(n) {
    return n % 2 == 0;
}
```

Make the tree bloom! Create an animation passing next initial parameters `tree(8, 300, 250)`, and then grows blossoms at the end of each twig within 10 seconds. After 10 seconds, the tree should be in full bloom and the animation should stop.

A bloom could be a yellow circle growing in size, or something more intricate with petals and better colors and whatnot.

In your code, modify tree function to be abstract in the actual shape of the blossoms (add 4th parameter -- func that draw bloom). This way, the tree function itself is independent of time. Do not pass the time parameter to the tree function!

As an additional task you can animate a tree growing process -- show how branches appear.

A result should look like:
https://code.world/run.html?mode=haskell&dhash=DmGMoeJTPisJo8EfTOZA7Nw
