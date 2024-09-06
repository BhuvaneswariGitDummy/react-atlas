import {BrowserRouter, Routes, Route} from 'react-router-dom'
import User from './components/getUser/user'
import Add from './components/addUser/add';
import Edit from './components/updateUser/edit';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/add' element={<Add />} />
          <Route path='/update/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
