import { useState } from 'react'
import axios from 'axios';


function getAnosApartir1950() {
  const anoLimite = 1950;
  let anoReferencia = new Date().getFullYear();

  const anos = [];

  do {
    anos.push(anoReferencia);
    anoReferencia--;
  } while (anoReferencia >= anoLimite)
  return anos;
}


function App() {
  const [carregando, setCarregando] = useState(false);
  const [pais, setPais] = useState('');
  const [anoNascimento, setAnoNascimento] = useState('');

  const getPaises = () => {
    return [
      {
        descricao: 'Brasil',
        id: 'BR',
      },
      {
        descricao: 'Japão',
        id: 'JP',
      },
      {
        descricao: 'Estados Unidos',
        id: 'EUA',
      }
    ]
  }

  const handleOnClick = () => {
    setCarregando(true);


    setTimeout(() => {
      let podeComprar;
      const idade = new Date().getFullYear() - Number(anoNascimento);

      axios
      .get('http://localhost:3002/pode-comprar')
      .then((response) => {
        console.log(response)
      })
      
      if (podeComprar) {
        alert('Você pode comprar alcool');
      } else {
        alert('Você não pode comprar alcool');
      }
      setCarregando(false)
    }, 1000);
  };




  return (
    <>
      <h1>Pode Comprar?</h1>

      <h3>Verifique se você já tem idade para comprar bebida, selecione o seu ano de nascimento e seu país</h3>
      
      <br />
      <label class = 'pais' for="pais">País:</label>
      <br />
      <div class = 'pais'>
      <select class = 'selectpais' name="pais" id="pais" onChange={(event) => {
        setPais(event.target.value)
      }}>
        <option value="" disabled selected>Selecione</option>
        {
          getPaises().map(pais => (
            <option value={pais.id}>{pais.descricao}</option>
          ))
        }
      </select>
      </div>
      <br />
      <div class = 'anoNascimento' for="ano">Ano Nascimento:</div>
    
      <div class = 'selectAno'>
      <select  name="ano" onChange={(event) => {
        setAnoNascimento(event.target.value)
      }}>
        <option value="" disabled selected>Selecione</option>
        {
          getAnosApartir1950().map(ano => (
            <option value={ano}>{ano}</option>
          ))
        }
      </select>
      </div>
      <br />
      <div class = 'botaoconsulta'>
        {carregando ? (
          <button disabled>Carregando</button>
        ) : (
          <button disabled={pais === '' || anoNascimento === ''} onClick={handleOnClick}>Consultar</button>
        )}
      </div>
      </>
  );
}

export default App