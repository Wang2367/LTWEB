import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Menu from "./Menu";
import Home from "./Home";
import Product from "./Product";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container fluid className="p-0">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dien-thoai" element={<Product />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;