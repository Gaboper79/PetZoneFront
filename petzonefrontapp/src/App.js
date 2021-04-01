import logo from "./huellaVerde.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>PET-ZONE</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Login...</p>
        <form id="loginForm">
          <input type="text" placeholder="Usuario"></input>
          <input type="text" placeholder="Contraseña"></input>
          <button>Ingresar</button>
        </form>
      </header>
    </div>
  );
}

export default App;
