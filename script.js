// linking the html elements
var currentResin= document.querySelector(".current-resin");
var numberButton=document.querySelector(".number-button");
var targetResin= document.querySelector(".target-resin");
var finalTime= document.querySelector(".final-time");
var timeLeft= document.querySelector(".time-left");
var calculate=document.querySelector(".calculate");

// js variables
var currentResinValue=0;
var targetResinValue=0;
var currentTime= Date();
var finalTime;
var x="first";

function numberClick(num){
    
   targetResinValue=num
   targetResin.value= targetResinValue;

}

function calculateResin(){
    if(x!=="first"){
    clearInterval(x);
    timeLeft.style.color="black";
    }
    
    //calculate time left until resin refreshes
    currentResinValue =currentResin.value;
    targetResinValue=targetResin.value;
    let difference = targetResinValue-currentResinValue;
    let totalMin = difference*8;
    let hour = parseInt(totalMin/ 60);
    let min=totalMin%60;
    let remainingTime= `${hour}hr ${min}min`;
    

    //tells time that the resin will be done recharging
    
    let currentTime= new Date();
    let newHour=parseInt(currentTime.getHours())+hour;
    let newMin=parseInt(currentTime.getMinutes())+min;
    let countDownTimer=new Date(currentTime.setTime(currentTime.getTime()+(3600*1000*hour)+(60000*min)));
  
    finalTime.innerHTML=`${countDownTimer.getHours()}:${countDownTimer.getMinutes()}`;
    if(countDownTimer.getMinutes()<10){
        finalTime.innerHTML=`${countDownTimer.getHours()}:0${countDownTimer.getMinutes()}`;

    }
    
    timer=true;
    countDown(countDownTimer);
    

}
function countDown(time){
    let countDownDate= new Date(time);
    //when is x invoked?
    x=setInterval(function(){
        if(timer==false){
            clearInterval(x);
        }
        //find diff between now and countdown 
        let now= new Date();
        var distance= countDownDate-now;
         // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        //write on to html
        timeLeft.innerHTML=`${hours}:${minutes}:${seconds}`;

        //make timer red
        if(distance <= 480000){
            timeLeft.style.color="red";
        }
      


        // If the count down is finished, write some text
  if (distance < 0) {
    timeLeft.innerHTML="Done!";
    clearInterval(x);
    
    alert("Time to grind!")
  }


    },1000);
   

}

