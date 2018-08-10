erafy = {};

//takes a string of form 'integer BC' or 'AD integer' and returns a negative or positive number respectively
erafy.dateStr2Num = function(date){
	
	if (/^\d+\sBC$/.test(date)) {
		num = parseInt(date, 10)
		return -num;

	}
	else if (/^AD\s\d+$/.test(date)){
		date = date.replace('AD ', '')
		num = parseInt(date, 10)
		return num;
	}
	else {
		throw new Error('input must have form "(integer) BC" or "AD (integer)" ');
	}
}

//takes an object of form {number: (integer), era: (AD or BC)} and returns a positive or negative number
erafy.dateObj2Num = function(date){
	if (date.era == 'BC'){

		return  Number(-date.number);
	}

	else if (date.era == 'AD'){
	return Number(date.number);
	}
	else {
		alert('No era selected for' + date);
	}
}

//reverse the above:


erafy.num2DateStr = function(x) {
	if (x < 0 ){
		x = -x + ' BC';
	}
	else x = 'AD ' + x;
	return x;
}

erafy.num2DateObj = function(x){
	if (x < 0){
		
		x = {era: 'BC', number: -x};
	}
	else {
		x = {era: 'AD', number: x};
	}
	return x;
}

module.exports = erafy

