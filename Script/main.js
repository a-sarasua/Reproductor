const audio = document.querySelector('audio')
const playButton = document.querySelector('.playButton')
const nextButton = document.querySelector('.nextButton')
const prevButton = document.querySelector('.prevButton')

const musicSource = '../Songs/'

playlist = ['1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3', '6.mp3', '7.mp3', '8.mp3']

audio.src = musicSource + playlist[0]
playlistCounter = 0

function nextSong() {
	if (playlistCounter === playlist.length-1) {
		playlistCounter = 0
	} else {
		playlistCounter++
	}
	audio.src = musicSource + playlist[playlistCounter]
	audio.play()
}

function prevSong() {
	if (playlistCounter === 0) {
		playlistCounter = playlist.length-1
	} else {
		playlistCounter--
	}	
	audio.src = musicSource + playlist[playlistCounter]
	audio.play()
}

playButton.onclick = function() {
	if (audio.paused) {
		audio.play()
	} else {
		audio.pause()
	}
}		

nextButton.onclick = function() {
	nextSong()
}

prevButton.onclick = function() {
	prevSong()
}

audio.addEventListener('ended', function() {
	nextSong()
})