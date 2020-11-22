// linking the html elements
var startingResin= document.querySelector(".starting-resin");
var numberButton=document.querySelector(".number-button");
var targetResin= document.querySelector(".target-resin");
var finalTime= document.querySelector(".final-time");
var timeLeft= document.querySelector(".time-left");
var calculate=document.querySelector(".calculate");
var resinCounter=document.querySelector(".resin-count");

// js variables
var startingResinValue=0; //starting resin
var targetResinValue=0;
var currentTime= Date();
var finalTime;
var x="first"; //first means first iteration or first button press
var resinCount;  //added this new variable to represent current resin.  
var resinCap=160;

function numberClick(num){
    
   targetResinValue=num
   targetResin.value= targetResinValue;

}

function calculateResin(){
    if(x!=="first"){
    clearInterval(x);
    
    }
    document.querySelector(".tr").style.display="flex"; // revert back to former layout if it was on the day layout
    timeLeft.style.color="black";
    //calculate time left until resin refreshes
    startingResinValue =startingResin.value;
    resinCount=startingResinValue;
    if(resinCount.length==0){
        resinCount=0;
    }
    resinCounter.innerHTML=`${resinCount}`;
    targetResinValue=targetResin.value;
    let difference = targetResinValue-startingResinValue;
    let totalMin = difference*8;
    let hour = parseInt(totalMin/ 60);
    let min=totalMin%60;

    

    //tells time that the resin will be done recharging
    
    let currentTime= new Date();
    let countDownTimer=new Date(currentTime.setTime(currentTime.getTime()+(3600*1000*hour)+(60000*min)));
  
    finalTime.innerHTML=` ${countDownTimer.getHours()}:${countDownTimer.getMinutes()}`;
    if(countDownTimer.getMinutes()<10){
        finalTime.innerHTML=` ${countDownTimer.getHours()}:0${countDownTimer.getMinutes()}`;

    }
    if(hour>=24){
        finalTime.innerHTML=countDownTimer;
        document.querySelector(".tr").style.display="block";

    }
    
    
    countDown(countDownTimer);
    setTimeout(incrementResin, 480000); // updates resin counter
    

}
function countDown(time){
    let countDownDate= new Date(time);
    //when is x invoked?
    x=setInterval(function(){
      
        //find diff between now and countdown 
        let now= new Date();
        var distance= countDownDate-now;
         // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        //write on to html
        if(days>0){
        timeLeft.innerHTML=` ${days}:${hours}:${minutes}:${seconds}`;
        }else{
        timeLeft.innerHTML=` ${hours}:${minutes}:${seconds}`;
        }
        
        

        //make timer red
        if(distance <= 480000){
            timeLeft.style.color="red";
        }
      


        // If the count down is finished, write some text
  if (distance < 0) {
    timeLeft.innerHTML="Done!";
    clearInterval(x);
    
    
  }


    },1000);
   

}

function incrementResin(){
    resinCount++;
    resinCounter.innerHTML=resinCount;
    if(resinCount<resinCap){
        setTimeout(incrementResin, 480000);
    }
    
    

}

