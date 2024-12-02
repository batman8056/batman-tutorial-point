let numberOfButton = document.querySelectorAll('.grid-container button').length;

for (var i = 0; i < numberOfButton; i++) {
    document.querySelectorAll('.grid-container button')[i].addEventListener("click", function () {
        
        var buttonContent = this.querySelector('h4').innerHTML; // Gets the parent h4's innerHTML
        // console.log(buttonContent); // Logs the button content
        makeSound(buttonContent);
        buttonAnimation(buttonContent);
    });
}



// debugger;
function makeSound(key){
    alert("Wait I Can Read For You!...")
    switch (key) {
        case "HTML Vision Statement:":
            var html = new Audio('./audio/welcome to html.mp3');
            html.play();
            break;
        case "CSS Vision Statement:":
            var css = new Audio('./audio/welcome to CSS.mp3');
            css.play();
            break;
        case "JavaScript Vision Statement:":
            var JavaScript = new Audio('./audio/welcome to js.mp3');
            JavaScript.play();
            break;
         case "DOM Vision Statement:":
            var dom = new Audio('./audio/welcome to dom.mp3');
            dom.play();
            break;   
        default:
    }
}

function buttonAnimation(currentkey) {
    // console.log(currentkey);

    var activeButton = Array.from(document.querySelectorAll('.grid-container button')).find(
        (button) => button.querySelector('h4').innerHTML === currentkey
    );
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 300);
  
  }