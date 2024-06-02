import { fetchAntonyms } from "components/fetch";
import { useState } from "react";
import Loader from "components/Loader/Loader";

export const AntonymSearch = () => {
    const [word, setWord] = useState('');
    const [antonyms, setAntonyms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
  const handlefetchAntonyms = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetchAntonyms(word).then(data => {
        setAntonyms(data);
      setIsLoading(false);
    });
  }

  const handleAntonymClicked = (newWord) => {
    setWord(newWord);
    setIsLoading(true);
    fetchAntonyms(newWord).then(data => {
        setAntonyms(data);
      setIsLoading(false);
    });
  }

    return <div className="synonymSearch">
      <form>
        <label htmlFor="word-input">find antonyms</label>
        <div className="input-box">
        <input 
          value={word}
          onChange={(event) => setWord(event.target.value)} 
          id="word-input" />
        <button onClick={handlefetchAntonyms}>Go!</button></div>
      </form>
      {isLoading && <Loader />}
      {!isLoading && <ul>
        {antonyms.map((antonym, index) => (
          <li onClick={() => handleAntonymClicked(antonym.word)} key={antonym.score + index}>
            {antonym.word}
          </li>
        ))}
      </ul>}
    </div>
}