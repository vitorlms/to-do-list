import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import api from "../../services/api";

const CadastrarTarefa= () => {
  const [tarefa, setTarefa] = useState({
    nome: '', 
    descricao: '', 
    finalizada: false, 
    prioridade: 'Baixa'});

    function onChangeNome(event) {
      tarefa.nome = event.target.value;
      setTarefa({ ...tarefa });
    }

    function onChangeDescricao(event) {
      tarefa.nome = event.target.value;
      setTarefa({ ...tarefa });
    }

    function onChangeFinalizada(event) {
      tarefa.nome = event.target.value;
      setTarefa({ ...tarefa });
    }

    function onChangePrioridade(event) {
      tarefa.nome = event.target.value;
      setTarefa({ ...tarefa });
    }

  async function onSubmit() {
    console.log(tarefa)
    await api.post('tarefa', {
      nome: tarefa.nome,
      descricao: tarefa.descricao,
      finalizada: tarefa.finalizada,
      prioridade: tarefa.prioridade,
    })
  }

  return (
    <div className="CadastrarTarefa">
    <form>
      <TextField type={"text"} label={"nome"} onChange={onChangeNome}/>
      <br/>
      <TextField type={"text"} label={"descricao"} onChange={onChangeDescricao}/>
      <br/>
      <TextField type={"radio"} label={"finalizada"} onChange={onChangeFinalizada}/>
      <br/>
      <TextField type={"text"} label={"prioridade"} onChange={onChangePrioridade}/>
      <br/>
      <Button onClick={onSubmit}> Cadastrar Tarefa </Button>
    </form>
    </div>
  )
}

export default CadastrarTarefa;