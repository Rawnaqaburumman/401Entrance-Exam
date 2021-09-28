import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import { Row, Button } from 'react-bootstrap';
import axios from 'axios';
class FavFruit extends React.Component {



  constructor(props) {
    super(props)
    this.state = {
      favFruit: [],
      showcard: false



    }
  }


  componentDidMount = async () => {
    const url = process.env.REACT_APP_API_SERVER
    await axios.get(`${url}/myfruite`).then((result) => {
      console.log(result)
      this.setState({

        favFruit: result.data,
        showcard: true


      })
   console.log(this.stste.favFruit)
       
    } )
  }


  render() {
    console.log('favadata', this.state.favFruit)
    return (
        <>
            <Row>
                {this.state.favFruit.map((fruit)=> {

                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={fruit.image} />
                            <Card.Body>
                                <Card.Title>Name: {fruit.name}</Card.Title>
                                <Card.Text>
                               Price:  {fruit.price}
                                </Card.Text>
                                <Button variant="primary" >Delete</Button>
                                <Button variant="primary" >Update</Button>
                            </Card.Body>
                        </Card>)
                })}
            </Row>
        </>




    )
}

  }


export default FavFruit;
