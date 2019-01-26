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
