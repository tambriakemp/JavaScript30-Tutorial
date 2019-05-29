//The keydown event is fired when a key is pressed.
window.addEventListener("keydown", function(e) {
  //The Document method querySelector() returns the first Element within
  //the document that matches the specified selector, or group of selectors.
  //If no matches are found, null is returned.
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //play the sound
  console.log(audio);
  const key = document.querySelector(`.drumpad[data-key="${e.keyCode}"]`); //kay animation
  if (!audio) return; //stop the function from running

  audio.currentTime = 0; //The currentTime property sets or returns the current position (in seconds) of the audio playback.
  audio.play();

  key.classList.add("playing");
  console.log(key);
});
