import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import Signup from './components/Signup';

function App() {
  const user = localStorage.getItem('token')
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {user && <Route path='/' element={<Main />} />}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Navigate replace to='/login'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
