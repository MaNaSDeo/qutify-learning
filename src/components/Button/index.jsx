import './Button.css'
function index({children}) {
  return (
    <div>
      <button className="button">{children}</button>
    </div>
  )
}

export default index
