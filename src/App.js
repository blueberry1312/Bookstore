import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Books from './components/books';
import Categories from './components/categories';
import NewBookForm from './components/newbookform';
import BookList from './components/booklist';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/books"
          element={(
            <div>
              <NewBookForm />
              <BookList />
            </div>
)}
        />
      </Routes>
    </Router>
  );
}

export default App;
