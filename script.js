function pad(n) {
	n = n + '';
	return n.length >= 3 ? n : new Array(4 - n.length).join('0') + n;
}

$(document).ready(function(){
	var drawer = null;
	var now = 0;
	var number = $("#number");
	var picked_number = [0]

	$("#button").click(function(){
		$("#button").html('Drawing...');
		category_size = 30
		category_starting_number = 1
		winner = 0;
		while (picked_number.includes(winner)) {
			winner = Math.floor(Math.random() * 1000) % category_size + 1;
			winner += (category_starting_number - 1)
			winner = pad(winner)
		}
		picked_number.push(winner)
		console.log(picked_number)
		var counter = 50;
		drawer = setInterval(function() {
			rand = Math.floor(Math.random() * 1000) % 149 + 1;
			rand = pad(rand);
			number.html(rand);
			counter--;
			if (counter == 0) {
				clearInterval(drawer);
				number.html(winner);
				$("#button").html('Draw again!');
			}
		}, 40);
	});

	number.click(function(){
		if ( drawer === null ) {
			now++;
			$("#r"+now).html(number.html());
		} else {
			$("#button").click();
		}
	});
});
