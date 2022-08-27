import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/style/App.css';
import Main from "./Main";
import Header from "./components/header/Header";
import DashboardActivity from "./pages/dashboard-activity/DashboardActivity";
import NewActivity from './pages/new-activity/NewActivity';

const App = () => {
  return(
    <Main>
      <Header />
      <NewActivity />
    </Main>
  )
}

export default App;
