import React, { Component } from "react";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {};

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais que muito conhecimento.',
      'O riso é a maior distÂncia entre duas pesssoas',
      'Deixe de lado as preocupações e seja feliz',
      'Realize o obvio, pense no impossivél e conquiste o impossivél.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o susseso é o medo do fracasso.',
    ];
  }
  render() {
    return (
    <div>
      <img src={require('./assets/biscoito.png')}
       alt="biscoito"></img>
       <Botao/>
       <h3>Frase Aleatoria...</h3>
    </div>
    )    
  }
}

class Botao extends Component {
  render(){
    return(
      <div>
        <button>Abrir Biscoito</button>
      </div>
    )
  }
}

export default App;

