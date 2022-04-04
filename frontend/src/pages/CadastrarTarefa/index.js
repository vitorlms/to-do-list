import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import api from "../../services/api";

// interface Tarefa {
//   nome: string;
//   descricao: string;
//   finalizada: boolean;
//   prioridade: string;
// }

const CadastrarTarefa= () => {
  const [tarefa, setTarefa] = useState({nome: '', descricao: '', finalizada: false, prioridade: 'Baixa'});
  async function onSubmit() {
    console.log(tarefa)
    await api.post('cadastrar-tarefas', {
      nome: tarefa.nome,
      descricao: tarefa.descricao,
      finalizada: tarefa.finalizada,
      prioridade: tarefa.prioridade,
    })
  }

  return (
    <div className="CadastrarTarefa">
    <form>
      <TextField type={"text"} label={"nome"} onChange={setTarefa}/>
      <br/>
      <TextField type={"text"} label={"descricao"} onChange={setTarefa}/>
      <br/>
      <TextField type={"radio"} label={"finalizada"} onChange={setTarefa}/>
      <br/>
      <TextField type={"text"} label={"prioridade"} onChange={setTarefa}/>
      <br/>
      <Button onClick={onSubmit}> Cadastrar Tarefa </Button>
    </form>
    </div>
  )
}

export default CadastrarTarefa;