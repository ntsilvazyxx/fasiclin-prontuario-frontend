
import './App.css';
import imagens from './imagens/fasipe-cuiaba.png'
import MaskedInput from './maskedinput';

function App() {
  return (
    <div className="App">
      <div className='template'>
        <form action='' method='post'>
          <div className='main-login'>
            <img className="img" src={imagens} alt='fasipe-cuiaba.png' />
            <div className='left-login'>
              <div className=''>
                <p>Id do cliente</p>
                <input placeholder=""></input>
              </div>
              <div className=''>
                <p>Id Especialidade</p>
                <input placeholder=""></input>
              </div>
              <div className=''>
                <p>Id Procedimento</p>
                <input placeholder=""></input>
              </div>
            </div>
            <div className='right-login'>
              <div>
                <p>Id Profissional de Saúde</p>
                <input placeholder=""></input>
              </div>
              <div>
                <p>Autenticado</p>
                <input placeholder=""></input>
              </div>
              <div>
                <p>Link Docs/Ris/Pacs</p>
                <input placeholder=""></input>
              </div>
            </div>
            <div className='text-login'>
              <textarea id="story" name="story"
                rows="5" cols="33" value="Descrição do Prontuario">
              </textarea>
            </div>
            <input id="date" type="date"></input>
            <div class="container-button">
              <button type='submit' class="button-success button-large">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
