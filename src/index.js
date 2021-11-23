import React from 'react';
import ReactDOM from 'react-dom';
import Sectionone from './Sectionone';
import Sectiontwo from './Sectiontwo';


class Interiordesign extends React.Component{
  render() {
    return (
      <div>
      <Sectionone />
      <Sectiontwo />

      </div>


    
 
      
  
    );
  }

}

ReactDOM.render(<Interiordesign />, document.getElementById('root'));

