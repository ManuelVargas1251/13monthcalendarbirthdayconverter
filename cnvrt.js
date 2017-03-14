function convert() {
	
	
	//grabs entire date, mm/dd/yyyy	
	var dateinput = document.getElementById("myDate").value;
	var	datearray = dateinput.split("-");	//split
	//store each in it's own variable
	var year = datearray[0], month = datearray[1], day = datearray[2];

	
	//Calculate the number of days since the begginning of the year to the bday	
	var counter=1;
	var numofdays = 0;

	//converts bday MONTH according to YEAR into days
	//Does not add the month inwhich the birthday takes place
	while(month != counter){
		numofdays = numofdays + new Date(year, counter, 0).getDate();
		counter++;
	}
	
	//adds bday DAY
	day=parseInt(day);	//string to int
	numofdays= numofdays + day;
	document.getElementById("days").innerHTML = 'number of days: '+numofdays;
	
	/*
	1.March 2.April 3.May 4.June 5.Quitilis 6.Sextilis 7.September 8.October 9.November 10.December 11.January 12.February 13.Gormanuary
	*/
	
	//convert to 13 month
	newmonth = (numofdays/28)+1;
	newmonth = parseInt(newmonth);
	
	//case conversion to date
	switch(newmonth){
		case 1: document.getElementById("seven").innerHTML = 'March ';
        break;
		case 2: document.getElementById("seven").innerHTML = 'April ';
        break;
		case 3: document.getElementById("seven").innerHTML = 'May ';
        break;
		case 4: document.getElementById("seven").innerHTML = 'June ';
        break;
		case 5: document.getElementById("seven").innerHTML = 'Quitilis ';
        break;
		case 6: document.getElementById("seven").innerHTML = 'Sextilis ';
        break;
		case 7: document.getElementById("seven").innerHTML = 'September ';
        break;
		case 8: document.getElementById("seven").innerHTML = 'October ';
        break;
		case 9: document.getElementById("seven").innerHTML = 'November ';
        break;
		case 10: document.getElementById("seven").innerHTML = 'December ';
        break;
		case 11: document.getElementById("seven").innerHTML = 'January ';
        break;
		case 12: document.getElementById("seven").innerHTML = 'February ';
        break;
		case 13: document.getElementById("seven").innerHTML = '13th Month ';
        break;
	}
	
	
	
	//document.getElementById("seven").innerHTML = 'new month: '+newmonth;
	
	newday=numofdays%28
	document.getElementById("six").innerHTML =newday;
	

}