// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import SearchIcon from '@mui/icons-material/Search';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      {/* <Box style={{}}>
        <Button variant="contained" style={{"background-color": "#121212", color: "#34C94B", "font-weight": "900"}}>Give Feedback</Button>
      </Box>
      <Box style={{padding:"3px", "background-color": "#34C94B", margin: "10px"}}>
        <TextField id="outlined-basic" label="Search a song of your choice" variant="outlined" style={{width: "500px", "background-color": "white"}}/>
        <Button variant="outlined" style={{padding:"15px 0", "background-color": "white"}}><SearchIcon/></Button>
      </Box> */}
      <Navbar />
    </>
  )
}

export default App
