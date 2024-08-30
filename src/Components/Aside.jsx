
import { useSelector,useDispatch } from "react-redux"
import { change_color } from "../Redux/Color/ColorSlice"
import randomColor from 'randomcolor'
const Aside = () => {
const color=useSelector(state=>state.color.value)
const dispatch=useDispatch()
const handleColor=()=>{
  dispatch(change_color({
    color:randomColor()
  })   
  )
}
  return (
    <div>
      <h3 style={{color}}>change colour</h3>
      <button onClick={handleColor}>Change</button>
    </div>
  )
}

export default Aside
