import Header from "./components/Header";
import styled from '@emotion/styled';
import Formulario from "./components/Formulario";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;

`;
const ContenedorForm = styled.div`
  background-color: #FFF;
  padding: 3rem;

`;


function App() {
  return (
    
    
    <div className="App">
      <Contenedor>

     <Header titulo="Cotizador de Seguros" />

          <ContenedorForm>
          <Formulario />
          </ContenedorForm> 
      </Contenedor>
    </div>
  );
}

export default App;
