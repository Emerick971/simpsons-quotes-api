import React from 'react';
import './App.css';
import DisplaySimpson from './components/DisplaySimpson';
import axios from 'axios';

//initialisation de la constante qui détermine les informations sous forme de tableau
const sampleSimpson = 

  {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Left"
  }

;


//Transformation de 'function App' en 'class App' pour gérer un state
class App extends React.Component {
  constructor(props) {
    super(props);

    //initialisation du state
    this.state = {
      simpson: sampleSimpson
    }

    this.getSimpson = this.getSimpson.bind(this);
  }

  getSimpson() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          simpson: data[0]
          
        }); 
    });
   console.log()
  }

render() {


  return (
    <div className="App">
        <DisplaySimpson simpson={this.state.simpson} />

        {/* On ajoute un bouton pour lancer la requête API */}
        <button type="button" onClick={this.getSimpson} >Get New Quote</button>
    </div>
  );
}
}

export default App;
