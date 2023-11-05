// import {ReactComponent as SearchIcon} from 'Search-icon.svg'

function index() {
  return (
    <form style={{
        minWidth: "568Px",
        display: "flex",
        borderWidth: "1px",
        borderRadius: "8px"
    }}>
        <input 
            type="text" 
            placeholder="Search an album of your choice"
            style={{
                height: "48px", 
                borderRadius:"8px 0px 0px 8px", 
                flex: 1, 
                borderWidth: "1px"}}/>
        <button 
            style={{ 
                height: "48px", 
                width: "66px", 
                borderRadius: "0px 8px 8px 0px", 
                borderWidth: "1px", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                padding: "8px"}}>
            <img src="Search-icon.svg" alt="Search Icon" style={{width: "20px", height: "20px"}} />
            {/* <SearchIcon /> */}
        </button>
    </form>
  )
}

export default index
