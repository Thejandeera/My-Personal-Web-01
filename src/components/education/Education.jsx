import './Education.scss'
import { motion,useInView } from 'framer-motion';
import { useRef } from 'react';

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};

const Education = () => {
    const ref = useRef()
    const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div className="education"  variants={variants}
     initial="initial" 
     //animate="animate"
     //whileInView="animate"
     ref={ref}
     //isInView &&
     animate={isInView && "animate"}>
        <motion.div className="textContainer"  variants={variants}>
            <p>My learning journey is an ongoing exploration
                <br/>  of endless possibilities.</p><hr/>
        </motion.div>
        <motion.div className="titleContainer"  variants={variants}>
            <div className="title" >
                 <img src="/people.webp"/>
                 <h1><motion.b whileHover={{color:"orange"}}>Basic</motion.b> Idea</h1>
                </div>
            <div className="title" >
                 <h1><motion.b whileHover={{color:"orange"}}>About</motion.b> Me</h1>
                 <button>WHO AM I?</button>
                </div>
        </motion.div>
        <motion.div className="listContainer"  variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray" , color:"black"}} >
                <h2>School</h2>
                <img src="/school.png"/>
                <p>
                 B/Haliela Central College <br/>
                 B/Bandarawela Central College
                </p>
                <button href="https://www.linkedin.com/in/thejandeera-sandeepana-6baa17208/" target="_blank" >Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray" , color:"black"}} >
                <h2>University</h2>
                <img src="/university.png" className="images" />
                <p>
                B.Sc(hons) Computer Science in SLIIT
                </p>
                <button target="_blank">Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray" , color:"black"}} >
                <h2>Extra Curricular</h2>
                <img src="/extra.png"/>
                <p>
                Member of IEEE<br/>
                Member of MS club
                </p>
                <button >Go</button>
            </motion.div>
            {/* <motion.div className="box" whileHover={{background:"lightgray" , color:"black"}} >
                <h2>Edu1</h2>
                <p>
                This is the paragraph    
                </p>
                <button>Go</button>
            </motion.div> */}
        </motion.div>
    </motion.div>
  )
}

export default Education