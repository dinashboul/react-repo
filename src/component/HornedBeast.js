import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


class HornedBeast extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            numOfPets : 0
        };
    }

    incrementNumOfPets = () => {
        this.setState({
            numOfPets : this.state.numOfPets + 1
        })
    }
    
    render() {

        return(
            <Col>          
              <Card style={{ width: '18rem',display:'inline-block' }}class="card-deck" >
            <Card.Body >
            <Card.Title >{this.props.title}</Card.Title>
            <Card.Img style={{ width: '50%' ,height:'50%'}} variant="top" src={this.props.img} onClick={this.incrementNumOfPets} />
            <Card.Text>
                    Numbers
                </Card.Text>
                <Card.Text className="horns">Horns: {this.props.horns}</Card.Text>
                <Card.Text>
                    😸 Num of hornBeast: {this.state.numOfPets}
                </Card.Text>
                <Card.Text className="desc">{this.props.description}</Card.Text> 
               
                <Button
            onClick={() => {
              this.props.showModal(
                this.props.title,
                this.props.img,
                this.props.description
              );
            }}
          >
           ShowModel
          </Button>
            </Card.Body>
        </Card>
        </Col>

            )
    }
}

export default HornedBeast;