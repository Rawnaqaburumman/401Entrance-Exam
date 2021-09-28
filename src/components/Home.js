import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FruitCard from './fruitCard'
class Home extends React.Component {


constructor(props){
  super(props)
  this.state= {
fruitData:[],
showfruit:false



  }
}


AddToFav = async (image,name,price) =>{
  const url = process.env.REACT_APP_API_SERVER
const body ={image,name,price}
await axios.post(`${url}/myfruite`,body)
console.log('my body',body)


}









componentDidMount = async ()=>{
const url = process.env.REACT_APP_API_SERVER
await axios.get(`${url}/fruit`).then((result) =>{
console.log(result)
this.setState({

  fruitData:result.data,
  showfruit:true


})
console.log(this.state.fruitData)
})

}






  render() {
    console.log(this.state.fruitData)
    return (
      <>

      {this.state.showfruit &&
   <FruitCard
   fruitData ={this.state.fruitData}
   AddToFav={this.AddToFav}
   
      
   />
  }
      </>
    )
  }
}

export default Home;
