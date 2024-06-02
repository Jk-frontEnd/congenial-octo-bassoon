const BASE_URL = `https://api.datamuse.com/words`;

export const fetchSynonyms = (word) => {
   return fetch(`${BASE_URL}?rel_syn=${word}`)
      .then((response) => response.json())
      .then((data) => {
         return data;
      });
}

export const fetchAdjectives = (word) => {
   return fetch(`${BASE_URL}?rel_jjb=${word}`)
   .then((response) => response.json())
   .then((data) => {
      return data;
   });
}

export const fetchAntonyms = (word) => {
   return fetch(`${BASE_URL}?rel_ant=${word}`)
   .then((response) => response.json())
   .then((data) => {
      return data;
   });
}