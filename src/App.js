import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/App.css';
import Main from "./Main";
import Header from "./components/header/Header";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return(
    <Main>
      <Header />
      <Dashboard />
    </Main>
  )
}

export default App;
