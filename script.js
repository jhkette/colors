window.onload = start;

function start() {
    const colors =[];
    fetch("./data.JSON")
        .then(res => res.json())
        .then(data => colors.push(...data));

    processData(colors)
}

function processData(colors){
console.log(colors);
}

// use container width to generate colours
// var screenWidth = container.offsetWidth;  // get container width


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function randomVector(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    let vector = [x,y,z];
    console.log(vector) ;
}

randomVector();
