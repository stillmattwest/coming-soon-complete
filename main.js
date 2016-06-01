$(document).ready(function () {

	var videoArray = [];
	var counter = 0;
	var screenWidth = $(".screen").width();
	var screenHeight = $(".screen").height();

	loadVideo();

	// enable next button
	$('#next').click(function () {
		if (counter < videoArray.length - 1) {
			counter++;
		} else {
			return;
		}
		playVideo();
	});

	// enable last button
	$('#last').click(function () {
		if (counter > 0) {
			counter--;
		} else {
			return;
		}
		playVideo();
	});
	// function to load videos
	function loadVideo() {
		var myKey = "AIzaSyAr0fnc8B-t96isVPUByudWNPFDKJIugoc";
		var request = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&publishedAfter=2016-01-01T00%3A00%3A00Z&q=teaser%7Ctrailer&type=video&videoCaption=any&videoCategoryId=24&videoEmbeddable=true&key=' + myKey;
		$.ajax({
			url: request,
			success: function (data) {
				var id = data.items[0].id.videoId;

				data.items.forEach(buildArray);

				playVideo();

			}
		});
	}

	function buildArray(element) {
		var videoObj = {};
		videoObj.title = element.snippet.title;
		videoObj.id = element.id.videoId;
		videoArray.push(videoObj);
		console.log(videoArray[videoArray.length - 1].title);

	}

	function playVideo() {
		var currentVideo = videoArray[counter];
		$('.screen').html('<iframe width="' + screenWidth + '"height="' + screenHeight + '" src="https://www.youtube.com/embed/' + currentVideo.id + '?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
	}



});






