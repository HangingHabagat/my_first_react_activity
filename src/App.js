import './App.css'
import { Routes, Route } from 'react-router-dom';
import AboutPage from './Pages/about';
import HomePage from './Pages/home';
import ContactPage from './Pages/contact';
import TestPage from './Pages/test';
import BlogPage from './Pages/blog';
import RootLayout from './Layout/RootLayout';
  
function App() {
  return (
    <RootLayout>
    <Routes>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/blog" element={<BlogPage />}></Route>
      <Route path="/test" element={<TestPage/>}></Route>
      </Routes>
    </RootLayout>
  );
};

export default App;
