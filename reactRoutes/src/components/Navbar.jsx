import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Navegacao = styled.nav`
   padding: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #99FFFF     ;
   
   ul {
       list-style: none;
       display: flex;
       gap: 20px; /* Adiciona um espaço entre os itens da lista */
       padding: 0;
       margin: 0;
   }

   li {
       font-size: 1.2rem; /* Aumenta o tamanho da fonte */
   }

   a {
       color: black; /* Cor do texto do link */
       text-decoration: none; /* Remove o sublinhado dos links */
   }

   a:hover {
       text-decoration: underline; /* Adiciona sublinhado ao passar o mouse */
   }
`;

const Navbar = () => {
    return (
        <Navegacao>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </Navegacao>
    );
}

export default Navbar;
