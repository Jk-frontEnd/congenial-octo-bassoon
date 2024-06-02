import { useState } from "react";
import { fetchAdjectives } from "components/fetch";
import Loader from "components/Loader/Loader";

export const Adjective = () => {
    const [word, setWord] = useState('');
    const [adjectives, setAdjectives] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const handlefetchAdj = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetchAdjectives(word).then(data => {
        setAdjectives(data);
        setIsLoading(false);
        });
    }

    const handleAdjClicked = (newWord) => {
        setWord(newWord);
        setIsLoading(true);
        fetchAdjectives(newWord).then(data => {
        setAdjectives(data);
        setIsLoading(false);
        });
    }
    return <div className="adjectiveSearch">
    <form>
        <label htmlFor="word-input">find adjective</label>
        <div className="input-box">
        <input 
          value={word}
          onChange={(event) => setWord(event.target.value)} 
          id="word-input" />
        <button onClick={handlefetchAdj}>Go!</button></div>
      </form>
      {isLoading && <Loader />}
      {!isLoading && <ul>
        {adjectives.map((adjective, index) => (
          <li onClick={() => handleAdjClicked(adjective.word)} key={adjective.score + index}>
            {adjective.word}
          </li>
        ))}
      </ul>}
      </div>
}
