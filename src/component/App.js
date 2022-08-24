import React from "react";
import Header from './Header';
import Main from './Main'
import Footer from './Footer';
import data  from "./pack.json";
import SelectedBeast from "./SelectedBeast";
import selectF from './Form';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false,
        title: "",
        img: "",
        description: "",
      };
    }
  
    showModal = (title, img, description) => {
      this.setState({
        show: true,
        title: title,
        img: img,
        description: description,
        horns:"",
      });
    };
  
    closeModal = () => {
      this.setState({
        show: false,
      });
    };

    HornBeastNums=(h)=>{
      this.setState({
        horns:h.target.value,
      })
    }
      
    render() {
      return (
        <div>
          
          <Header />
          < selectF HornBeastNums={this.HornBeastNums} />
        <div className="cards">
            <Main 
            data={data} 
            showModal={this.showModal} 
            HornBeastNums={this.state}
            />
             

            <SelectedBeast
              show={this.state.show}
              selectedBeastData={this.state}
              closeModal={this.closeModal}
            />
          </div>
          <Footer />
        </div>
      );
    }
  }
export default App;
  


