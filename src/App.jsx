import { useState } from 'react'


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

  function handleOnClick() {
    let podeComprar;
    const idade = new Date().getFullYear() - Number(anoNascimento);

    switch(pais) {
      case 'BR':
        podeComprar = idade >= 18;
        break;
      case 'JP':
        podeComprar = idade >= 19;
        break;
      case 'EUA':
        podeComprar = idade >= 21;
        break;
      default:
        podeComprar = false;
        break;
    }
    if(podeComprar) {
      alert('Você pode comprar alcool');
    } else {
      alert('Você não pode comprar alcool');
    }
  }


  return (
    <>
      <h1>Pode Comprar?</h1>
      
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
      <label class = 'anoNascimento' for="ano">Ano Nascimento:</label>
      <br />
      <div class = 'Ano'>
      <select name="ano" id="ano" onChange={(event) => {
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
      <button disabled={pais === '' || anoNascimento === ''} onClick={handleOnClick}>Consultar</button>
      </div>
    </>
  )
}

export default App


