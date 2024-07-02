import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const products = [
  { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: 40, image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: 50, image: 'https://via.placeholder.com/150' },
];

const ProductList = ({ addToCart }) => {
  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
