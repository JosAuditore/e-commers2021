import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DeleteIcon } from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

export default function TarjetaDeCompras() {
    
    const [ producto,setProducto ] = useState([]);

    useEffect(() => {
        axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item`)
        .then((response) => {
            console.log(response.data);
        if(response.status === 200){
            setProducto(response.data);
        }
        }).catch((error) => {
            console.log(error)
        })
    },[])

    return (

        <Container>
            <Row className="g-4">
            {Array.from(producto).map((item, idx) => {
                return(
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Link to={`/item/${item._id}`}>
                            <Card.Title>{item.product_name}</Card.Title>
                            </Link>
                            <Card.Text>
                                {item.description}
                                <h3>$ {item.price}</h3>
                            </Card.Text>
                            {/*<a class="btn btn-primary" href="#" role="button">Comprar</a>*/}
                            <IconButton arial-label="Agregar al Carrito" /*onClick={ addToBasket }*/>
                                <DeleteIcon fontSize="medium"/>
                            </IconButton>
                        </Card.Body>
                    </Card>
                    </Col>
                )
            })}
            </Row>
        </Container>

    )
}