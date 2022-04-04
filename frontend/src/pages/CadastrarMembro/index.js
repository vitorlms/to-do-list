import { Button } from "@mui/material";
import { AppBar } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import api from "../../services/api";

const CadastrarMembro= () => {
  const [membro, setMembro] = useState({nome: '', email: ''});

  function onChangeNome(event) {
    membro.nome = event.target.value;
    setMembro({ ...membro });
  }

  function onChangeEmail(event) {
    membro.email = event.target.value;
    setMembro({ ...membro });
  }

  async function onSubmit() {
    await api.post('membro', {
      nome: membro.nome,
      descricao: membro.email,
    })
  }

  return (
    <div className="CadastrarMembro" align={"center"}>
        <AppBar>
          <h1>Cadastrar Membro</h1>
        </AppBar>

        <form style={{marginTop: "150px"}}>
          <TextField style={{margin: "5px"}} type={"text"} label={"nome"} onChange={onChangeNome}/>
          <br/>
          <TextField style={{margin: "5px"}} type={"email"} label={"email"} onChange={onChangeEmail}/>
          <br/>
          <Button onClick={onSubmit} variant={"contained"}> Cadastrar Membro </Button>
        </form>
    </div>
  )
}

export default CadastrarMembro;