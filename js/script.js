function getInputValue(event){
	event.preventDefault()
	var inputVal = document.getElementById("myinput").value;
	
	if (inputVal=='Begin Writing'){
		window.location='beginning.html'
	}


}
let searchform = document.querySelector('#searchform');
searchform.addEventListener('submit', getInputValue);