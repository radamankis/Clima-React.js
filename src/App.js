import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';
import Clima from './componentes/Clima';

class App extends Component {


  state={
    error: "",
    consulta:{},
    resultado:{}
  }

  componentDidUpdate(prevProps,PrevState) {
    if(PrevState.consulta !== this.state.consulta)
    this.consultarApi();
  }
  componentDidMount() {
    this.setState({
      error: false
    })
  }

  consultarApi =() =>{
    const {ciudad,pais}=this.state.consulta;
    if(!ciudad ||!pais)return null;
    //leer la url y agregar el API key
    const AppId='febf9d0d24d29c9b8a1884330ccf320a';
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${AppId}`;
    
    //query con fetch api
    
    fetch(url)
      .then(respuesta=>{
        return respuesta.json();
      })
      .then(datos=>{
        this.setState({
          resultado: datos
        })
      } )
      .catch(error=>{
        console.log(error);
      })

      
    
    

    
  }
  datosConsulta= respuesta =>{
    if(respuesta.ciudad ==='' || respuesta.pais === ''){
      this.setState({error: true})
    }else {
      this.setState({
        consulta: respuesta,
        error: false
      })
    }
  }
  render() {

    const error=this.state.error;
    let resultado;
    let {cod}=this.state.resultado;
    //Mostar error si faltan campos
    if(error){
      resultado= <Error mensaje="Ambos campos son obligatoris"/>;
    }//Mostrar error si no encuentra la ciudad 
    else if(cod === '404'){
      resultado= <Error mensaje="Ciudad no encontrada"/>;
    }
    else {
      resultado=<Clima resultado={this.state.resultado}/>;
    }
    return (
      <div className="app">
             
          
        <Header
        titulo='Clima React'
        />
        <Formulario
        datosConsulta={this.datosConsulta}
        />
        {resultado}
      </div>
    );
  }
}

export default App;
