import './Hero.scss'
import { motion } from 'framer-motion'

const Hero = () => {

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            }
        }
    }
    const sliderVariants = {
        initial: {
            x: 0,
            
        },
        animate: {
            x: "-220%",
            
            transition: {
               repeat:Infinity,
               repeatType:"mirror",
                duration:20,
            },
        },
    }
;
    const scrollButtonVariants = {
        initial: {
            opacity: 0,
            y: 0
        },
        animate: {
            opacity: 1,
            y: [0, 10, 0],
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Thejandeera Sandeepana</motion.h2>
                    <motion.h1 variants={textVariants}>Undergraduate And Fullstack Web Developer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}>See The Latest Works</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={scrollButtonVariants} initial="initial" animate="animate" src="/scroll.png" alt="Scroll Indicator" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate" >
                THEJANDEERA SANDEEPANA
            </motion.div>
            <div className="imageContainer">
                <img src="/thejan.png" alt="Hero" />
            </div>
        </div>
    )
}

export default Hero
