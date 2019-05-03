var timer;
function countDown()
{

 var user_month=document.getElementById("month").value;
 var user_day=document.getElementById("day").value;
 var user_year=document.getElementById("year").value;
 var user_hour=document.getElementById("hour").value;
 var user_min=document.getElementById("min").value;

 if(user_hour==""){
     timer_hour=0;
 }
 if(user_min==""){
     timer_min=0;
 }


 var user_date=user_month+"/"+user_day+"/"+user_year+" "+user_hour+":"+user_min;
 var end = new Date(user_date); 
 var second = 1000;
 var minute = second * 60;
 var hour = minute * 60; 
 var day = hour * 24; 

 function display() {
  var current = new Date();
  var diff = end - current; 

   if(diff <=0) 
 {
  clearInterval(timer);
  document.getElementById("count").innerHTML = "You're there!";
  return;
 }

  var days = Math.floor(diff / day); 
  var hours = Math.floor((diff % day) / hour); 
  var minutes = Math.floor((diff % hour) / minute); 
  var seconds = Math.floor((diff % minute) / second);
 
  document.getElementById("count").innerHTML = days + 'Days ';
  document.getElementById("count").innerHTML += hours + 'Hrs ';
  document.getElementById("count").innerHTML += minutes + 'Mins ';
  document.getElementById("count").innerHTML += seconds + 'Secs';

 }
 timer = setInterval(display, 1000); //reload after 1 sec
}
