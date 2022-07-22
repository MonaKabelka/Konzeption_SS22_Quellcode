import { AbstractSpeechState } from "./AbstractSpeechState.js";
import { SpeechStateFour } from "./SpeechStateFour.js";
export class SpeechStateThree extends AbstractSpeechState {
    constructor(currentSpracherkennung) {
        super(["Lag", "Nein", "Lagst", "Verpixelt", "Pixel", "Leider nicht", "Nö", "Ne", "Abgehackt"], currentSpracherkennung);
        this.currentSpracherkennung = currentSpracherkennung;
    }
    next() {
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
//# sourceMappingURL=SpeechStateThree.js.map