import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/NewHomePage';
import FlipBookPage from './pages/FlipBookPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ContactPage from './pages/ContactPage';
import RecipePage from './pages/RecipePage';
import AddRecipePage from './pages/AddRecipePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flipbookpage" element={<FlipBookPage />} />
        <Route path="/recipepage" element={<RecipePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/addrecipepage" element={<AddRecipePage />} />
      </Routes>
    </Router>
  );
};

export default App;
