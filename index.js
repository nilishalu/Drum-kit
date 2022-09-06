function handleClick() {
    alert("Hey, you clicked me!")
}

var btns = document.querySelectorAll('.drum');

for (let i = 0; i < btns.length; i++) {
    //btns[i].addEventListener('click', handleClick);
    btns[i].addEventListener('click', function () {
       var buttonLetter = this.innerHTML;
       playSoundOnKeyPress(buttonLetter);
       buttonAnimation(buttonLetter)
    });
}

document.addEventListener('keypress', function (event) {
    playSoundOnKeyPress(event.key)
    buttonAnimation(event.key)
})

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add('pressed');

    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 200)
}

function playSoundOnKeyPress(key) {
    switch(key) {
        case "w":
           var audio = new Audio('sounds/crash.mp3');
           audio.play();
           break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            console.log(input.key);
       }
}

