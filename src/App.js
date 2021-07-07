import { BrowserRouter, Route } from "react-router-dom";

// paginas
import Login from "./views/login";
import NovoUsuario from "./views/usuario-novo";
import Home from "./views/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/novousuario" component={NovoUsuario} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </>
  );
}

export default App;
