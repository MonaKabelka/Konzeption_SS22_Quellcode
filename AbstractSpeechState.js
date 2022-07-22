export class AbstractSpeechState {
    constructor(allowedWords, currentSpracherkennung) {
        this.allowedWords = allowedWords;
        this.currentSpracherkennung = currentSpracherkennung;
        this.recognition = this.buildRecognitionEngine();
        this.startRecognition();
    }
    buildRecognitionEngine() {
        console.log(this.allowedWords);
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
        const grammar = this.buildGrammarForWords("grammarName");
        const recognition = new SpeechRecognition();
        const speechRecognitionList = new SpeechGrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.continuous = true;
        recognition.lang = "de-DE";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.onresult = this.recognitionResult.bind(this);
        return recognition;
    }
    filterWords(wordToCheck) {
        var matchingWords = this.allowedWords.filter((recWord) => wordToCheck.match(".*" + recWord.toUpperCase() + ".*"));
        return matchingWords;
    }
    recognitionResult(result) {
        var current = result.results
            .item(result.results.length - 1)[0]
            .transcript.toUpperCase();
        var matchingWords = this.filterWords(current);
        matchingWords.forEach((word) => {
            console.log(word);
            this.next();
        });
    }
    buildGrammarForWords(grammarName) {
        const grammar = "#JSGF V1.0; grammar colors; public <" +
            grammarName +
            "> = " +
            this.allowedWords.join(" | ") +
            " ;";
        return grammar;
    }
    startRecognition() {
        this.recognition.start();
    }
    stopRecognition() {
        this.recognition.stop();
    }
}
//# sourceMappingURL=AbstractSpeechState.js.map