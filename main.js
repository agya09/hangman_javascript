window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var categories;         //  topics
  var chosenCategory;     // Selected catagory
  var word ;              // Selected word
  var guess ;             // Guess
  var guesses = [ ];      // Stored guesses
  var space;              // Number of spaces in word '-'
//   var error = [];


  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  
  // Create guesses ul
  result =function () {
      wordHolder = document.getElementById('hold');
      correct =document.createElement('ul');
      for(var i= 0; i< word.length; i++) {
          correct.setAttribute('id','my-word');
          guess = document.createElement('li');
          guess.setAttribute('class','guess');
          if(word[i] === "-"){
              guess.innerHTML = "-";
              space = 1;
          } else{
              guess.innerHTML ="_";
          }
          guesses.push(guess);
          wordHolder.appendChild(correct);
          correct.appendChild(guess);          
      }
  }


 // canvas 
       // Animate man
       var animate = function () {
        var drawMe = lives ;
        drawArray[drawMe]();
      }
    
      
       // Hangman
      canvas =  function(){
    
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.strokeStyle = "black.";
        context.lineWidth = 2;
      };
      
        head = function(){
          myStickman = document.getElementById("stickman");
          context = myStickman.getContext('2d');
          context.beginPath();
          context.arc(60, 35, 20, 0, Math.PI*2, true);
          context.stroke();
        }
        
      draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
        
        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke(); 
    }
    
       frame1 = function() {
         draw (0, 150, 150, 150);
       };
       
       frame2 = function() {
         draw (10, 0, 10, 600);
       };
      
       frame3 = function() {
         draw (0, 5, 70, 5);
       };
      
       frame4 = function() {
         draw (60, 5, 60, 15);
       };
      
       torso = function() {
         draw (60, 54, 60, 100);
       };
      
       rightArm = function() {
         draw (60, 55, 80, 70);
       };
      
       leftArm = function() {
         draw (60, 55, 40, 70);
       };
      
       rightLeg = function() {
         draw (60, 70, 80, 100);
       };
      
       leftLeg = function() {
         draw (60, 70, 40, 100);
       };
      
      drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 
       
    // OnClick Function
    document.getElementById('message').innerHTML = "Use the keyboard above to enter your guess";
    document.getElementById('message').style.backgroundColor = "#D2691E";
    check = function () {
     list.onclick = function () {
       var guess = (this.innerHTML);
       // alert(guess);
       this.setAttribute("class", "active");
       this.onclick = null;
       for(var i=0; i<word.length; i++){
         if(word[i] == guess){
           guesses[i].innerHTML = guess;
           counter ++;
         }
       }
       var j =(word.indexOf(guess));
       if(j == -1){
         lives --;
         document.getElementById('message').innerHTML = "Oops! Wrong";
         document.getElementById('message').style.backgroundColor ='orange';
         animate();
       }else{
         document.getElementById('message').innerHTML = "Nice!";
         document.getElementById('message').style.backgroundColor ='orangered';

       }
       if(lives > 0){
         document.getElementById('myLives').innerHTML="You have " +lives +" remaining lives.";
       }else{
         document.getElementById('myLives').innerHTML="Game Over";
         // alert(guess);
        
       }
       for (var i = 0; i < guesses.length; i++) {
         if (counter + space === guesses.length) {
           document.getElementById('myLives').innerHTML == "You Win!";
           document.getElementById('message').innerHTML="Congratulations!!! YOU WIN";
           document.getElementById('message').style.backgroundColor ='green';
           document.getElementById('buttons').style.pointerEvents = "none";
          // document.querySelectorAll('letter').setAttribute("class","active");
         }
       }
       if(document.getElementById('myLives').innerHTML != "You have " +lives +" remaining lives."){
         document.getElementById('buttons').style.pointerEvents = "none";
         document.getElementById('message').innerHTML="Better luck next time";
         document.getElementById('message').style.backgroundColor ='red';
         document.getElementById('show').innerHTML = "Correct word is " +word;
       }
     }
   }
  
      // Play
  play = function () {
    categories = [
        ["javascript","function","variables","inheritance","development","building","architecture","hangman","web-developer","college","collaboration"]    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();    
    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    canvas();
  }

  play();
}


