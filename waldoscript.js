$(document).ready(function() {
	var start = new Date();
	var totalelapsed;
	var clockcount = 8;
	var clock1status = 0;
	var clock2status = 0;

	$('#clock').click(function(e) {
		var offset = $(this).offset();
		imgX = (e.pageX - offset.left);
		imgY = (e.pageY - offset.top);
		console.log(imgX+" "+imgY);
		newClick();
	});

	function newClick(){
		if (imgX >= clock1.x1 & imgX <= clock1.x2 & imgY >= clock1.y1 & imgY <= clock1.y2){
			if (clock1status < 1){
				var elapsed1 = new Date() - start;
				let sec1 = elapsed1/1000;
				clockcount--;
				clock1status++;
				alert(sec1 + " Seconds\n" + clockcount + " clocks left.");
			}
			else{
				alert("You already found that.");
			}
		}

		else if (imgX >= clock2.x1 & imgX <= clock2.x2 & imgY >= clock2.y1 & imgY <= clock2.y2){
			if (clock2status < 1){
				var elapsed2 = new Date() - start;
				let sec2 = elapsed2/1000;
				clockcount--;
				clock2status++;
				alert(sec2 + " Seconds\n" + clockcount + " clocks left.");
			}
			else{
				alert("You already found that.");
			}
		}


		else{
			alert('wrong place');
		}

		if (clockcount == 6){
			var totalms = new Date() - start;
			totalelapsed = totalms/1000;
			document.getElementById("example").innerHTML = "Total time: " + totalelapsed + " Seconds.";
			document.getElementById("head").innerHTML = "YOU HAVE WON";
			shareButtons();
			$('#clock').off('click');
		}
	}

	function shareButtons(){
		document.getElementById("sharing").style.display = 'block';
		init();
	}
	
	const fbBut = document.querySelector(".fb");
	const twBut = document.querySelector(".tw");
	const waBut = document.querySelector(".wa");

	function init(){
	let postURL = encodeURI(document.location.href);
	let postTitle = encodeURI(`Took me ${totalelapsed} seconds.`);

	fbBut.setAttribute("href",`https://www.facebook.com/sharer.php?u=${postURL}`);
	twBut.setAttribute("href",`https://twitter.com/share?url=${postURL}&text=${postTitle}`);
	waBut.setAttribute("href",`https://api.whatsapp.com/send?text=${postTitle} ${postURL}`);
	}

});