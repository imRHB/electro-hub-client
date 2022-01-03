import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Testimonial from './Pages/Testimonials/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/t" element={<Testimonial />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
