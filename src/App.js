import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Books from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
