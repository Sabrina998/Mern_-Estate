import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { Signin } from './Pages/Signin';
import Profile from './Pages/Profile';
import SignUp from './Pages/SignUp';
import About from './Pages/About';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>)
}