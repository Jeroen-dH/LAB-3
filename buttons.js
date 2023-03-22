var aantalBoxen = 30;

document.write("<div style='display: grid;gap: 5px 5px;grid-template-columns:auto auto auto auto auto;background-color:grey;'>");
for (let index = 1; index <= aantalBoxen; index++) {
    document.write(`
        <button onclick="ChangeBGC(`+index+`)"id=`+index+` style="height:200px; width: 200px;background-color: green; border: 1px solid black;">`+index+`</button>
    `)
}
document.write("</div>");

function ChangeBGC(id){
    switch (document.getElementById(id).style.backgroundColor){
        case "green":
            document.getElementById(id).style.backgroundColor = "red";
            break
        case "red":
            document.getElementById(id).style.backgroundColor = "purple";
            break
        case "purple":
            document.getElementById(id).style.backgroundColor = "blue";
            break
        case "blue":
            document.getElementById(id).style.visibility = "hidden";
            break
    }
    

}
