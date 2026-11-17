import { createBrowserRouter } from 'react-router'
import {MyHeader} from "./components/MyHeader"
import './App.css'
import {Home} from './pages/Home'
import {Movies} from './pages/Movies'
import {SearchMedia} from './pages/SearchMedia'
import {TvShows} from './pages/TvShows'


const myrouter=createBrowserRouter([
  {
    element:<MyHeader />,
    children :[
      {path:'/', element: <Home />},
      {path: '/homies', element: <Movies />},
      {path: '/tv', element: <TvShows />},
      {path: '/search', element:<SearchMedia />},
      {path: '*', element: <NotFound />}
    ]
  }
])

function App() {

  return (
    <div>
      ok
    </div>
  )
}

export default App