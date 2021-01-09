const audio = document.querySelector('audio')
const playButton = document.querySelector('.play')
const nextButton = document.querySelector('.next')
const prevButton = document.querySelector('.prev')
const muteButton = document.querySelector('.mute')
const volumeDownButton = document.querySelector('.volumeDown')
const volumeUpButton = document.querySelector('.volumeUp')
const information = document.querySelector('.information')
const colorSignal = document.querySelector('.colorSignal')

const musicSource = '../Songs/'
let musicVolume = 1.0

const playlist = [
	{
		file: '1.mp3',
		songName: 'Sin Sobresaltos',
		artist: 'Soda Stereo',
	}, 
	{
		file: '2.mp3',
		songName: 'El Rito',
		artist: 'Soda Stereo',		
	}, 
	{
		file: '3.mp3',
		songName: 'Prófugos',
		artist: 'Soda Stereo',
	}, 
	{
		file: '4.mp3',
		songName: 'No Existes',
		artist: 'Soda Stereo',
	}, 
	{
		file: '5.mp3',
		songName: 'Persiana Americana',
		artist: 'Soda Stereo',		
	}, 
	{
		file: '6.mp3',
		songName: 'En Camino',
		artist: 'Soda Stereo',		
	}, 
	{
		file: '7.mp3',
		songName: 'Signos',
		artist: 'Soda Stereo',		
	}, 
	{
		file: '8.mp3',
		songName: 'Final Caja Negra',
		artist: 'Soda Stereo',		
	},
]

audio.src = musicSource + playlist[0].file
let playlistCounter = 0

function playPause() {
	if (audio.paused) {
		playButton.classList.remove('play')
		playButton.classList.add('pause')			
		audio.play()
	} else {
		playButton.classList.remove('pause')
		playButton.classList.add('play')	
		audio.pause()
	}
}

function nextSong() {
	if (playlistCounter === playlist.length-1) {
		playlistCounter = 0
	} else playlistCounter++
	audio.src = musicSource + playlist[playlistCounter].file
	playPause()
}

function prevSong() {
	console.log(audio.currentTime) 
	if (audio.currentTime < 2) {
		if (playlistCounter === 0) {
			playlistCounter = playlist.length-1
		} else playlistCounter--
		audio.src = musicSource + playlist[playlistCounter].file
		playPause()
	} else audio.currentTime = 0
}

function muteMusic() {
	if (audio.volume !== 0.0) {
		audio.volume = 0.0
		muteButton.classList.remove('mute')
		muteButton.classList.add('maxVolume')
		colorSignal.style.backgroundColor = 'grey'
	} else {
		muteButton.classList.remove('maxVolume')
		muteButton.classList.add('mute')	
		audio.volume = musicVolume
		colorSignal.style.backgroundColor = 'blue'
		colorSignal.style.width = musicVolume * 100 + '%'
	}	
}

function volumeDown() {
	if (audio.volume > 0.09) {
		musicVolume -= 0.1
		audio.volume = musicVolume
	} else if (audio.volume === 0 && musicVolume > 0.09){
		musicVolume -= 0.1
	}
	colorSignal.style.width = musicVolume * 100 + '%'
}

function volumeUp() {
	if (audio.volume === 0) {
		musicVolume = 0.1
		muteMusic()
	} else if (audio.volume < 0.91) {	
		musicVolume += 0.1
		audio.volume = musicVolume
		colorSignal.style.width = musicVolume * 100 + '%'
	}	
}

playButton.onclick = function() {playPause()}		

nextButton.onclick = function() {nextSong()}

prevButton.onclick = function() {prevSong()}

audio.addEventListener('ended', function() {nextSong()})

muteButton.onclick = function() {muteMusic()}

volumeDownButton.onclick = function() {volumeDown()}

volumeUpButton.onclick = function() {volumeUp()}

audio.onplay = function() {information.innerHTML = playlist[playlistCounter].songName + ' - ' + playlist[playlistCounter].artist}

//console.log(Math.floor(Math.random() * (7 - 0)) + 0)