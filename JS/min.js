
  const text = baffle("h2");
  text.set({
  	characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>",
  	speed: 150,
  });
 

 $(document).ready(function(){
 	$(window).scroll(function(){
 		var positiontop=$(document).scrollTop();
 		console.log(positiontop);
 		if((positiontop>2197)&&(positiontop<2460))
 		{
 			 text.start();
             text.reveal(5000);
 		}	

 	})
 })