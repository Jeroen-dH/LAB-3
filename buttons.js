var aantalBoxen = 30;

document.write("<div style='display: grid;gap: 5px 5px;grid-template-columns:auto auto auto auto auto;background-color:grey;'>");
for (let index = 1; index <= aantalBoxen; index++) {
    document.write(`
        <button onclick="ChangeBGC(`+index+`)"id=`+index+` style="height:200px; width: 200px;background-color: green; border: 1px solid black;">`+index+`</button>
    `)
}
document.write("</div>");

function ChangeBGC(id){
    document.getElementById(id).style.backgroundColor = "red";
}
