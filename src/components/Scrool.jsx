import React, { Component } from 'react';

class Scrool extends Component {
  render() {
    const objectassign = Object.assign(
      {},
      { sample: 'sample1', sample2: 'sampless' },
      { sample2: 'sample2' },
    );
    console.log(objectassign);
    return (
      <div>
    objectAssign practice!
    Lets open console
      </div>
    );
  }
}


export default Scrool;
