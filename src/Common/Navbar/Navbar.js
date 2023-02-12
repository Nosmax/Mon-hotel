import React, {useState} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [click, setclick] = useState(false)

  const handleClick = ()  =>  setclick(!click)
  const closeMobileMenu = ()  =>  setclick(false)
  return (
    <>
        <nav className=' navbar'>
          <div className='container flex_space'>
                <div className='meni-icon' onClick={handleClick}>
                    <i className={click? 'fas fa-times' :"fas fa-bars"}></i>
                </div>
                <ul className={click? 'nav-menu active':"nav-menu"}>
                    <li>
                      <Link to ='/ ' onClick={closeMobileMenu }>Accueil</Link>
                    </li>
                    <li>
                      <Link to ='/about' onClick={closeMobileMenu }>A propos</Link>
                    </li>
                    <li>
                      <Link to ='/gallery'onClick={closeMobileMenu }>Galerie</Link>
                    </li>
                    <li>
                      <Link to ='/destination'onClick={closeMobileMenu }>Destination</Link>
                    </li>
                    <li>
                      <Link to ='/blog' onClick={closeMobileMenu }>Blog</Link>
                    </li>
                    <li>
                      <Link to ='/testimonail'onClick={closeMobileMenu }>Testimonail</Link>
                    </li>
                    <li>
                      <Link to ='/contact'onClick={closeMobileMenu }>Contactez-nous</Link>
                    </li>
                </ul>
                <div className='login-area flex '>

                <li>
                    <Link to ='/sign-in'>
                    <i className='far fa-chevron-right'>Inscription</i>
                    </Link>                    
                </li>
                <li>
                    <Link to ='/register'>
                    <i className='far fa-chevron-right'>Connexion</i>
                    </Link>                    
                </li>
                <li>
                    <Link to ='/contact'>
                    <button className="primary-btn">?Question</button>
                    </Link>                    
                </li>

                </div>
          </div>
        </nav>
        <header>
        
        <div className='container flex_space'>
                <div className='logo'>
                  <img src="img/lo.png " alt='Logo'/>
                </div> 
                <div className='contact  flex_space'>
                <div className='box flex_space'>
                    <div className='icons'> 
                    <i className='far fa-clock'></i>
                    </div> 
                    <div className='text'>
                    <h4>Heure d'ouverture</h4>
                    <Link to ='/contact'>Lundi-Dimanche: 24/24</Link>
                    </div> 
                </div> 
                <div className='box  flex_space'>
                    <div className='icons'>
                    <i className='fas fa-phone-volume'></i>
                    </div> 
                    <div className='text'>
                    <h4>Appellez-Nous</h4>
                    <Link to ='/contact'>+22961620147</Link>
                    </div> 
                </div> 
                <div className='box flex_space'>
                    <div className='icons'>
                    <i className='far fa-envelope'></i>
                    </div> 
                    <div className='text'>
                    <h4>Mail</h4>
                    <Link to ='/contact'>omr@gmail.com</Link>
                    </div> 
                </div> 
        </div> 
        </div> 
        
          

        </header>
    </> 
  )
}

export default Navbar