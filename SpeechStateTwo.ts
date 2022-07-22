import { AbstractSpeechState } from "./AbstractSpeechState.js";
import { Spracherkennung } from "./Spracherkennung.js";
import { SpeechStateThree } from "./SpeechStateThree.js";

export class SpeechStateTwo extends AbstractSpeechState {
  constructor(public currentSpracherkennung: Spracherkennung) {
    super(["Ja", "Jetzt schon", "Jetzt"], currentSpracherkennung);
  }

  public next(): AbstractSpeechState {
    super.stopRecognition();
    var newState = new SpeechStateThree(this.currentSpracherkennung);
    this.currentSpracherkennung.updateState(newState);
    var videoTag = document.getElementById("videoTag");
    videoTag.src = "Videos/Szene03.mp4";
    videoTag.load();
    videoTag.play();
    return newState;
  }
}
