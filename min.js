
  const text = baffle("h2");
  text.set({
  	characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>",
  	speed: 150,
  });
 

 $(document).ready(function(){
 	$(window).scroll(function(){
 		var positiontop=$(document).scrollTop();
 		console.log(positiontop);
 		if((positiontop>700)&&(positiontop<1011))
 		{
 			 text.start();
             text.reveal(5000);
 		}	

 	})
 })