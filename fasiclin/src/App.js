
import './App.css';
import imagens from './imagens/fasipe-cuiaba.png'
import MaskedInput from './maskedinput';

function App() {
  return (
    <div className="App">
      <div className='template'>
        <div className='main-login'>
        <img className="img"src={imagens}alt='fasipe-cuiaba.png'/>
            <h2>Prontuário Médico</h2>
              <strong><p>CPF</p></strong>
                  <MaskedInput />
                     <strong><p>Nome completo</p></strong>
                        <strong>
                          <input disabled="text" placeholder=""></input></strong>
                            <strong>
                              <p>Telefone</p>
                              </strong>
                                <label for="telefone"></label>
                                     <input type="tel" id="telefone" className="input-padrao" 
                                       required placeholder="(00) 0000-0000"></input>
                                       <form>
                                       <input type="submit" value="Encaminhar"></input>
                                       </form>

          </div>
       </div>
    </div>
  );
}

export default App;
