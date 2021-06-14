/* 딜레이 없는거

var video = document.getElementById('v');

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.interimResults = true;
recognition.lang = "ko-KR";
recognition.continuous = true;
recognition.maxAlternatives = 10000;

let speechToText = "";

var userSaid = function(str, s) {
    return str.indexOf(s) > -1;
}

recognition.addEventListener("result", (e) => {
  let interimTranscript = "";
  for (let i = e.resultIndex, len = e.results.length; i < len; i++) {
    let transcript = e.results[i][0].transcript;
    var str = e.results[i][0].transcript;
    console.log(str);
    if (e.results[i].isFinal) {
      speechToText += transcript;
    } else {
      interimTranscript += transcript;
    }

// Replay the video
if (userSaid(str, '다시')) {
    video.currentTime = 0;
    video.play();
}
// Play the video
else if (userSaid(str, '재생')) {
    video.play();
}
// Stop the video
else if (userSaid(str, '멈춰')) {
    video.pause();
}

else if (userSaid(str, '이전')) {
    video.currentTime -= 10;
}

else if (userSaid(str, '다음')) {
    video.currentTime += 10;
}

// If the user said 'volume' then parse it even further
else if (userSaid(str, '소리')) {
    // Check the current volume setting of the video
    var vol = Math.floor(video.volume * 10) / 10;
    // Increase the volume
    if (userSaid(str, '크게')) {
        if (vol >= 0.9) video.volume = 1;
        else video.volume += 0.1;
    }
    // Decrease the volume
    else if (userSaid(str, '작게')) {
        if (vol <= 0.1) video.volume = 0;
        else video.volume -= 0.1;
    }
    // Turn the volume off (mute)
    else if (userSaid(str, '꺼')) {
        video.muted = true;
    }
    // Turn the volume on (unmute)
    else if (userSaid(str, '켜')) {
        video.muted = false;
    }
}
}
});

recognition.start();


딜레이 있는거
*/
var video = document.getElementById('videoPlay');

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.interimResults = true;
recognition.lang = "ko-KR";
recognition.continuous = true;
recognition.maxAlternatives = 10000;

let speechToText = "";

var confidenceThreshold = 0.005;

var userSaid = function(str, s) {
    return str.indexOf(s) > -1;
}

recognition.addEventListener("result", (e) => {
  	let interimTranscript = "";
  	for (let i = e.resultIndex, len = e.results.length; i < len; i++) {
		let transcript = e.results[i][0].transcript;
		if (e.results[i].isFinal) {
			if (parseFloat(e.results[i][0].confidence) >= parseFloat(confidenceThreshold)) {
				var str = e.results[i][0].transcript;
				speechToText += transcript;
			}else {
				interimTranscript += transcript;
			}
			

        // Replay the video
        if (userSaid(str, '처음')) {
            video.currentTime = 0;
            video.play();
        }
        // Play the video
        else if (userSaid(str, '시작')) {
            video.play();
        }
        // Stop the video
        else if (userSaid(str, '멈춰')) {
            video.pause();
        }

        else if (userSaid(str, '종료')) {
            video.currentTime = 194;
            video.play();
        }
        
        else if (userSaid(str, '이전')) {
            if (0<=video.currentTime && video.currentTime<20){
                video.currentTime = 0;
            } else if (19<=video.currentTime && video.currentTime<26){
                video.currentTime = 0;
            } else if (26<=video.currentTime && video.currentTime<42){
                video.currentTime = 20;
            } else if (42<=video.currentTime && video.currentTime<58){
                video.currentTime = 26;
            } else if (58<=video.currentTime && video.currentTime<76){
                video.currentTime = 42;
            } else if (76<=video.currentTime && video.currentTime<81){
                video.currentTime = 58;
            } else if (81<=video.currentTime && video.currentTime<98){
                video.currentTime = 76;
            } else if (98<=video.currentTime && video.currentTime<114){
                video.currentTime = 81;
            } else if (114<=video.currentTime && video.currentTime<132){
                video.currentTime = 98;
            } else if (132<=video.currentTime && video.currentTime<138){
                video.currentTime = 114;
            } else if (138<=video.currentTime && video.currentTime<153){
                video.currentTime = 132;
            } else if (153<=video.currentTime && video.currentTime<170){
                video.currentTime = 138;
            } else if (170<=video.currentTime && video.currentTime<186){
                    video.currentTime = 153;
            } else if (186<=video.currentTime){
                video.currentTime = 170;
            }
            video.play();
    }
        
        else if (userSaid(str, '다음')) {
            if (0<=video.currentTime && video.currentTime<20){
                video.currentTime = 20;
            } else if (20<=video.currentTime && video.currentTime<25){
                video.currentTime = 25;
            } else if (25<=video.currentTime && video.currentTime<42){
                video.currentTime = 42;
            } else if (42<=video.currentTime && video.currentTime<58){
                video.currentTime = 58;
            } else if (58<=video.currentTime && video.currentTime<76){
                video.currentTime = 76;
            } else if (76<=video.currentTime && video.currentTime<81){
                video.currentTime = 81;
            } else if (81<=video.currentTime && video.currentTime<98){
                video.currentTime = 98;
            } else if (98<=video.currentTime && video.currentTime<114){
                video.currentTime = 114;
            } else if (114<=video.currentTime && video.currentTime<132){
                video.currentTime = 132;
            } else if (132<=video.currentTime && video.currentTime<138){
                video.currentTime = 138;
            } else if (138<=video.currentTime && video.currentTime<153){
                video.currentTime = 153;
            } else if (153<=video.currentTime && video.currentTime<170){
                video.currentTime = 170;
            } else if (170<=video.currentTime && video.currentTime<186){
                video.currentTime = 186;
            } else if (186<=video.currentTime){
                video.currentTime = 194;
            }
            video.play();
        }

        else if (userSaid(str, '야근')) {
            location.href = '14p.html';
        }

        else if (userSaid(str, '대청소')) {
            window.location.href = '15p.html';
        }

        else if (userSaid(str, '미세먼지')) {
            window.location.href = '16p.html';
        }

        else if (userSaid(str, '다리')) {
            window.location.href = '17p.html';
        }

        else if (userSaid(str, '감기')) {
            window.location.href = '18p.html';
        }

        else if (userSaid(str, '일교차')) {
            window.location.href = '18p.html';
        }
        
        // If the user said 'volume' then parse it even further
        else if (userSaid(str, '소리')) {
            // Check the current volume setting of the video
            var vol = Math.floor(video.volume * 10) / 10;
            // Increase the volume
            if (userSaid(str, '크게')) {
                if (vol >= 0.9) video.volume = 1;
                else video.volume += 0.1;
            }
            // Decrease the volume
            else if (userSaid(str, '작게')) {
                if (vol <= 0.1) video.volume = 0;
                else video.volume -= 0.1;
            }
            // Turn the volume off (mute)
            else if (userSaid(str, '꺼')) {
                video.muted = true;
            }
            // Turn the volume on (unmute)
            else if (userSaid(str, '켜')) {
                video.muted = false;
            }
        }
	}
}   
});

recognition.start();
