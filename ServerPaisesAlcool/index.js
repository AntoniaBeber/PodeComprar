import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {parseISO, subYears, isBefore} from 'date-fns';
import getAge from 'get-age';

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post("/pode-comprar-alcool", (req, res) => {
    const { dataNascimento, pais } = req.body;

    if (!dataNascimento || !pais) {
        return res.status(400).json({ error: "Data de nascimento e país são obrigatórios" });
    }    

    let idadeMinima = 0;

    switch (pais) {
        case 'BR':
            idadeMinima = 18;
            break;
        case 'JP':
            idadeMinima = 19;
            break;
        case 'EUA':
            idadeMinima = 21;
            break;
        default:
            return res.status(400).json({ error: "País não suportado" });
    }
    
    const podeComprarBebida = getAge(dataNascimento) >= idadeMinima;

    res.json({ podeComprarBebida });
});

app.listen(3002, () => console.log('Rodando em http://localhost:3002'));