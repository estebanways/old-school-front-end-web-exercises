function whenfocus(){
	if(this.value == 'Enter Keyword'){
		this.value = '';
	}
}

function whenblur(){
	if(this.value == ''){
		this.value = 'Enter Keyword';
	}
}

function main(){
	srch = document.getElementById('srcBox');
	srch.value = 'Enter Keyword';
	Menu.addEventListener(srch, 'focus', whenfocus);
	Menu.addEventListener(srch, 'blur', whenblur);
}

window.onload = main();

