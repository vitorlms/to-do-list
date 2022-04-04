import { Button } from "@mui/material";
import { TextField } from "@mui/material";

const EditarTarefa= () => {
  return (
    <div className="EditarTarefa">
    <form>
      <TextField type={"text"} label={"nome"}/>
      <br/>
      <TextField type={"text"} label={"descricao"}/>
      <br/>
      <TextField type={"radio"} label={"finalizada"}/>
      <br/>
      <TextField type={"text"} label={"prioridade"}/>
      <br/>
      <Button> Editar Tarefa </Button>
    </form>
    </div>
  )
}

export default EditarTarefa;