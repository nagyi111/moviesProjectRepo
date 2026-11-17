
import { createBrowserRouter, RouterProvider } from 'react-router'
import { MyHeader } from '../components/MyHeader'
import { Home } from '../pages/Home'
import { Movies } from '../pages/Movies'
import { SearchMedia } from '../pages/SearchMedia'
import { TvShows } from '../pages/TvShows'
import { NotFound } from '../pages/NotFound'
import './App.css'

const myrouter = createBrowserRouter([
  {
    element: <MyHeader />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/movies', element: <Movies /> },
      { path: '/tv', element: <TvShows /> },
      { path: '/search', element: <SearchMedia /> },
      { path: '*', element: <NotFound /> }
    ]
  }
])

function App() {
  return <RouterProvider router={myrouter} />
}

export default App
