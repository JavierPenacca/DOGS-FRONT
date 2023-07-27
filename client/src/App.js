import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing, Home, Form, Detail } from "./views";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<Detail />} />
          <Route path="/create" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;