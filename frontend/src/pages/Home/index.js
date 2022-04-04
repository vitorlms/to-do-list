import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { AppBar } from "@mui/material";
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div align={"center"}>
      <AppBar>
            <h1>Home</h1>
      </AppBar>

      <Paper style={{marginTop: "150px"}}>
        <MenuList>
          <MenuItem>
            <NavLink to="/listar-tarefas">
              Listar tarefas
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/cadastrar-membro">
              Cadastrar membro
            </NavLink>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  )
}

export default Home;