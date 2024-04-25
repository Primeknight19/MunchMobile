var amount = 1;

function credentialsCheck(){
	// check if username and password are accepted, currently only Username="username" and Password="1234"
	if(document.getElementById("username").value == "username" && document.getElementById("password").value == "1234"){
		location.href = 'restaurants.html';
	} 
	else {
		alert("Invalid username or password");
	}
}

function addItem(){
	location.href = 'order.html';
	amount = 1;
}

function addAmount(){
	// Increment order amount
	amount++;
	var numberSpan = document.getElementById("amountEle");
	numberSpan.innerHTML = amount;
}

function subAmount(){
	if(amount == 1){
	}
	else{
		// Decrement order amount
		amount--;
		var numberSpan = document.getElementById("amountEle");
		numberSpan.innerHTML = amount;
	}
}

function memberCheck(answer) {
	if(answer == "no"){
		hideCard();
		document.getElementById("memberSpan").innerHTML =
		"<h1>Do you wish to apply or renew?</h1>"
		+ "<input type='radio' name='noMem' onClick='applyCheck(this.value)' value='yes'>yes&nbsp;&nbsp;"
		+ "<input type='radio' name='noMem' onClick='applyCheck(this.value)' value='no'>no";
	} 
	else{
		document.getElementById("memberSpan").innerHTML =
		"<p><b>Member service fee &emsp;&emsp; $0.00</b></p>";
		document.getElementById("applySpan").innerHTML = "";
		showCard()
	}
}

function applyCheck(answer) {
	if(answer == "no"){
		document.getElementById("applySpan").innerHTML = "";
		
	} 
	else{
		document.getElementById("applySpan").innerHTML =
		"<p>Additional Fee &emsp;&emsp; $0.00</p>";
	}
	showCard()
}

function showCard(){
	document.getElementById("cardDiv").style.display = "block";
	document.getElementById("totalDiv").style.display = "block";
}

function hideCard(){
	document.getElementById("cardDiv").style.display = "none";
	document.getElementById("totalDiv").style.display = "none";
	document.getElementById("applySpan").innerHTML = "";
}