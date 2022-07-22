import { AbstractSpeechState } from "./AbstractSpeechState.js";
import { SpeechStateOne } from "./SpeechStateOne.js";
export class SpeechStateFour extends AbstractSpeechState {
    constructor(currentSpracherkennung) {
        super(["Oh", "Schade", "Internet"], currentSpracherkennung);
        this.currentSpracherkennung = currentSpracherkennung;
    }
    next() {
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
//# sourceMappingURL=SpeechStateFour.js.map