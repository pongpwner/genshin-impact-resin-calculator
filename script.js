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

function numberClick(num){
    
   targetResinValue=num
   targetResin.value= targetResinValue;

}

function calculateResin(){

    //calculate time left until resin refreshes
    currentResinValue =currentResin.value;
    let difference = targetResinValue-currentResinValue;
    let totalMin = difference*8;
    let hour = parseInt(totalMin/ 60);
    let min=totalMin%60;
    let remainingTime= `${hour}hr ${min}min`;
    timeLeft.innerHTML=remainingTime;

    //tells time that the resin will be done recharging
    let currentTime= new Date();
    let newHour=parseInt(currentTime.getHours())+hour;
    let newMin=parseInt(currentTime.getMinutes())+min;
    console.log(newMin);
    if(newHour>=24){
        newHour=newHour-24;
    }
    if(newMin>=60){
        newHour++;
        newMin=newMin-60;
    }
    if(newMin<10){
        finalTime.innerHTML=`${newHour}:0${newMin}`;
    }else{
    finalTime.innerHTML=`${newHour}:${newMin}`;
    }
    

    

}