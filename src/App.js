import { BrowserRouter, Route } from "react-router-dom";

// paginas
import Login from "./views/login";
import NovoUsuario from "./views/usuario-novo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/novousuario" component={NovoUsuario} />
      </BrowserRouter>
    </>
  );
}

export default App;
