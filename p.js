const speech = new SpeechSynthesisUtterance();

let voices = [];

 

let voiceSelect = document.querySelector("select");

 

window.speechSynthesis.onvoiceschanged = () => {

    voices = window.speechSynthesis.getVoices();    //return a list of sound that are available on this device

    // speech.voice = voices[0];

   

    /* Display the voices in the dropdown */

    voices.forEach((voice, i) => (
        voiceSelect.options[i] = new Option(voice.name, i)));

};



voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
});


///////////////////////////////////////////////////////////////////////////////////////

document.querySelector("button").addEventListener("click", () =>{

    speech.text = document.querySelector("textarea").value;

    window.speechSynthesis.speak(speech);

});