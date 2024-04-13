import { useState } from "react";

const SearchBar = ({ parentCallBack }) => {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <input
        value={inputText}
        onChange={(evt) => setInputText(evt.target.value)}
      ></input>
      <button
        onClick={() => {
          parentCallBack(inputText);
        }}
      >
        Search
      </button>
      <button
        onClick={() => {
          setInputText("");
          parentCallBack("");
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default SearchBar;
