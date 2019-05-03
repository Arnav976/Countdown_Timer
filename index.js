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
 var end = new Date(user_date); // Arrange values in Date Time Format
 var second = 1000; // Total Millisecond In One Sec
 var minute = second * 60; // Total Sec In One Min
 var hour = minute * 60; // Total Min In One Hour
 var day = hour * 24; // Total Hour In One Day

 function display() {
  var current = new Date();
  var diff = end - current; // Get The Difference Between Current and entered date time

   if(diff <=0) 
 {
  clearInterval(timer);
  document.getElementById("count").innerHTML = "You're there!";
  return;
 }

  var days = Math.floor(diff / day); // Get Remaining Days
  var hours = Math.floor((diff % day) / hour); // Get Remaining Hours
  var minutes = Math.floor((diff % hour) / minute); // Get Remaining Min
  var seconds = Math.floor((diff % minute) / second); // Get Remaining Sec
 
  document.getElementById("count").innerHTML = days + 'Days ';
  document.getElementById("count").innerHTML += hours + 'Hrs ';
  document.getElementById("count").innerHTML += minutes + 'Mins ';
  document.getElementById("count").innerHTML += seconds + 'Secs';

 }
 timer = setInterval(display, 1000); //reload after 1 sec
}
