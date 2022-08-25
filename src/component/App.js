import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import data from "./pack.json";
import SelectedBeastData from "./SelectedBeast";
import SelectForm from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      horns: "",
      title: "",
      img: "",
      desc: "",
    };
  }

  showModal = (title, img, desc) => {
    this.setState({
      show: true,
      title: title,
      img: img,
      desc: desc,
    });
  };

  closeModal = () => {
    this.setState({
      show: false,
    });
  };

  HornBeastNums = (e) => {
    this.setState({
        horns : e.target.value,
    })
  }

  render() {
    return (
      <div>
        <Header />
        <SelectForm 
            HornBeastNums={this.HornBeastNums}
        />
        <div className="cards">
          <Main 
          data={data} 
          showModal={this.showModal}
          HornBeastNums={this.state}
          />
          <SelectedBeastData
            show={this.state.show}
            SelectedBeastData={this.state}
            closeModal={this.closeModal}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
  


