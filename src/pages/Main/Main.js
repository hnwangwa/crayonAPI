import React, { Component } from "react";
import Images from "../../components/Images/";
import axios from "axios";
import { ListItem } from "../../components/List";
import {Container } from "../../components/Grid";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
     this.state = {
    images: []
  };
}
  
  componentDidMount() {
    this.loadImages();
  }

  loadImages = () => {
    axios.get("https://jsonplaceholder.typicode.com/photos")      
      .then(res => this.setState({ images: res.data.slice(0,25)})) 
      .catch(err => console.log(err));

    };

  render() {
    return (
      <Container fluid>
              <h1>Help Us Think of Fun Crayon Color Names!</h1>
                <h2>Simply click on any color that inspires you.</h2>
                 <div style={{display: "inline-block"}}>
                        <div className="container">
                          {this.state.images.map(image => (
                            <ListItem key={image._id}>
                                <Images url={image.thumbnailUrl} title={image.title} id={image.id} className="image" />
                            </ListItem>
                         ))}
                    </div>
                </div>
           </Container>
        );
    }
}
      export default Main;