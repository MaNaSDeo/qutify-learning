import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

function App() {

  return (
    <>
      <Button variant="contained" style={{"background-color": "black", color: "green"}}>Give Feedback</Button>
      <Box style={{padding:"3px", "background-color": "green"}}>
        <TextField id="outlined-basic" label="Search a song of your choice" variant="outlined" style={{width: "500px", "background-color": "white"}}/>
        <Button variant="outlined" style={{padding:"15px 0", "background-color": "white"}}><SearchIcon/></Button>
      </Box>
    </>
  )
}

export default App
