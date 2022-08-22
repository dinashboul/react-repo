import React from "react";
// import myJson from './package.json' assert {type: 'json'};
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// console.log(myJson.person.name);
class HornedBeast extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            numOfPets : 0
        }
    }

    incrementNumOfPets = () => {
        this.setState({
            numOfPets : this.state.numOfPets + 1
        })
    }
    
    render() {

        return(
           
            <Card style={{ width: '18rem',display:'inline-block' }} className="beast-card" >
            <Card.Body class="card-deck" >
            <Card.Title >{this.props.title}</Card.Title>
            <Card.Img style={{ width: '50%' ,height:'50%'}} variant="top" src={this.props.img} onClick={this.incrementNumOfPets} />
            <Card.Text>
                    Numbers
                </Card.Text>
                <Card.Text>
                    😸 Num of pets: {this.state.numOfPets}
                </Card.Text>
                <Card.Text>
                     {this.props.description}
                </Card.Text>
               
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        
            )
    }
}

export default HornedBeast;