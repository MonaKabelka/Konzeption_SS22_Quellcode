import { AbstractSpeechState } from "./AbstractSpeechState.js";
import { SpeechStateTwo } from "./SpeechStateTwo.js";
export class SpeechStateOne extends AbstractSpeechState {
    constructor(currentSpracherkennung) {
        super(["Hallo", "Ja"], currentSpracherkennung);
        this.currentSpracherkennung = currentSpracherkennung;
    }
    next() {
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
//# sourceMappingURL=SpeechStateOne.js.map