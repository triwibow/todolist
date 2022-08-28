import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/style/App.css';
import Main from "./Main";
import Header from "./components/header/Header";
import DashboardActivity from "./pages/dashboard-activity/DashboardActivity";
import NewActivity from './pages/new-activity/NewActivity';

const App = () => {
  return(
    <Router>
      <Main>
        <Header />
        <Routes>
          <Route exact path="/" element={<DashboardActivity />} />
          <Route path="/detail">
            <Route path=":id" element={<NewActivity/>}/>
          </Route>
        </Routes>
      </Main>
    </Router>
  )
}

export default App;
