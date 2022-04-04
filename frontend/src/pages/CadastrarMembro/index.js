import { Button } from "@mui/material";
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
    <div className="CadastrarMembro">
    <form>
      <TextField type={"text"} label={"nome"} onChange={onChangeNome}/>
      <br/>
      <TextField type={"email"} label={"email"} onChange={onChangeEmail}/>
      <br/>
      <Button onClick={onSubmit}> Cadastrar Membro </Button>
    </form>
    </div>
  )
}

export default CadastrarMembro;