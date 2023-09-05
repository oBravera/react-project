import CssBaseline from "@mui/material/CssBaseline";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Ordem from "./pages/Ordem";
import ContentManagement from "./pages/ContentManagement";


function NotFound() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Pagina não encontrada.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/react-project/" element={<Login />} />
        <Route path="/react-project/login" element={<Login />} />
        <Route path="/react-project/home" element={<Home />} />
        <Route path="/react-project/ordem" element={<Ordem />} />
        <Route path="/react-project/chamados" element={<ContentManagement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
