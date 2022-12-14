import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class SelectedBeastData extends React.Component {
  render() {
    return (
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.show}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>{this.props.SelectedBeastData.title}</h2>
            
          </Modal.Title>
         
        </Modal.Header>
        <Modal.Body>
        
          <img style={{ width: '100%' }}
            src={this.props.SelectedBeastData.img}
            alt={this.props.SelectedBeastData.title}
            
          />
          <p>{this.props.SelectedBeastData.desc}</p>
          
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
  export default SelectedBeastData;