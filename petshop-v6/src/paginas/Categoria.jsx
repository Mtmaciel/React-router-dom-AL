import React,{useState,useEffect} from 'react'
import { Link, Route, Routes, useLocation, Router, useParams } from 'react-router-dom';
import { busca } from '../api/api';
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias'
import ListaPosts from '../components/ListaPosts';
import SubCategoria from './SubCategoria';

const Categoria = () => {

    const [subCategs,setSubCategs] = useState();
    const {id} = useParams();
    const {pathname:path} = useLocation();

    useEffect(() => {
        busca(`/categorias/${id}`,(categoria)=>setSubCategs(categoria.subcategorias));
    }, [id]);

    return(
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <ListaCategorias/>
            <ul className="lista-categorias container flex">
                {subCategs?.map(c=>
                    <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}  key={c}>
                        <Link to={`/${path}/${c}`}>
                            {c}
                        </Link>
                    </li>
                )}
            </ul>

                
                <Routes>
                    <Route path={`${path}/:subcategoria`} exact key={"sucatego"} element={<SubCategoria/>}/>

                    <Route path={`${path}/`} exact  key={"lista"} element={<ListaPosts url={`/posts?categoria=${id}`}/>}/> 
                </Routes>
            <ListaPosts url={`/posts?categoria=${id}`}/>
            
            
        </>
    )
}

export default Categoria