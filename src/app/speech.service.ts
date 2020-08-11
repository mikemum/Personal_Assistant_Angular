import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpeechService {
  constructor() {}

  // startListening() {
  //   this.isListening = true;
  //   let listeningTimer = setTimeout(() => {
  //     this.isListening = false;
  //     clearTimeout(listeningTimer);
  //   }, 5 * 1000);

  //   this.recognition.start();

  //   this.recognition.addEventListener('speechstart', () => {
  //     console.log('Speech has been detected.');
  //   });

  //   this.recognition.addEventListener('result', (e) => {
  //     console.log('Result has been detected.');

  //     let last = e.results.length - 1;
  //     let text = e.results[last][0].transcript;
  //     console.log({ text });
  //     this.newMessage = text;
  //     console.log(this.newMessage);
  //     console.log('Confidence: ' + e.results[0][0].confidence);
  //   });

  //   this.recognition.addEventListener('speechend', () => {
  //     this.recognition.stop();
  //   });

  //   this.recognition.addEventListener('error', (e) => {
  //     console.error('Error: ', e);
  //   });
  // }

  synthVoice(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    synth.speak(utterance);
  }
}
