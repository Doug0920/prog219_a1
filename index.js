/**
 * Modified by Doug Cottrill 4/4/18.
 * For PROG 219, Kurt Friedrich instructor.

 * From assignment description.
 * A simple dice game; for each roll, a win is:
 	The 2 numbers (dice) have the same value, such as a pair of 3’s
	Or the sum of the 2 numbers equals 7
	Or the sum of the 2 numbers equals 11.
	
	Any other combination of the two numbers is a loss.
 */

function buttonClicked() {
	// get two random dice rolls and display dice.
	var dice1 = getDispDice(document.getElementById("image1"));
	var dice2 = getDispDice(document.getElementById("image2"));

	// check for win or loss, display status and add/subtract amount won

	var diceTotal = dice1 + dice2;
	var statusLine = document.getElementById("status");
	var statusMsg = "total of dice = " + diceTotal;
	if (dice1 == dice2) {
		statusMsg = "Winner! " + statusMsg + ", you have doubles!"
		diceWin(+1);;
	} else if (diceTotal == 7 || diceTotal == 11) {
		statusMsg = "Winner! " + statusMsg + ", you have seven or eleven!";
		diceWin(+1);
	} else {
		statusMsg = "Sorry, " + statusMsg + ", you lost.";
		diceWin(-1);
		//  If balance for user less than/equal $0, this hides the "Bet Now" button.
		if (parseInt(document.getElementById("balance").innerHTML) <= 0) {
			document.getElementById("ButtonBet").hidden = true;
			statusMsg = statusMsg + "<br />Reload page to restart!"
		} else {
			statusMsg = statusMsg + " Try again!"
		}
	}

	statusLine.innerHTML = statusMsg;
}

function diceWin(winLossAmt) {
	var balElem = document.getElementById("balance");
	var turnCtElem = document.getElementById("turnCount");
	balElem.innerHTML = parseInt(balElem.innerHTML) + winLossAmt;
	turnCtElem.innerHTML = parseInt(turnCtElem.innerHTML) + 1;
}

function getDispDice(imageUsed) {
	var diceNum = Math.floor(Math.random() * 5) + 1;
	imageUsed.src = "./images/dice-" + diceNum.toString() + ".jpg";
	return diceNum;
}
