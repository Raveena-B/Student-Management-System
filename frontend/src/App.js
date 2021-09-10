import Header from './components/Header';
import './App.css';
import AddStudent from './components/AddStudent';
import AllStudents from './components/AllStudents';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={AllStudents} />
        <Route path="/add" exact component={AddStudent} />

      </div>
    </Router>

  );
}

export default App;
