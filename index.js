

var randomNumber = Math.floor(Math.random() * 20) + 1;


var highscore=0;
var score = 20;



document.querySelector(".check").addEventListener("click", function () {

    var guessNUMBER = Number((document.querySelector(".guess").value));

    console.log(guessNUMBER);


                     //       //           //            if there is no input             //       //           //   

if (!guessNUMBER){

        document.querySelector(".message").textContent = "⛔No Number!";
        score;
        document.querySelector(".score").textContent = score;

    }


                    //    when input and random number is equal                         //       //           //   
    
    
    else if (guessNUMBER === randomNumber) {

        document.querySelector(".message").textContent = "🥇🎉Congratulations You Win ";
        document.querySelector("body").style.backgroundColor="#8fd470";
        document.querySelector(".number").textContent = randomNumber;
if (score>highscore){

highscore=score;
document.querySelector(".highscore").textContent=highscore;


}
        
    }
    
    //         //             when user's input is greater than random number          //               //           //
    
    else if (guessNUMBER > randomNumber) {

        if(score>1){

            document.querySelector(".message").textContent = "Too High!";
        
            score--;
            document.querySelector(".score").textContent = score;
            document.querySelector("body").style.backgroundColor="#bb3b3b";


        }
        else {
        
            document.querySelector(".message").textContent = "Too Low!";
            score--;
            document.querySelector(".score").textContent = "you lost this game ";
            document.querySelector("body").style.backgroundColor="#474E68";

        }
        
    }

    
    
        //         //             when user's input is less than random number          //               //           //

    
    else if (guessNUMBER < randomNumber) {


        if(score>1){

            document.querySelector(".message").textContent = "Too Low";
        
            score--;
            document.querySelector(".score").textContent = score;
            document.querySelector("body").style.backgroundColor="#585858";

        }
        else {
        
            score--;
            document.querySelector(".score").textContent = "you lost game";
            document.querySelector("body").style.backgroundColor="#474E68";

        }

    }

})



    //         //          Again Button Functionality        //               //           //


    document.querySelector(".again").addEventListener("click", function () {
        score = 20;
        document.querySelector(".message").textContent = "Start guessing...";
        document.querySelector(".score").textContent = 20;
        document.querySelector("body").style.backgroundColor = "#000000";
        document.querySelector(".guess").value = "";
        randomNumber = Math.floor(Math.random() * 20) + 1; // generate a new random number
        document.querySelector(".number").textContent = "?"; // reset the number display
      });
      
