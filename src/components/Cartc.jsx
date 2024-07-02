import React from 'react';
import { Button, ListGroup, Container } from 'react-bootstrap';

const Cart = ({ cartItems, clearCart }) => {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                {item.name} x {item.quantity} = ${item.price * item.quantity}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h4>Total Items: {totalItems}</h4>
          <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
          <Button variant="danger" onClick={clearCart}>Clear Cart</Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
