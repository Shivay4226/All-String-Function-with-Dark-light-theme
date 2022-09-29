import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { useState } from "react";
import "./app.css"

function App() {
  const [inputText, setInputText] = useState("");

  //input area handle all input using handlechange event
  function handleChange(e) {
    let inputContent = e.target.value;

    setInputText(inputContent);
  }

  // convert text to lower case
  function lowerCase() {
    const response = inputText.toLowerCase();
    setInputText(response);
  }

  // convert text to UPPER CASE
  function upperCase() {
    const response = inputText.toUpperCase();
    setInputText(response);
  }
  // convert text to Title Case
  function titleCase() {
    const response = inputText.split(" ");

    for (let index = 0; index < response.length; index++) {
      response[index] =
        response[index].charAt(0).toUpperCase() + response[index].slice(1);
    }

    const finalResponse = response.join(" ");
    setInputText(finalResponse);
  }
  // Clear the textarea
  function clear() {
    setInputText("");
  }
  //remove blank space
  const validate = () => {
    var response = inputText.replaceAll(" ", "");
    setInputText(response)
}

  return (
    <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="container">
        <h1>Onclick Event</h1>
        <textarea
          className="textarea"
          placeholder="Enter the text"
          value={inputText}
          onChange={handleChange}
        ></textarea>

        <div className="button__container">
          <button onClick={lowerCase}>Lowercase</button>
          <button onClick={upperCase}>Upercase</button>
          <button onClick={titleCase}>Titlecase</button>
          <button onClick={validate}>Remove Space</button>
          <button onClick={clear}>clear</button>
        </div>
      </div>
    </ThemeProvider>
    </div>
  );
}

export default App;
