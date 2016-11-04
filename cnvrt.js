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
	document.getElementById("seven").innerHTML = 'new month: '+newmonth;
	
	newday=numofdays%28
	document.getElementById("six").innerHTML = 'new day: '+newday;
	
	//month 1
	if(numofdays<=29){
		
	}
	
	//possible switch
}