import React from "react";
import HornedBeast from './HornedBeast';
import Row from 'react-bootstrap/Row';
import packJson  from "./pack.json";


let Data = packJson.map(val => 
 <HornedBeast 
            key = {val._id}
            title = {val.title}
            img = {val.image_url}
            description = {val.description}
        /> 
    );
    
    class Main extends React.Component {
        render(){
            return(
                <Row xs={4} md={4} className='g-4'>
                {Data}
                </Row>
            )
        }
    }

export default Main;