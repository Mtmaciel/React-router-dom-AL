import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ListaPosts from '../components/ListaPosts';

const SubCategoria = () =>{
    const [post,setPost] = useState({});

    const {subcategoria} = useParams();

    return(<>
         <ListaPosts url={`/posts?subcategoria=${subcategoria}`}/> 
    </>)

}

export default SubCategoria;