var timeOfDay;

function workOutTheTimeOfTheDay () {
	var currentTime = new Date();
	var hour = currentTime.getHours();
	if (hour < 12) {
		timeOfDay = 'morning';
	} else if (hour > 12 && hour < 18) {
		timeOfDay = 'afternoon';
	} else {
		timeOfDay = 'evening';
	}
	console.log(hour, timeOfDay);
}

workOutTheTimeOfTheDay();