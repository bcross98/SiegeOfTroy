function Art() {
	
	setTimeout(function() {
		$('#art').fadeTo(1000, 0.0, function() {
			document.getElementById('art').src = "./images/art3.jpg";
		});
		$('#art').fadeTo(1000, 1);
		$('#fact').fadeTo(1000, 0.0, function() {
			document.getElementById('fact').innerHTML = 'Encouraged by his Hawkish brother Agamemnon, the king of Mycenae, Menelaus declared war on Troy, recruiting allies from the surrounding Greek city states. They had no trouble getting help: listing the Greeks allies takes up a whole chapter of the Iliad. All told, the fleet that sailed to Troy contained 1,186 ships.';
		});
		$('#fact').fadeTo(1000, 1);
		
		setTimeout(function() {
			$('#art').fadeTo(1000, 0.0, function() {
				document.getElementById('art').src = "./images/art4.jpg";
			});
			$('#art').fadeTo(1000, 1);
			$('#fact').fadeTo(1000, 0.0, function() {
				document.getElementById('fact').innerHTML = 'According to the legends, the Trojan War ended with the defeat of the Trojans and the sacking of Troy. The victorious Achaeans returned home, with Helen returning to Sparta to spend the rest of her days with Menelaus.';
			});
			$('#fact').fadeTo(1000, 1);
			
			setTimeout(function() {
				$('#art').fadeTo(1000, 0.0, function() {
					document.getElementById('art').src = "./images/art5.jpg";
				});
				$('#art').fadeTo(1000, 1);
				$('#fact').fadeTo(1000, 0.0, function() {
					document.getElementById('fact').innerHTML = 'Homers epic poem the Iliad is by far the most well known and influential account of the Trojan War. The epic was probably written in the 8th century BC. The name comes from the region around the city of Troy which was known to the Greeks as Ilios or Ilium.';
				});
				$('#fact').fadeTo(1000, 1);
				
				setTimeout(function() {
					$('#art').fadeTo(1000, 0.0, function() {
						document.getElementById('art').src = "./images/art6.jpg";
					});
					$('#art').fadeTo(1000, 1);
					$('#fact').fadeTo(1000, 0.0, function() {
						document.getElementById('fact').innerHTML = 'Despite the inconsistencies in Homers story, he did have a sense of Troy as a very real place. Homer lived just 400 years after the Trojan War was set, and the ruins of Troy were still visible in his time.';
					});
					$('#fact').fadeTo(1000, 1);
					
					setTimeout(function() {
						$('#art').fadeTo(1000, 0.0, function() {
							document.getElementById('art').src = "./images/art7.jpg";
						});
						$('#art').fadeTo(1000, 1);
						$('#fact').fadeTo(1000, 0.0, function() {
							document.getElementById('fact').innerHTML = 'Archaeologists have been able to piece together a little about Trojan culture. No foundries were found there, but the Trojans did have access to bronze and iron through trading. They also kept dogs and cats as pets.';
						});
						$('#fact').fadeTo(1000, 1);
						
						setTimeout(function() {
							$('#art').fadeTo(1000, 0.0, function() {
								document.getElementById('art').src = "./images/art8.jpg";
							});
							$('#art').fadeTo(1000, 1);
							$('#fact').fadeTo(1000, 0.0, function() {
								document.getElementById('fact').innerHTML = 'While for years most scholars dismissed Troy as a myth, some adventurers and archaeologists continued to look for the city. In 1870, a German businessman and archaeologist named Heinrich Schliemann began excavating at a site in modern-day Turkey called Hisarlik. After digging down through nine distinct archaeological layers he found a city with a pari of massive gates, gates that would fit some famously impenetrable walls. Later geographic analysis proved that the site at Hisarlik was virtually identical to what we know of the historical Troy.';
							});
							$('#fact').fadeTo(1000, 1);
							
							setTimeout(function() {
								$('#art').fadeTo(1000, 0.0, function() {
									document.getElementById('art').src = "./images/art2.jpg";
								});
								$('#art').fadeTo(1000, 1);
								$('#fact').fadeTo(1000, 0.0, function() {
									document.getElementById('fact').innerHTML = 'Early explorers were painfully close to finding the real Troy. Pierre Belon and Pietro Della Valle, two sixteenth-century explorers, argued that the legendary Troy was based on a town called Alexandria Troas, just 20 kilometers south of Schliemanns dig';
								});
								$('#fact').fadeTo(1000, 1);
								
								setTimeout(function() {
									$('#art').fadeTo(1000, 0.0, function() {
										document.getElementById('art').src = "./images/art1.jpg";
									});
									$('#art').fadeTo(1000, 1);
									$('#fact').fadeTo(1000, 0.0, function() {
										document.getElementById('fact').innerHTML = 'According to the Iliad, the Trojan War began when the Trojan prince Paris ran away to troy with Helen, wife of the Spartan king Menelaus. Paris had been chosen to judge which Greek goddess was the most beautiful. Aphrodite told him that were he to select her, she would give him love of the most beautiful woman on earth. He did so, and the love goddess made Helen fall in love with him, igniting the conflict and giving her the name "the face that launched a thousand ships."';
									});
									$('#fact').fadeTo(1000, 1);
								}, 15000);
							}, 15000);
						}, 15000);
					}, 15000);
				}, 15000);
			}, 15000);
		}, 15000)
	}, 15000);
}
function artMusic() {
	var ok = confirm("Would you like music?");
	if(ok == true){
		var cello = new Audio('./media/cello.mp3');
		cello.play();
	}else{
	}
}
function homeMusic() {
	/*var ok = confirm("Would you like music?");
	if(ok==true){
		var home = new Audio("./media/home.mp3");
		home.play();
	}else{
	}*/
}
function loading() {
	var bar = new ldBar(".myBar", {
		   "stroke": 'gold',
		   "stroke-width": 10,
		   "preset": "stripe",
		   "value": 0
	});
	
	function load() {
		setTimeout(function() {
			bar.set(26);
			setTimeout(function(){
				bar.set(53);
				setTimeout(function(){
					bar.set(79);
					setTimeout(function(){
						bar.set(100);
						setTimeout(function() {
							bar.set(0);
						}, 3000);
					}, 3000);
				}, 3000);
			}, 3000);
		},3000); 
	}
	load();
	setInterval(load, 15000);
}
$(document).ready(function() {
	Art();
	setInterval(Art, 120000);
	
	loading();
});