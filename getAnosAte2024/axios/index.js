import axios from 'axios';

axios({
    method: 'get',
    url: 'http://localhost:3002/pode-comprar',
    data: {
      anoNascimento: "2006",
      pais: 'BR',
    }
  }).then((response) => {
    console.log(response.data);
  });