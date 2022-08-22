import React from "react";
import HornedBeast from './HornedBeast';
// import h1 from './component/assest/h1.jpg';
// import hh2 from './component/assest/hh2.jpg';
import packJson from "./pack.json";

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
                Data
                
            )
        }
    }

export default Main;