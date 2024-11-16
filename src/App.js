import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/andreamorinigo7"> Andrea Morinigo</a> on{" "}
        <a href="https://github.com/andreamorinigo7/weather-react-app">
          {" "}
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
