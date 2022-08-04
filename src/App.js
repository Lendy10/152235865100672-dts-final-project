import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import { Login } from './Pages/Login';
import { DetailPage } from './Pages/DetailPage';
import { LoggedInComponent } from './Components/LoggedInComponent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login note='login' />} />
        <Route path='/register' element={<Login note='register' />} />
        <Route path='/detail' element={
          <LoggedInComponent>
            <DetailPage />
          </LoggedInComponent>
        } />
      </Routes>
    </>
  );
}

export default App;
