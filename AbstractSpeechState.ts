export abstract class AbstractSpeechState {

  private recognition = this.buildRecognitionEngine();
  constructor(public allowedWords: string[], public currentSpracherkennung: Spracherkennung) {
    this.startRecognition();
  }

  public buildRecognitionEngine() {
    console.log(this.allowedWords);
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const SpeechGrammarList =
      window.SpeechGrammarList || window.webkitSpeechGrammarList;

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

  public filterWords(wordToCheck: string): any {
    var matchingWords = this.allowedWords.filter((recWord) =>
      wordToCheck.match(".*" + recWord.toUpperCase() + ".*")
    );
    return matchingWords;
  }

  public recognitionResult(result: any): any {
    var current = result.results
      .item(result.results.length - 1)[0]
      .transcript.toUpperCase();
    var matchingWords = this.filterWords(current);
    matchingWords.forEach((word) => {
      console.log(word);
      this.next();
    });
  }

  public buildGrammarForWords(grammarName: string): string {
    const grammar =
      "#JSGF V1.0; grammar colors; public <" +
      grammarName +
      "> = " +
      this.allowedWords.join(" | ") +
      " ;";
    return grammar;
  }

  public abstract next(): AbstractSpeechState;

  protected startRecognition() {
    this.recognition.start();
  }

  protected stopRecognition(){
      this.recognition.stop();
  }
}
