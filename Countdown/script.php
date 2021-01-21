
<?php
$XmasDate = $_POST['Xmas'];


?>


<script type="text/javascript">
const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById('hours');
const minutesE1 = document.getElementById('minutes');
const secondsE1 = document.getElementById('seconds');





const xMas = "25 dec 2021";

function count(){
	const xMasDate = new Date(xMas);
	const currentDate = new Date();
	const totalseconds = (xMasDate-currentDate)/1000;


    const days = Math.floor(totalseconds / 3600 / 24);

    const hours = Math.floor((totalseconds / 3600)%24);

    const minutes = Math.floor ((totalseconds/60)%60);
    
    const seconds = Math.floor(totalseconds%60);  
  

  daysE1.innerHTML =days;
  hoursE1.innerHTML = hours;
  minutesE1.innerHTML = minutes;
  secondsE1.innerHTML = seconds;

}

count();
setInterval(count,1000);
</script>
