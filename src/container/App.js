import React from 'react';
import Axios from 'axios';
import Header from '../componente/Header'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
    };
  }
  componentWillMount(){
    let this2 = this
    Axios.get("https://api.github.com/repositories?since=364").then(function(response){
      this2.setState({values: response.data})
    })
  }
  render() {
    let { name } = this.props
    let { values } = this.state
    return (
      <div className="App">
          <Header />
          <a href='#' onClick={(event)=>console.log(event)}>
            {name}
          </a>
          {values && values.map && values.map((elemento, index)=>
            <div key={index}>
              <h1>
                {elemento.name}
              </h1>
              <p>
                {elemento.description}
              </p>  
            </div>
          )}
      </div>
    );
  }
}

export default App;
