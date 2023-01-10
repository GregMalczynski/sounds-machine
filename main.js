// Get Drum Pads

const pads = document.querySelector('.pads')

const drum = document.querySelector('.drum');
const snare = document.querySelector('.snare');
const rimshot = document.querySelector('.rimshot');
const hihato = document.querySelector('.hihato');
const hihatc = document.querySelector('.hihatc');
const info = document.querySelector('.info');

const padColor = document.querySelectorAll('pad')

// Get Pitch Slider Bar

const slider = document.querySelector('.slider')

// Get Display Content

const pn = document.querySelector('.pn');
const pn1 = document.querySelector('.pn1');

// Get Sample Buttons Play-Stop

const btn_play = document.querySelector('.btn_play');
const btn_stop = document.querySelector('.btn_stop');

// Get Cassette Spinning Circles

const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');

// Get Elements for Change Content Styles

const content = document.querySelector('.content');
const header = document.querySelector('.header');
const audio_text = document.querySelector('.audio_text');

const pitchText = document.querySelectorAll('.pitch');

// Get Skin Change Buttons

const btn_dark = document.querySelector('.btn_dark');
const btn_bright = document.querySelector('.btn_bright');

const funcBright = () => {
    content.style.background = '#E1C179';
    header.style.color = 'black';
    audio_text.style.color = 'black';
    pitchText.style.color = 'black';
}
const funcDark = () => {
    content.style.background = 'linear-gradient(0deg,rgba(0,0,0,1) 0%, rgba(34,34,34,1) 100%)';
    header.style.color = 'white';
    audio_text.style.color = 'white';
    pitchText.style.color = 'white';
}

// Drum Pads Source Wave's

const tabSounds = [
    './sounds/kick_1.wav',
    'kick',
    './sounds/snare_1.wav',
    'snare',
    './sounds/clap_1.wav',
    'clap',
    './sounds/hihat_closed.wav',
    'hihat_c',
    './sounds/hihat_open.wav',
    'hihat_o'
]

// Sample Background Source Wave

const tabSample = [
    './sounds/give_me_your_love.wav'
]

var sSample = new Audio(tabSample[0]);  

var sKick = new Audio(tabSounds[0]);
var sSnare = new Audio(tabSounds[2]);
var sClap = new Audio(tabSounds[4]);
var sHihatc = new Audio(tabSounds[6]);
var sHihato = new Audio(tabSounds[8]);

// Cassette Circles Spinning Animation

const rotateImage = (rate) => {
    circle1.style.animation = 'rotation '+ rate +'s infinite linear';
    circle2.style.animation = 'rotation '+ rate +'s infinite linear';
    pn1.style.animation = 'pulse 0.5s infinite ease-in-out';
}

const rotateStop = () => {
    circle1.style.animation = 'stop';
    circle2.style.animation = 'stop';
    pn1.style.animation = 'stop';
}

let samplePlay = false

// KeyDown function

const move = (e) => {
   
    // Sample Buttons Detection

    if ( e.keyCode === 82 || e.target.className === 'btn_play' ) {
        
            samplePlay = true
            rate = 1
            document.querySelector('.btn_play');
            btn_play.style.backgroundColor = '#ffae1b';
            btn_play.style.boxShadow = '2px 2px 8px #ffae1b';
            btn_stop.style.boxShadow = 'none';
            btn_stop.style.backgroundColor = 'rgb(197, 71, 32)';
            pn1.innerHTML = `${tabSample[0]}`;
            sSample.loop = true;
            sSample.volume = 0.7;
            sSample.play();
            sSample.playbackRate = rate;
            rotateImage(rate)
            console.log('vvv' + e.target.value)
            console.log(e.target.value / 50)
            console.log(samplePlay)
            console.log(newRate)
                
                slider.addEventListener('mousemove', playbackRate )
                slider.addEventListener('touchmove', playbackRate )
                function playbackRate(e) {
                        
                    rate = e.target.value / 50
                    sSample.playbackRate = rate;
                    samplePlay ? rotateImage(rate) : rotateStop()
                    //rotateImage(rate)
                    console.log('rate ' + rate)
                    console.log(samplePlay)
                    return rate
                    }
            playbackRate()  
     
    }
    if ( e.keyCode === 84 || e.target.className === 'btn_stop' ) {
        slider.removeEventListener('mousemove', playbackRate)
        samplePlay = false
        document.querySelector('.btn_stop');
        btn_stop.style.backgroundColor = '#ffae1b';
        btn_stop.style.boxShadow = '2px 2px 8px #ffae1b';
        btn_play.style.boxShadow = 'none';
        btn_play.style.backgroundColor = 'rgb(197, 71, 32)';
        pn1.innerHTML = ` waiting...`;
        sSample.pause();
        sSample.currentTime = 0;
        slider.value = 50
        console.log(samplePlay)
        rotateStop();  
    }

    // DrumMachine Pads Detection / KeyDown

    if ( e.keyCode === 90 || e.target.className === 'drum' ) {

        displayValueA = e.keyCode;
        displayValueB = tabSounds[0];
        displayValueC = tabSounds[0 + 1];
        padNum = 6
        playSound = sKick;
        buttonOn()
    } 
    if ( e.keyCode === 88 || e.target.className === 'snare' ) {

        displayValueA = e.keyCode;
        displayValueB = tabSounds[2];
        displayValueC = tabSounds[2 + 1];
        padNum = 7
        playSound = sSnare;
        buttonOn()
    } 
    if ( e.keyCode === 67 || e.target.className === 'rimshot' ) {

        displayValueA = e.keyCode;
        displayValueB = tabSounds[4];
        displayValueC = tabSounds[4 + 1];
        padNum = 8
        playSound = sClap;
        buttonOn()
    } 
    if ( e.keyCode === 65 || e.target.className === 'hihatc' ) {
        
        displayValueA = e.keyCode;
        displayValueB = tabSounds[4];
        displayValueC = tabSounds[4 + 1];
        padNum = 3
        playSound = sHihatc;
        buttonOn()
    } 
    if ( e.keyCode === 83 || e.target.className === 'hihato') {
        
        displayValueA = e.keyCode;
        displayValueB = tabSounds[4];
        displayValueC = tabSounds[4 + 1];
        padNum = 4
        playSound = sHihato;
        buttonOn()
    } 
    if ( e.keyCode === 68 || e.target.className === 'crash') {
        
        displayValueA = e.keyCode;
        displayValueB = tabSounds[4];
        displayValueC = tabSounds[4 + 1];
        padNum = 5
        playSound = sHihato;
        buttonOn()
    } 
    if ( e.keyCode === 81 || e.target.className === 'tom1') {
        
        displayValueA = e.keyCode;
        displayValueB = tabSounds[4];
        displayValueC = tabSounds[4 + 1];
        padNum = 0
        playSound = sHihato;
        buttonOn()
    } 
    if ( e.keyCode === 87 || e.target.className === 'tom2') {
        
        displayValueA = e.keyCode;
        displayValueB = tabSounds[4];
        displayValueC = tabSounds[4 + 1];
        padNum = 1
        playSound = sHihato;
        buttonOn()
    } 
    if ( e.keyCode === 69 || e.target.className === 'voice') {
        
        displayValueA = e.keyCode;
        displayValueB = tabSounds[4];
        displayValueC = tabSounds[4 + 1];
        padNum = 2
        playSound = sHihato;
        buttonOn()
    } 

    function buttonOn() {
        //console.log('here is pad :' + pad)
        console.log(padColor[0])
        const padStyle = document.querySelector(`.${padColor[padNum].className}`)
        document.querySelector('.drum')
        pn.innerHTML = `  ${displayValueA} > ${displayValueB} > ${displayValueC}`;
        padStyle.style.backgroundColor = '#ffae1b';
        padStyle.style.boxShadow = 'inset 0 0 25px #000000'
        padStyle.style.color = 'black'
        playSound.play();
    }
}

// KeyUp Function

const move1 = (e) => {
    console.log(e.keyCode);

    // DrumMachine Pads Detection / KeyUp

    if ( e.keyCode === 90 || e.target.className === 'drum' ) {
        padNum = 6
        playSound = sKick;
        buttonOff()
    } 
    if ( e.keyCode === 88 || e.target.className === 'snare' ) {
        padNum = 7
        playSound = sSnare;
        buttonOff()
    } 
    if ( e.keyCode === 67 || e.target.className === 'rimshot' ) {
        padNum = 8
        playSound = sClap;
        buttonOff()
    } 
    if ( e.keyCode === 65 || e.target.className === 'hihatc' ) {
        padNum = 3
        playSound = sHihatc;
        buttonOff()
    } 
    if ( e.keyCode === 83 || e.target.className === 'hihato' ) {
        padNum = 4
        playSound = sHihato;
        buttonOff()
    }
    if ( e.keyCode === 68 || e.target.className === 'crash' ) {
        padNum = 5
        playSound = sHihato;
        buttonOff()
    }
    if ( e.keyCode === 81 || e.target.className === 'tom1' ) {
        padNum = 0
        playSound = sHihato;
        buttonOff()
    }
    if ( e.keyCode === 87 || e.target.className === 'tom2' ) {
        padNum = 1
        playSound = sHihato;
        buttonOff()
    }
    if ( e.keyCode === 69 || e.target.className === 'voice' ) {
        padNum = 2
        playSound = sHihato;
        buttonOff()
    }

    function buttonOff() {
        //console.log('here is pad :' + pad)
        console.log(padColor[0])
        const padStyle = document.querySelector(`.${padColor[padNum].className}`)
        document.querySelector('.drum')
        pn.innerHTML = ``;
        padStyle.style.backgroundColor = 'rgb(29, 29, 29)'
        padStyle.style.boxShadow = 'none'
        padStyle.style.color = 'rgb(216, 186, 137)'
        playSound.pause();
        playSound.currentTime = 0;
    }
}

// Listeners

window.addEventListener('keydown', move);
window.addEventListener('keyup', move1);
window.addEventListener('mousedown', move);
window.addEventListener('mouseup', move1);

// Listeners for Mobile Phone

window.addEventListener('touchstart', move);
window.addEventListener('touchend', move1);

window.addEventListener('touchmove', move);