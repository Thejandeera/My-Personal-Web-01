import './Projects.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const items = [
    {
      id: 1,
      title: "Project Atcs",
      img: "/atcs.png",
      desc: "The Automated Vehicle Monitoring System is an IoT project for vehicle environment and security control. It features temperature regulation, motion-based security alerts, and GPS tracking. Managed via a React.js web app, it offers real-time data and control. Powered by a rechargeable battery, future enhancements include solar power and advanced security.",
      link:"https://lnkd.in/gbgiDE6F",
    },
   
    {
      id: 2,
      title: "Personal Web",
      img: "/myweb.png",
      desc: "I'm excited to announce my personal website launch! 🌐✨ It's currently on localhost, but you can preview it on GitHub. The site showcases my professional journey, projects, and aspirations with dynamic features and easy navigation. Your feedback is invaluable as I continue to grow.",
      link:"https://lnkd.in/gbgiDE6F",
    },
    {
      id: 3,
      title: "Chat Web",
      img: "/chat.png",
      desc: "  Excited to share my latest project! Built a chat web app from scratch using Express.js, MongoDB, Vite, and Tailwind CSS. Check it out and let me know what you think!",
      link:"https://www.linkedin.com/posts/thejandeera-sandeepana-6baa17208_im-happy-to-share-this-chat-web-project-activity-7219626097158545409-cSrN?utm_source=share&utm_medium=member_androidp",
    },
    
  ];

  const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ 
        target: ref,
        //offset:["start start", "end start"] 
     });

    const y = useTransform(scrollYProgress,[0,1],[-300,300]);


    return (
      <section  >
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}} >
                <h2 >{item.title}</h2>
                <p>{item.desc}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <button>See Demo</button>
                </a>
            </motion.div>
            </div>
        </div>
      </section>
    );
  };

  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="project" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
