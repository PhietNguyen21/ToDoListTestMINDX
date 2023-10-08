import logo from "./logo.svg";
import "./App.css";
import TodoTemplates from "./template/TodoTemplates/TodoTemplates";

function App() {
  return (
    <div
      className="App"
      style={{
        padding: "20px 300px",
      }}
    >
      <TodoTemplates />
    </div>
  );
}

export default App;
