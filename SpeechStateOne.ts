import { AbstractSpeechState } from "./AbstractSpeechState.js";
import { Spracherkennung } from "./Spracherkennung.js";
import { SpeechStateTwo } from "./SpeechStateTwo.js";

export class SpeechStateOne extends AbstractSpeechState {
  constructor(public currentSpracherkennung: Spracherkennung) {
    super(["Hallo", "Ja", "Hey", "Guten Tag"], currentSpracherkennung);
  }

  public next(): AbstractSpeechState {
    super.stopRecognition();
    var newState = new SpeechStateTwo(this.currentSpracherkennung);
    this.currentSpracherkennung.updateState(newState);
    var videoTag = document.getElementById("videoTag");
    videoTag.src = "Videos/Szene02.mp4";
    videoTag.load();
    videoTag.play();
    return newState;
  }
}
