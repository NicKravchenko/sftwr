import "./App.css";
import UserCounter from "./components/CountUser";
import ServidorInfo from "./components/DataServer";
import AmoresApp from "./components/Form";
import NoFrame from "./components/NoFrame";

function App() {
  return (
    <div className="App">
      <NoFrame />
      <h1>Mi página web</h1>
      <p>Esta página no puede ser utilizada dentro de un frame.</p>
      <AmoresApp />
      <UserCounter />
      <ServidorInfo />
    </div>
  );
}

export default App;
