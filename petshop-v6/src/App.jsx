import React from 'react'
import './assets/css/base/base.css'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./paginas/Home"
import Sobre from "./paginas/Sobre"
import Pagina404 from "./paginas/Pagina404"
import Cabecalho from "./components/Cabecalho"
import Post from './paginas/post'
import Categoria from './paginas/Categoria'

function App() {
  
  return (
  <>
    <Router>
      <Cabecalho/>
      <Routes>
        <Route path="/" exact key={"home"} element={<Home/>}/>
        <Route path="/sobre" exact  key={"sobre"} element={<Sobre/> }/> 
        <Route path="/categoria/:id" exact  key={"categoria"} element={<Categoria/> }>
          <Route path="/:subcategoria" exact  key={"subcategoria"} element={<Categoria/> }/>
        </Route> 
        <Route path="/posts/:id" exact  key={"post"} element={<Post/> }/> 
        <Route  path="*" element={<Pagina404/>} key={"notFound"}/> 
      </Routes>
    </Router>
  </>
  )
}

export default App
