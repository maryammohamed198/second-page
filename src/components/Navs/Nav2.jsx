import React from 'react'
import './Nave.css';

export function Nav2 (){
  return (

<div className='nav2'>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="page1">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
  </div>
</div>
</nav>
</div>
  )
}



