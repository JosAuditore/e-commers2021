import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AddShoppingCart } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider';



export default function Home() {
    
    const [ producto,setProducto ] = useState([]);
    const [{basket}, dispatch] = useStateValue();



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

    const addToBasket = () =>{
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            item:{
                id: producto._id,
                name: producto.product_name,
                image: producto.image,
                price: producto.price,
                description: producto.description,
            }
        } 
        )
    }

    return (

        <Container>
            <h1>Home</h1>
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
                            <IconButton arial-label="Agregar al Carrito" onClick={ addToBasket }>
                                <AddShoppingCart fontSize='medium'/>
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