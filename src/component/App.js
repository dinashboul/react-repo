import React from "react";
import Header from './Header';
import Main from './Main'
import Footer from './Footer';
import packJson  from "./pack.json";
import SelectedBeast from "./SelectedBeast";


class App extends React.Component {
    constructor (props){
        super(props);
        this.state={
            bData: packJson,
            

        };
    }
    
    Model=(name)=>{
        const sbeast =packJson.find(beast=>beast.title===name);
        this.setState({sbeast});
    }
   
    
    render() {
        
        return(
            
            <div>
               
                <Header />
                 
                <Main/> 
                
                

              
               
            <Footer />
            </div>
        )
        
    }
}
export default App;
  


