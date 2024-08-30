
import { useSelector,useDispatch } from "react-redux"
import { increment_count,decrement_count } from "../Redux/Count/CountSlice"
const Counter = () => {
const dispatch=useDispatch()
const count=useSelector(state=>state.count.value)
const handleIncrement=()=>{
  dispatch(increment_count())
}
const handleDecrement=()=>{
  dispatch(decrement_count())
}

  return (
    <div>
      <h2>counter - {count}</h2>
      <button onClick={handleIncrement}>increase</button>
      <button onClick={handleDecrement}>Decrease</button>
    </div>
  )
}

export default Counter
