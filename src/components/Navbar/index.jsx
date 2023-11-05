import SearchBox from '../SearchBox';
import Button from '../Button';
import './Navbar.css';

function index() {
  return (
    <div className='navbar'>
      <img src="qtifyLogo.png" alt="QTify Logo" />
      <SearchBox />
      <Button>Give Feedback</Button>
    </div>
  )
}

export default index
