import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/chat.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-virtual-assistant',
  templateUrl: './virtual-assistant.component.html',
  styleUrls: ['./virtual-assistant.component.scss'],
})
export class VirtualAssistantComponent implements OnInit, OnDestroy {
  public userRequest: string[] = [];
  public newMessage: string = '';
  public messageList: string[] = [];
  public isListening: boolean = false;
  public recognition;
  public speech;
  public voices;
  chatForm: FormGroup;
  getMessages$: Subscription;

  constructor(private chatService: ChatService, private router: Router) {
    const SpeechRecognition = window['webkitSpeechRecognition'];
    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    this.chatForm = new FormGroup({
      chatRequest: new FormControl('', Validators.required),
    });

    this.chatForm.valueChanges.subscribe(({chatRequest}) => {
      console.log({ chatRequest });
      
    });

    this.getMessages$ = this.chatService
      .getMessages()
      .subscribe((chatResponse: any) => {
        // console.log({ chatResponse });
        // this.newMessage = chatResponse.message;
        this.synthVoice(chatResponse.message);
        this.messageList.push(chatResponse.message);
      });
  }

  ngOnInit() {
    this.synthVoice(
      'Hello there.... My name is Minilik.... and I am here to help you as much as I can'
    );
  }

  ngOnDestroy(): void {
    this.getMessages$.unsubscribe();
  }

  sendMessage() {
    // console.log('inside sendMessage ...', this.chatForm.value);
    let message = this.chatForm.value.chatRequest;
    this.chatService.sendMessage(message);
    this.userRequest.push(message);
    this.chatForm.setValue({ chatRequest: '' });
  }

  startListening() {
    this.isListening = true;
    let listeningTimer = setTimeout(() => {
      this.isListening = false;
      clearTimeout(listeningTimer);
    }, 5 * 1000);

    this.recognition.start();

    this.recognition.addEventListener('speechstart', () => {
      // console.log('Speech has been detected.');
    });

    this.recognition.addEventListener('result', (e) => {
      // console.log('Result has been detected.');

      let last = e.results.length - 1;
      let text = e.results[last][0].transcript;
      // console.log({ text });
      // this.userRequest = text;
      this.userRequest.push(text);
      this.chatForm.setValue({ chatRequest: text });
      // console.log(this.newMessage);
      // console.log('Confidence: ' + e.results[0][0].confidence);
    });

    this.recognition.addEventListener('speechend', () => {
      // console.log('Speech ended.');
      this.recognition.stop();
    });

    this.recognition.addEventListener('error', (e) => {
      console.error('Error: ', e);
    });
  }

  synthVoice(text) {
    let speech = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    // speech.voice = voices[4];
    const synth = window.speechSynthesis;
    speech.text = text;
    synth.speak(speech);
  }
}
