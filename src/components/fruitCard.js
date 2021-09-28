import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import { Row, Button } from 'react-bootstrap';


class FruitCard extends React.Component {

    render() {
        return (
            <>
                <Row>
                    {this.props.fruitData.map((fruit)=> {

                        return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={fruit.image} />
                                <Card.Body>
                                    <Card.Title>Name: {fruit.name}</Card.Title>
                                    <Card.Text>
                                   Price:  {fruit.price}
                                    </Card.Text>
                                    <Button variant="primary"onClick={() => this.props.AddToFav(fruit.image,fruit.name,fruit.price)} >Add to Favorite </Button>
                                </Card.Body>
                            </Card>)
                    })}
                </Row>
            </>




        )
    }
}



export default FruitCard;


