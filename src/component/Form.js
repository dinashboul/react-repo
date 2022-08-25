import React from "react";
import Form from 'react-bootstrap/Form';

class SelectForm extends React.Component {
  

    render() {
        return (
        <div>
        <Form className="mb-3">
        <Form.Label><h5>Select Number of Hornes:</h5></Form.Label>
        <Form.Select onChange={this.props.HornBeastNums}>
          <option>Select Number of Horns</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          
        </Form.Select>
      </Form>
      </div>
        )
    }
}

export default SelectForm;