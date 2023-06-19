import React, {Component} from 'react';
import Buscador from "./componentes/Buscador";
class App extends Component {
    render() {
        return (
            <div className="App container">
                <div className= "jumbotron">
                    <p className="lead text-center"> Buscador de imagenes</p>
                    <Buscador/>

            </div>
            </div>

        );
    }
}
export default App;
