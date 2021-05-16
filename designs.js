
//DOM References 
const table       = document.querySelector("#pixelCanvas"),
      inputHeight = document.querySelector("#inputHeight"),
      inputWidth  = document.querySelector("#inputWidth"),
      sizePicker  = document.querySelector("#sizePicker");

//Create Elements for table
let row             = document.createElement('TR'), //creates an empty tr
    numberOfColumns = document.createElement('TD'); // creates number of columns 

//Funtions
function summitValues(){
    height = parseInt(inputHeight.value);
    width  = parseInt(inputWidth.value);
    id     = new Date().getMilliseconds();
    makeGrid(height, width);
};

function makeGrid(height, width) {
    let codigoHtml = "<tbody>"
    for (let i = 1; i <= height; i++) {
        codigoHtml += "<tr>";
        for (let j = 1; j <= width; j++) {
            codigoHtml += `<td data-id=${id}></td>`  
        };
        codigoHtml += "</tr>";
    }
    codigoHtml += "</tbody>";
    table.innerHTML = codigoHtml;
};

//Events
sizePicker.addEventListener("submit", function (event) {
    event.preventDefault();
    summitValues();
})

table.addEventListener("click", function (event) {
    let color   = document.getElementById("colorPicker").value;
    event.target.style.backgroundColor = color;
})

