import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {DagoMolina} from './DagoMolina.js';
import { Menu } from './Menu.js';
import { Artista } from './Artista.js';
import { Foter } from './Foter.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

//let titulo = <h1 className='text-center'>Tengo Gripa</h1>
//root.render(titulo)

root.render(
  <div>
    <Menu></Menu>
    <img src='assets/Imagenes/500x500.jpg'></img>
    <img src='assets/Imagenes/640x640.jpg'></img>
    <img src='assets/Imagenes/38567630_800_800.jpg'></img>
    <Artista></Artista>
    <Foter></Foter>
  </div>)