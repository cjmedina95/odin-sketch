
function addDiv(node) {
    const addedDiv = document.createElement("div");
    addedDiv.style.width = "16px";
    addedDiv.style.height = "16px";
    node.appendChild(addedDiv, node);
}

// Bitwise OR floors decimal points, then sets the first 4 bits to 1
// e.g. 1267 -> 10011110011 |
//        15 -> 00000001111
//    = 1279 -> 10011111111
// Then 1 is added to create the rounded number (1280).
// ** Note: this formula only works for rounding on powers of 2.

const sketcher = document.querySelector("#sketchContainer");
const sketcherWidth = ((window.innerWidth * 0.66) | 15) + 1;
const sketcherHeight = ((window.innerHeight * 0.66) | 15) + 1;

sketcher.style.width = sketcherWidth.toString() + "px";
sketcher.style.height = sketcherHeight.toString() + "px";

for (i = 0; i < sketcherWidth; i += 16) {
    for (j = 0; j < sketcherHeight; j += 16) {
        addDiv(sketcher);
    }
}