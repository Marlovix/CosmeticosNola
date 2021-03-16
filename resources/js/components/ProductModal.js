import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

function ProductModal(props) {
    const [quantityToCart, setQuantityToCart] = useState(0);

    const product = props.selectedProduct;
    const title = product ? product.title : "";
    const description = product ? product.description : "";
    const price = product ? product.price : "";
    const category = product ? product.category.name : "";
    const quantity = product ? product.quantity : 0;

    const handleOnChangeQuantityToCart = (event) => {
        setQuantityToCart(event.target.value);
    };

    const handleCloseModal = () => {
        setQuantityToCart(0);
        props.handleCloseModal();
    };

    const handleAddToCart = (product, quantityToCart) => {
        if (quantityToCart > 0 && quantityToCart <= product.quantity)
            props.handleAddToCart(product, quantityToCart);
        else props.handleCloseModal();
        setQuantityToCart(0);
    };
    return (
        <Modal show={props.showModal} onHide={handleCloseModal}>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="form-title">
                        <Form.Label column sm="4">
                            <b>Product</b>
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                plaintext
                                readOnly
                                defaultValue={title}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="form-title">
                        <Form.Label column sm="4">
                            <b>Description</b>
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                plaintext
                                readOnly
                                defaultValue={description}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="form-price">
                        <Form.Label column sm="4">
                            <b>Price</b>
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                plaintext
                                readOnly
                                defaultValue={price + " €"}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="form-quantity">
                        <Form.Label column sm="4">
                            <b>Available</b>
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                plaintext
                                readOnly
                                defaultValue={quantity}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="form-category">
                        <Form.Label column sm="4">
                            <b>Category</b>
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                plaintext
                                readOnly
                                defaultValue={category}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="form-quantity-cart">
                        <Form.Label>
                            How many products would you like to buy?
                        </Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="0"
                            onChange={handleOnChangeQuantityToCart}
                            value={quantityToCart}
                            min="0"
                            max={quantity}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() => handleAddToCart(product, quantityToCart)}
                >
                    Add to cart
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProductModal;
