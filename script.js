// document.write("\
// <style contentEditable style='display: block; white-space: pre;'> \
// body{\
//     background-color : grey;\
//  }\
//  </style>")

var style = `
<style>
    .bgc{
        background-color:grey;
    }
    #container{
        background-color: white;
        width: fit-content;
        padding: 25px;
        margin:auto;
    }
    button{
        color: white;
        padding: 30px;
    }
    button#green{
        background-color: green;
    }
    button#red{
        background-color: red;
    }
    button#blue{
        background-color: blue;
    }
</style>
`

var str = `
<button onclick="changeBGC('green')" id="green" >green</button>
<button onclick="changeBGC('red')" id="red" >red</button>
<button onclick="changeBGC('blue')" id="blue" >blue</button>
 `

document.write(style);
document.getElementById("container").innerHTML = str;


function changeBGC(color){
    console.log(color);
    document.body.style.backgroundColor = color;

}