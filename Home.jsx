import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9999/Category")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ backgroundColor: "#ff3d1f", minHeight: "100vh", padding: "40px 0" }}>
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          backgroundColor: "white",
          borderRadius: "4px",
          padding: "20px 10px",
        }}
      >
        <Row className="justify-content-center text-center">
          {categories.map((c) => (
            <Col key={c.id} xs={6} md={2} className="mb-3">
              <Link to="/dien-thoai" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    margin: "0 auto",
                    borderRadius: "50%",
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={`/${c.Logo}`}
                    alt={c.Category_Name}
                    style={{ width: "70%", objectFit: "contain" }}
                  />
                </div>
                <div style={{ marginTop: 8, fontSize: 14, color: "#0d6efd" }}>
                  {c.Category_Name}
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Home;