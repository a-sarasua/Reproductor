const audio = document.querySelector('audio')
const playButton = document.querySelector('.play')
const nextButton = document.querySelector('.next')
const prevButton = document.querySelector('.prev')
const muteButton = document.querySelector('.mute')
const maxButton = document.querySelector('.maxVolume')
const volumeDownButton = document.querySelector('.volumeDown')
const volumeUpButton = document.querySelector('.volumeUp')

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

function muteMusic() {
	audio.volume = 0.0
}

function maxVolume() {
	audio.volume = 1.0
}

function volumeDown() {
	if (audio.volume !== 0.0) {
		audio.volume -= 0.1
	}
}

function volumeUp() {
	if (audio.volume !== 1.0) {
		audio.volume += 0.1
	}
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

muteButton.onclick = function() {
	muteMusic()
}

maxButton.onclick = function() {
	maxVolume()
}

volumeDownButton.onclick = function() {
	volumeDown()
}

volumeUpButton.onclick = function() {
	volumeUp()
}