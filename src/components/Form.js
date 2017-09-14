import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class PilotForm extends React.Component {
  render(){
    return(

      <Form inline>
        <FormGroup onSubmit={this.props.onSubmit}>
          <Label for="examplePassword" hidden>Password</Label>
          <Input placeholder="Enter your name here"type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
          {' '}
        <Button>Submit</Button>
   </Form>

    )
  }
}
