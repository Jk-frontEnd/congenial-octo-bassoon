import { fetchSynonyms } from "components/fetch";
import { useState } from "react";
import Loader from "components/Loader/Loader";

export const SynonymSearch = () => {
    const [word, setWord] = useState('');
    const [synonyms, setSynonyms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
  const handlefetchSynonyms = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetchSynonyms(word).then(data => {
      setSynonyms(data);
      setIsLoading(false);
    });
  }

  const handleSynonymClicked = (newWord) => {
    setWord(newWord);
    setIsLoading(true);
    fetchSynonyms(newWord).then(data => {
      setSynonyms(data);
      setIsLoading(false);
    });
  }

    return <div className="synonymSearch">
      <form>
        <label htmlFor="word-input">find synonym</label>
        <div className="input-box">
        <input 
          value={word}
          onChange={(event) => setWord(event.target.value)} 
          id="word-input" />
        <button onClick={handlefetchSynonyms}>Go!</button></div>
      </form>
      {isLoading && <Loader />}
      {!isLoading && <ul>
        {synonyms.map((synonym, index) => (
          <li onClick={() => handleSynonymClicked(synonym.word)} key={synonym.score + index}>
            {synonym.word}
          </li>
        ))}
      </ul>}
    </div>
}