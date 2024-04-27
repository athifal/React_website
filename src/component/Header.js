import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark headerbg">
	<a class="navbar-brand " href="#"> <span><img class="logo" src="images\abcd.jpg" height="40"/><strong class="logoo m-3">DEEYEF</strong></span></a> 
 <div class=""> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button></div>
  <div class="collapse navbar-collapse" id="navbar1">
    <ul class="navbar-nav ml-auto"> 
<li class="nav-item active">
Home 
</li>
<li class="nav-item ">
About us
</li>
<li class="nav-item ">
services
</li>

<li class="nav-item">
gallary</li>
<li class="nav-item">
contact</li>
    </ul>
  </div>
</nav>

  </div>

  )
}

export default Header