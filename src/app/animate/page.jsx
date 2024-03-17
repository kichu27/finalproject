"use client"
import {React, useState , useEffect} from 'react'
import ani from "@/app/animate/page.module.css"
import { useAnimate, stagger, motion } from "framer-motion";



export default function Page() {

    const [open, setOpen] = useState(false);
        const [scope, animate] = useAnimate();
        const staggerList = stagger(0.1, { startDelay: 0.25 });

    
    
useEffect(() => {
    animate(
    "ul",
    {
        width: open ? 150 : 0,
        height: open ? 200 : 0,
        opacity: open ? 1 : 0
    },
    {
        type: "spring",
        bounce: 0,
        duration: 0.4
    }
    );
    animate(
    "a",
    open? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.3, x: -50 },
    {
        duration: 0.4,
        delay: open ? staggerList : 0
    }
    );
}, [open , animate ,staggerList]);

  


return (



    <div ref={scope} className={ani.maindiv}>

<div className={ani.header}> <motion.button  onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }} className={ani.but} > PROFILE </motion.button> <ul className={ani.UL}>

<motion.a className={ani.LI} href="/profile"> ITEM  </motion.a>
<motion.a  className={ani.LI} href="/profile"> ITEM  </motion.a>
<motion.a className={ani.LI}  href="/profile"> ITEM  </motion.a>
<motion.a  className={ani.LI} href="/profile"> ITEM  </motion.a>

</ul></div>




    </div>

)
}
    