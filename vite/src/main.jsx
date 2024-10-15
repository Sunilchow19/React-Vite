import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Head from './heading';
import Name from './name';
import Career from './career';
import Skill from './skills';
import Hobbies from './hobbies';
import Declaration from './declaration';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Head/>
    <Name/>
    <Career/>
    <Skill/>
    <Hobbies/>
    <Declaration/>
  </StrictMode>,
)
