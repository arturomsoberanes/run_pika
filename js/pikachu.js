var pos = 0;
const pikaArray = [
    ['./img/pika1.png', './img/pika2.png','./img/pika3.png','./img/pika4.png'],
];
var direction = 0;
var focus = 0;

function Run() {
    let img = document.getElementById("Pikachu");
    let imgWidth = img.width
    if(focus === 3){
      focus = 0;
    }
    else{
      focus += 1;
    }
    direction = checkPageBounds(direction, imgWidth);
    img.src = pikaArray[0][focus];
    if (direction) {
        pos -= 20;
        img.style.left = pos + "px";
        img.style.transform = "scaleX(-1)";
    } else {
        pos += 20;
        img.style.left = pos + 'px';
        img.style.transform = "scaleX(1)";
    }
    setTimeout(Run,90);
    console.log(direction);
}

function checkPageBounds(direction, imgWidth) {
    let widthScreen = window.innerWidth - imgWidth;

    if(pos >= widthScreen){
      direction = 1;
    }else if(pos === 0){
      direction = 0;
    }

    return direction;
}
