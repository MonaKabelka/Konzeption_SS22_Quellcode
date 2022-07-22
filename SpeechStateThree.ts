import { AbstractSpeechState } from "./AbstractSpeechState.js";
import { Spracherkennung } from "./Spracherkennung.js";
import { SpeechStateFour } from "./SpeechStateFour.js";

export class SpeechStateThree extends AbstractSpeechState {
  constructor(public currentSpracherkennung: Spracherkennung) {
    super(["Lag", "Nein", "Lagst", "Verpixelt", "Pixel", "Leider nicht", "Nö", "Ne", "Abgehackt"], currentSpracherkennung);
  }

  public next(): AbstractSpeechState {
    super.stopRecognition();
    var newState = new SpeechStateFour(this.currentSpracherkennung);
    this.currentSpracherkennung.updateState(newState);
    var videoTag = document.getElementById("videoTag");
    videoTag.src = "Videos/Szene04.mp4";
    videoTag.load();
    videoTag.play();
    return newState;
  }
}
