import { AbstractSpeechState } from "./AbstractSpeechState.js";
import { Spracherkennung } from "./Spracherkennung.js";
import { SpeechStateOne } from "./SpeechStateOne.js";

export class SpeechStateFour extends AbstractSpeechState {
  constructor(public currentSpracherkennung: Spracherkennung) {
    super(["Oh", "Schade", "Internet"], currentSpracherkennung);
  }

  public next(): AbstractSpeechState {
    super.stopRecognition();
    var newState = new SpeechStateOne(this.currentSpracherkennung);
    this.currentSpracherkennung.updateState(newState);
    var videoTag = document.getElementById("videoTag");
    videoTag.src = "Videos/Szene01.mp4";
    videoTag.load();
    videoTag.play();
    return newState;
  }
}