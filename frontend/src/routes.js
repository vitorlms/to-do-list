import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastrarMembro from './pages/CadastrarMembro';
import CadastrarTarefa from './pages/CadastrarTarefa';
import EditarTarefa from './pages/EditarTarefa';
import Home from './pages/Home';
import ListarTarefas from './pages/ListarTarefas';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={''} element={<Home />} /> */}
        <Route path={'cadastrar-tarefa'} element={<CadastrarTarefa/>}/>
        <Route path={'editar-tarefa'} element={<EditarTarefa/>}/>
        <Route path={'cadastrar-membro'} element={<CadastrarMembro/>}/>
        <Route path={'listar-tarefas'} element={<ListarTarefas/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;