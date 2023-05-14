var aantalBoxen = 30;
colors = ["green","red","purple","blue","black"]

document.write("<div style='display: grid;gap: 5px 5px;grid-template-columns:auto auto auto auto auto;background-color:grey;'>");
for (let index = 1; index <= aantalBoxen; index++) {
    document.write(`
        <button onclick="ChangeBGC(`+index+`)"id=`+index+` style="height:200px; width: 200px;background-color: green; border: 1px solid black;">`+index+`</button>
    `)
}
document.write("</div>");

function ChangeBGC(id){
    kleur = document.getElementById(id).style.backgroundColor;
    console.log(kleur);
    console.log(colors[1]);
    colors.forEach(element => {
        switch(kleur){
            case colors[0]:
                document.getElementById(id).style.backgroundColor = colors[1];
                break
            case colors[1]:
                document.getElementById(id).style.backgroundColor = colors[2];
                break
            case colors[2]:
                document.getElementById(id).style.backgroundColor = colors[3];
                break
            case colors[3]:
                document.getElementById(id).style.backgroundColor = colors[4];
                break
            case colors[4]:
                document.getElementById(id).style.visibility = "hidden";
                break
        }
    });
}