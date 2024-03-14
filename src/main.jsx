import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import  ParentComponent from './Parent'




//NOTE: ALASQL HAS BEEN INSTALLED TO PERFORM SQL QUERIES IN JS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <p>This is my REACT SQL tool for Emergency Department 
      Hospital Database Queries</p>

  <ParentComponent/>
  </React.StrictMode>,
)
