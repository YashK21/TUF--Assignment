import Form from './comp/Form'
import Display from './comp/Display'
import Home from "./comp/Home"
import { Route, Routes} from 'react-router'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/form' element={<Form/>}/>
      <Route exact path='/display' element={<Display/>}/>
    </Routes>
    </>
  )
}

export default App
