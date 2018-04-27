const createHeader = (headerTitle) => {
	document.getElementById("storyTitle").innerHTML = headerTitle;
};
let append_key = 1;
const createMessage = (message, animation, darker, time, delay) => {
	this.message = message;
	this.animation = animation;
	this.darker = darker;
	this.time = time;
	this.delay = delay;

	setTimeout(function() {
		$('.main-text-area').prepend("<div class='container container_"+append_key+"'><p>"+message+"</p><span class='time-right'>"+time+"</span></div>");
		if(animation === true) {
			$('.container_'+append_key).addClass('animated');
		}
		if(darker === true) {
			$('.container_'+append_key).addClass('darker');
		}
		append_key++;
	}, delay);
};