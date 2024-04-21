import './App.css';
import Book from './pages/Book';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import LoginForm from './pages/Login';
import SignUpForm from './pages/Signup';
import { Toaster } from 'react-hot-toast';
import ProtectedRoutes from './pages/ProtectedRoutes';
import MySlots from './pages/MySlots';
import Contact from './pages/Contact';
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/Login' element={<LoginForm />} />
          <Route path='/Signup' element={<SignUpForm />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<Home />} />
            <Route path='/Book' element={<Book />} />
            <Route path='/my-slots' element={<MySlots />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
