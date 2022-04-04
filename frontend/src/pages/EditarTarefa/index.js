import { Button } from "@mui/material";
import { AppBar } from "@mui/material";
import { Switch } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import { FormControl } from "@mui/material";
import api from "../../services/api";

const EditarTarefa= () => {
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
      tarefa.descricao = event.target.value;
      setTarefa({ ...tarefa });
    }

    function onChangeFinalizada(event) {
      tarefa.finalizada = !tarefa.finalizada;
      setTarefa({ ...tarefa });
    }

    function onChangePrioridade(event) {
      tarefa.prioridade = event.target.value;
      setTarefa({ ...tarefa });
    }

  async function onSubmit() {
    await api.patch('tarefa', {
      nome: tarefa.nome,
      descricao: tarefa.descricao,
      finalizada: tarefa.finalizada,
      prioridade: tarefa.prioridade,
    })
  }

  return (
    <div className="EditarTarefa" align={"center"}>
        <AppBar>
          <h1>Editar Tarefa</h1>
        </AppBar>

        <form style={{marginTop: "150px"}}>
      <TextField style={{margin: "5px"}} type={"text"} label={"nome"} onChange={onChangeNome}/>
      <br/>
      <TextField style={{margin: "5px"}} type={"text"} label={"descricao"} onChange={onChangeDescricao}/>
      <br/>
      <FormControlLabel control={<Switch/>} label={"finalizada"} onChange={onChangeFinalizada}/>
      <br/>
      <FormControl style={{margin: "5px"}}>
        <InputLabel>Prioridade</InputLabel>
        <Select
          value={tarefa.prioridade}
          label="Prioridade"
          onChange={onChangePrioridade}
        >
          <MenuItem value={"Baixa"}>Baixa</MenuItem>
          <MenuItem value={"Média"}>Média</MenuItem>
          <MenuItem value={"Alta"}>Alta</MenuItem>
        </Select>
      </FormControl>
      <br/>
      <Button onClick={onSubmit} variant={"contained"}> Editar Tarefa </Button>
    </form>
    </div>
  )
}

export default EditarTarefa;