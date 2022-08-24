import React from "react";
import HornedBeast from './HornedBeast';
import { Row } from "react-bootstrap";

class Main extends React.Component {
    render() {
      return this.props.data.map((element) => (
        <Row xs={1} md={4} className="g-4">
        <HornedBeast
          key={element._id}
          id={element._id}
          title={element.title}
          img={element.image_url}
          description={element.description}
          showModal={this.props.showModal}
        />
        </Row>
      ));
    
  }
  }
 

export default Main;