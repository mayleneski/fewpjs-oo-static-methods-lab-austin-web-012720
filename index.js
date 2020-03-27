class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '')
  };

  static titleize(string) {
    const words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = [];
    let sentenceArray = string.split(' ');

    for(let i = 0; i < sentenceArray.length; i++) {
      if(i === 0) {
        result.push(this.capitalize(sentenceArray[i]));  
      } else {
        if(words.includes(sentenceArray[i])) {
          result.push(sentenceArray[i]);
        } else {
          result.push(this.capitalize(sentenceArray[i]));
        } 
      }
    }
    return result.join(' ');
  }
}