import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (

      <div className="container">

              <div className="page">

<div>
    <div>
      <h1>Enter your goal for today</h1>
    </div>
    <div>
      <input type="date" defaultValue={"2018-11-15"}/>
    </div>
    <div>          
      <textarea rows="10" />
    </div>

    <div>
      <button>Add</button>
      <button>Clear</button>
    </div>

</div>

<div>

    <div>
      <div>
          <h3>15th Thu Nov, 2018</h3>
      </div>

      <div>
          <p> Design patterns</p>
      </div>

      <div>
          <p> Design patterns</p>
      </div>

      <div>
          <p> Design patterns</p>
      </div>

      <div>
          <p> Design patterns</p>
      </div>

      <div>
          <p> Design patterns</p>
      </div>

      <div>
        <button>&#60;&#60;</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>10</button>
        <button>>></button>
      </div>
      
    </div>

</div>


</div>



      </div>

    );
  }
}

export default App;
