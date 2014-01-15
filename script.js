var playerTurn = (0);

var moved = [[]]

function init() {
	
	var cells = document.getElementsByClassName("cell");
	for (var i in cells) {
		cells[i].onclick = takeTurn;
	}
}


function takeTurn() {
	
	if (this.innerHTML == "&nbsp;" ) {
		
		if (playerTurn%2 == 0) {
			this.innerHTML = "<img src='http://www.clker.com/cliparts/8/7/c/4/1224784889408279301bluefrog23_Peppermint_Candy.svg.thumb.png' />";
			} else {
			this.innerHTML = "<img src='http://static1.wikia.nocookie.net/__cb62488/clubpenguin/images/thumb/6/64/Gingerbread_Cookie_Costume_clothing_icon_ID_4473.png/100px-0,615,0,615-Gingerbread_Cookie_Costume_clothing_icon_ID_4473.png' />";
			}

			playerTurn++;

		}
	}


// var img = document.CreateElement('img')

// img.src = 'http://www.clker.com/cliparts/8/7/c/4/1224784889408279301bluefrog23_Peppermint_Candy.svg.thumb.png';
// document.getElementsByClassName('cell').appendChild(img);

