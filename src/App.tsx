import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import SignUp from './pages/SignUp/SignUp';
import NotFound from './pages/NotFound/NotFound';
import SignIn from './pages/SignIn/SignIn';

function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}>
            <Route index element={<SignUp />} />
            <Route path="SignIn" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
