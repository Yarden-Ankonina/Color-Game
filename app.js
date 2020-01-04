let colors = generateRandomColors(6);
  
 let squares = document.querySelectorAll(".square");

 let pickedColor = pickColor();

 let colorDisplay = document.getElementById("colorDisplay");

 let messageDisplay = document.querySelector("#message");

 let newColors = document.querySelector("#newColors");

 let h1 = document.querySelector("h1");
 
 let easy = document.querySelector("#easy");
 let hard = document.querySelector("#hard");


 colorDisplay.textContent = pickedColor;

 
    easy.addEventListener("click", function(){
        colors = generateRandomColors(3);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(let i = 0; i < squares.length; i++){
            if(colors[i])
                squares[i].style.backgroundColor = colors[i];
            else
            squares[i].style.backgroundColor = "#232323";
        }
        messageDisplay.textContent = "";

        
    });

    hard.addEventListener("click", function(){
        colors = generateRandomColors(6);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(let i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
        }
        messageDisplay.textContent = "";

    });

    newColors.addEventListener("click", function(){
        colors = generateRandomColors(6);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(let i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
        }
        h1.style.backgroundColor = "#5588BB";
        newColors.textContent = "New Colors";
        messageDisplay.textContent = "";

    })



 for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];


    squares[i].addEventListener("click", function(){
        let clickedColor =  this.style.backgroundColor;
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            newColors.textContent = "Play Again ?";
            
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
 }



 function changeColors(color){
    for(let i = 0;i < squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
 }

 function pickColor(){
    let random =  Math.floor(Math.random() * colors.length);
    return colors[random];
 }
 
 function generateRandomColors(num){
     let arr = []
     for(let i =0; i < num; i++){
        arr.push(randomColor());
     }
     return arr;
 }

 function randomColor(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
     return "rgb(" + red + ", " + green + ", " + blue  + ")";
 }