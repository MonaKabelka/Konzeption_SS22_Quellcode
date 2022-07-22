import { AbstractSpeechState } from "./AbstractSpeechState.js";
import { SpeechStateThree } from "./SpeechStateThree.js";
export class SpeechStateTwo extends AbstractSpeechState {
    constructor(currentSpracherkennung) {
        super(["Ja", "Jetzt schon", "Jetzt"], currentSpracherkennung);
        this.currentSpracherkennung = currentSpracherkennung;
    }
    next() {
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
//# sourceMappingURL=SpeechStateTwo.js.map