

export const getGoogleTranslateUrl = (word: string, from: string = 'en', to: string = 'ru') => {
  return `https://translate.google.com/translate_a/single?client=gtx&dt=t&sl=${from}&tl=${to}&q=${word}`
};

export const getWordExample = (word: string) => {
  const options = {
    url: `https://wordsapiv1.p.rapidapi.com/words/${word}/examples`,
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
  };

  return options;
}
