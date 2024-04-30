import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateNote from "./pages/CreateNote.jsx";
import ViewNotes from "./pages/ViewNotes.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/view" element={<ViewNotes />} />
      </Routes>
    </Router>
  );
}

export default App;