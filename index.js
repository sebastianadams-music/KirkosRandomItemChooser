document.getElementById("butt").addEventListener("click", chooseItem)
document.getElementById("image").addEventListener("click", chooseItem)
document.getElementById("reset").addEventListener("click", reset)


let list = []
generateList()

function reset(){
    var img = document.getElementById("image")
    img.src = "material/instructions.png" 

}

function chooseItem(){
    var item = list.random()
    // console.log(item)
    var img = document.getElementById("image")
    // console.log(img)
    img.src = item 

}

function generateList(){
    for (let i = 2; i <= 34; i++){
        let ii = ("0" + i).slice (-2);
        let item = `material/${ii}.png`
        list.push(item)

    }
}


Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }
  