import React from 'react';
import {Jumbotron} from 'reactstrap';

export default class Jumbo extends React.Component {
  render(){
    return(
      <div>
        <Jumbotron>
          <h1 className="display-3">Star Wars!</h1>
              <p>The vehicles of Star Wars</p>
      </Jumbotron>
      </div>
);
};
  }
