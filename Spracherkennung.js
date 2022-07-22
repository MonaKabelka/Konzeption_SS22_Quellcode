import { SpeechStateOne } from "./SpeechStateOne.js";
export class Spracherkennung {
    constructor() {
        this.currentState = new SpeechStateOne(this);
    }
    updateState(state) {
        this.currentState = state;
    }
}
new Spracherkennung();
// const wordsToRecognize = ["hallo", "ja"];
// var recognition = buildRecognitionEngine();
// var counter = 0;
// var videos = [
//     "video.mp4",
//     "video.mp4"
// ];
// recognition.start();
// export function buildRecognitionEngine(){
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
//     const grammar = buildGrammarForWords(wordsToRecognize, "grammarName")
//     const recognition = new SpeechRecognition();
//     const speechRecognitionList = new SpeechGrammarList();
//     speechRecognitionList.addFromString(grammar, 1);
//     recognition.grammars = speechRecognitionList;
//     recognition.continuous = true;
//     recognition.lang = 'de-DE';
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;
//     recognition.onresult = recognitionResult;
//     return recognition;
// }
// export function recognitionResult(result){
//     var current = e.results.item(e.results.length - 1)[0].transcript.toUpperCase();
//     var matchingWords = wordsToRecognize.filter(recWord => current.match(".*" + recWord.toUpperCase() + ".*"));
//     matchingWords.forEach(word => {
//         counter++;
//         var videoTag = document.getElementById("videoTag");
//         videoTag.src = videos[counter];
//         videoTag.load();
//         videoTag.play();
//         console.log(word);
//         if (counter == wordsToRecognize.length - 1) {
//             counter = 0;
//         }
//     });
// }
// export function buildGrammarForWords(words: string[], grammarName: string): string {
//     const grammar = "#JSGF V1.0; grammar colors; public <" + grammarName + "> = " + words.join(" | ") + " ;";
//     return grammar;
// }
//# sourceMappingURL=Spracherkennung.js.map