import React,{Component} from 'react';
import PropTypes from 'prop-types'


 class Formulario extends Component {

    //crear los Refs
    ciudadRef =React.createRef();
    paisRef =React.createRef();

    buscarClima = (e)=>{
        e.preventDefault();

        //leer los refs y crear el obejto
        const respuesta ={
            ciudad : this.ciudadRef.current.value,
            pais: this.paisRef.current.value
        }
        //enviar por props
        this.props.datosConsulta(respuesta);
        //opcional resetear el form
    }

    render() {
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.buscarClima} >
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input id="ciudad" ref={this.ciudadRef} type="text"/>
                                <label htmlFor ="ciudad">Ciudad: </label>

                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.paisRef}>
                                    <option value='' defaultValue>Elige un país </option>
                                    <option value="AR">Argentina</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="ES">España</option>
                                    <option value="US">Estados Unidos</option>
                                    <option value="MX">México</option>
                                    <option value="PE">Perú</option>
                                    <option value="VE">Venezuela</option>
                                </select>
                                <label htmlFor="pais">País</label>

                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2 buscador">
                                <input type="submit" className="wavws-effect waves-light btn-large yellow accent-4" value="Buscar"></input>
                            </div> 
                        </form>

                    </div>

                </div>
            </div>
        );
    }
}

Formulario.propTypes ={
    datosConsulta: PropTypes.func.isRequired
}
export default Formulario;