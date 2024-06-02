const BASE_URL = `https://api.datamuse.com`;

export const fetchSynonyms = (word) => {
   return fetch(`${BASE_URL}/words?rel_syn=${word}`)
      .then((response) => response.json())
      .then((data) => {
         return data;
      });
}
