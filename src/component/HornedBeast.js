import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
                     
              <Card style={{ width: '18rem', gap: '20%' ,display:"inline-block"} }>
                
                 
            <Card.Body  >
            <Card.Text className="horns">id: {this.props.id}</Card.Text>
            <Card.Title >{this.props.title}</Card.Title>
            <Card.Img style={{ width: '50%' ,height:'50%'}} alt="this.props.title"  variant="top" src={this.props.img} onClick={this.incrementNumOfPets} />
        
            <Card.Text className="horns">horns: {this.props.horns}</Card.Text>
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
        
            
            )
    }
}

export default HornedBeast;