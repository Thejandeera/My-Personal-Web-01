import Sidebar from '../sidebar/Sidebar.jsx'
import './Navbar.scss'
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <div className="navbar" >
        <Sidebar/>
        <div className="wrapper" >
            <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} >Thejandeera Sandeepana</motion.span>
            <div className="social" >
                <a href='https://github.com/Thejandeera' target='_blank'><img  src="/github.png" alt="" /></a>
                <a href='https://www.linkedin.com/in/thejandeera-sandeepana-6baa17208/' target='_blank' ><img  src="/linkedin.png" alt="" /></a>
                <a href="https://www.facebook.com/dasun.bob.7?mibextid=ZbWKwL" target="_blank"><img  src="/facebook.png" alt="" /></a>
                <a href="https://thejandeerasandeepana2.netlify.app/" target='_blank'><img  src="/dribbble.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar