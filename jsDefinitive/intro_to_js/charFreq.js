/**
 * This node program reads text from standard input, computes the freq of
 * each letter in that text, and displays a histogram of the most freq
 * used chars. It requires node 12 or higher to run.
 * In a unix-like environment we can invoke the program like this:
 *    node charFreq.js < corpus.txt
 */

// This class extends Map so that the get() method returns the specified
// value instead of null when the key is not in the map
class DefaultMap extends Map {
  constructor(defaultValue) {
    super();
    this.defaultValue = defaultValue;
  }
  get(key) {
    if (this.has(key)) {
      return super.get(key);
    } else {
      return this.defaultValue;
    }
  }
}

// This class computes and display letter freq histograms
class Histogram {
  constructor() {
    this.letterCounts = new DefaultMap(0);
    this.totalLetters = 0;
  }

  // this method updates the histrogram with the letters of text
  add(text) {
    // remove the whitespace from text with regexp, and convert to uppercase
    text = text.replace(/\s/g, "").toUpperCase();

    // now loop through the characters of the text
    for (let character of text) {
      let count = this.letterCounts.get(character);
      this.letterCounts.set(character, count + 1);
      this.totalLetters++;
    }
  }

  // convert the histogram to a string that displays an ASCII graphic
  toString() {
    // Convert the map to an array of [key,value] arrays
    let entries = [...this.letterCounts];
    // sort the array by count, then alphabetically
    entries.sort((a, b) => {// our cb function to define sort order
      if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : 1;
      } else {
        return b[1] - a[1];
      }
    });

    // Convert the counts to percentages
    for (let entry of entries) {
      entry[1] = entry[1] / this.totalLetters * 100;
    }

    // Drop any entries less than 1%
    entries = entries.filter(entry => entry[1] >= 1);

    // Now convert each entry to a line of text
    let lines = entries.map(
      ([l, n]) => `${1}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}`
    );

    // and return the concatenated lines, separated by newline chars
    return lines.join("\n");
  }
}

// This async (Promise-returning) function creates a Histogram object.
// asynchronously reads chunks of text from standard input, and adds those 
// chunks to the histogram. when it reaches the end of the stream, it returns
// this histogram.
async function histogramFromStdin() {
  process.stdin.setEncoding('utf-8');
  let histogram = new Histogram();
  for await (let chunk of process.stdin) {
    histogram.add(chunk);
  }
  return histogram;
}

// Then this final line of code is the actual main body of the program running
// globally. It makes Histrogram object from standard input, then prints the
// histogram.
histogramFromStdin().then(histogram => {
  console.log(histogram.toString());
});
