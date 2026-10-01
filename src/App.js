import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Accueil from './Pages/Accueil/Accueil';
import Experiences from './Pages/Experiences/Experiences';
import Profil from './Pages/Profil/Profil';
import Competences from './Pages/Competences/Competences';
import Projets from './Pages/Projets/Projets';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;