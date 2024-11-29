import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Home } from './Component/Home.tsx';
import { Login } from './Component/Login.tsx';
import { Contact } from './Component/Contact.tsx';
import {Provider} from "react-redux";
import { Store } from './Store.ts';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
      <Router>
<Link to='/'>Home</Link>
<Link to='/login'>Login</Link>
<Link to='/contact'>Contact</Link>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
      </Provider>
      
    </div>
  );
}

export default App;
