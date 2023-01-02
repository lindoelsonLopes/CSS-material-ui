import { Button, TextField } from "@mui/material";

function App() {
  return (
    <div>
      <h2>Hello, World!</h2>
      <div>
        <TextField style={{ margin: '15px 5px' }} id="outlined-basic" label="E-mail" variant="outlined" />

      </div>
        
        <Button style={{ margin: '15px 5px' }} variant="contained">Enviar</Button>

    </div>
  );
}

export default App;
