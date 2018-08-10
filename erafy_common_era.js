erafy = {};

//takes a string of form 'integer BCE' or 'integer CE' and returns a negative or positive number respectively
erafy.dateStr2Num = function(date){
	
	if (/^\d+\sBCE$/.test(date)) {
		num = parseInt(date, 10)
		return -num;

	}
	else if (/^\d+\sCE$/.test(date)){
		num = parseInt(date, 10)
		return num;
	}
	else {
		throw new Error('input must have form "(integer) BCE" or "(integer) CE" ');
	}
}

//takes an object of form {number: (integer), era: (CE or BCE)} and returns a positive or negative number
erafy.dateObj2Num = function(date){
	if (date.era == 'BCE'){

		return  Number(-date.number);
	}

	else if (date.era == 'CE'){
	return Number(date.number);
	}
	else {
		alert('No era selected for' + date);
	}
}

//reverse the above:


erafy.num2DateStr = function(x) {
	if (x < 0 ){
		x = -x + ' BCE';
	}
	else x = x + 'CE';
	return x;
}

erafy.num2DateObj = function(x){
	if (x < 0){
		
		x = {era: 'BCE', number: -x};
	}
	else {
		x = {era: 'CE', number: x};
	}
	return x;
}

module.exports = erafy;