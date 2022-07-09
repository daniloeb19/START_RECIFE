const express = require('express');

const app = express();

app.use(express.json());

const porta = 8080;

const dadosPC = [];

app.post("/enviarPC", (req, res) => {
    const { modelo, marca, processador, memoria, monitor, placaM } = req.body;

    dadosPC.push({
        modelo: modelo,
        marca: marca,
        processador: processador,
        memoria: memoria,
        monitor: monitor,
        placaM: placaM

    });

    return res.send('Computador Cadastrado Com Sucesso!')

});

app.get("/listarPC", (req, res) => {
    return res.send(dadosPC);

});

app.get("/listarmarca/:modelo", (req, res) => {
    const { modelo } = req.params;
    
    const retornoBusca = [];
    
    dadosPC.forEach(idaJson => {
        if(idaJson.modelo==modelo){
            retornoBusca.push(idaJson);
        }else{
            console.log("Não encontrei registro");
        }
    });
    return res.send(retornoBusca);
});

app.listen(porta, () => {
    console.log("Servidor está funcionando na porta: " + porta);
});