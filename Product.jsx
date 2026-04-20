import { useState, useEffect } from "react";
import { Breadcrumb, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9999/Product")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh", padding: "20px 0" }}>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Breadcrumb style={{ backgroundColor: "#e9ecef", padding: "10px 15px" }}>
          <Breadcrumb.Item href="/home">Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item active>Điện thoại</Breadcrumb.Item>
        </Breadcrumb>

        <h3 style={{ fontWeight: "bold" }}>Điện thoại</h3>
        <div style={{ marginBottom: 20, color: "#555" }}>
          ({products.length} sản phẩm)
        </div>

        <Row>
          {products.map((p) => (
            <Col key={p.id} md={3} sm={6} className="mb-4">
              <Card style={{ height: "100%" }}>
                <Card.Img
                  variant="top"
                  src={p.Images}
                  style={{ height: 180, objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title style={{ fontSize: 18, minHeight: 60 }}>
                    {p.Name}
                  </Card.Title>
                  <Card.Text style={{ fontWeight: "bold" }}>
                    {p.Price.toLocaleString("vi-VN")} đ
                  </Card.Text>
                  <Button variant="primary" className="mt-auto">
                    Chi tiết
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Product;