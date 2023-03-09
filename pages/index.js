import Head from 'next/head';
import{BsFillMoonStarsFill} from 'react-icons/bs';
import{AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Image from "next/image";
import profilepic from "../public/profilepic.jpg";
import {useState} from "react";
import {Fragment} from "react";
import AccordionItem from '@/Components/AccordionItem';


export default function Home() {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
      if(open===index){
        return setOpen(null)
      }

      setOpen(index)
  }

  const accordionData= [
    {
      title: "Education",
      desc: <font size="+3">University Of Windsor
            <br></br>
            <font size="+1" >January 2020 - August 2023</font>
            <br></br>
            <font size="+1"> BSc Computer Science (Honours Applied Computing)</font> 
            <br></br>
              <font size ="+1"> - Dean's List 2020-2022</font>
              <br></br>
              <br></br>
              <font size="+3">St Clair College</font>
            <br></br>
            <font size="+1" >September 2017 - April 2019</font>
            <br></br>
            <font size="+1"> ElectroMechanical Engineering Technician - Diploma</font>
             </font>
             
            
      ,
    },
    {
      title: "Skills",
      desc: <font size="+2"> Programming:
            <br></br> 
            <font size="+1"> C, C#, C++, Java, Python, PL/SQL, PLC</font>
            <br></br>
            <br></br>
            <font size="+2"> Web: </font>
            <br></br>
            <font size="+1"> HTML, CSS, Bootstrap, ReactJs, Tailwind, JavaScript </font>
            <br></br>
            <br></br>
            <font size="+2"> Technologies: </font>
            <br></br>
            <font size="+1"> Git, Linux </font>
            </font>
    },
    {
      title: "Awards",
      desc: <font size="+1"> Dean's List 2020-2022
            <br></br> 
            <font size="+1"> Certificate of Recognition (Awarded by: Ford Motor Company)</font>
            </font>
    },
    
    
  ]
  const[darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Anthony Mancini Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 h-full w-full dark:bg-gray-900">
        <section className="min-h-screen dark:bg-gray-900">
          <nav className="py-10 mb-12 flex justify-between dark: text-white dark:bg-gray-900">
            <h1 className="text-xl font-extralight  text-black dark:text-white">Developed By Anthony Mancini</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl fill-gray-900 dark:fill-white"/></li>
              <li><a className="bg-gradient-to-r from-green-700 to-green-500  text-white px-4 py-2 rounded-md ml-8"href="./ManciniResume.pdf">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10 font-mono'>
            <h2 className='text-4xl py-2 text-orange-400 font-medium '>Anthony Mancini</h2>
            <h3 className='text-2xl py-2 text-gray-900 dark:text-yellow-100'>Software Developer.</h3>
            <p className='text-md py-5 leading-5 text-zinc-700 dark:text-gray-400 '>Computer Science student experienced in software developing with 4+ years in the automotive industry. Highly competitive, passionate, organized employee equipped
              for fast-paced work and determined to achieve success through attention to detail and effecient results. Seeking to leverage my skills while utilizing a broad educational background 
              with excellent analytical, technical, and programming skills to thrive as a software developer. </p>
          </div> 
          <div className='flex justify-center'>
            <a href="mailto: mancini5@uwindsor.ca">
            <button class=" bg-green-500 hover:bg-green-600 text-black  flex-row font-bold py-2 px-6 rounded-full">
              Lets Chat!
            </button>
            </a>
          </div>
          <div className='text-5xl flex justify-center gap-24 py-7'>
            <a href='https://www.linkedin.com/in/anthony-mancini-b366701b5/'>
              <AiFillLinkedin className='fill-black dark:fill-white'/>
            </a>
            <a href='https://github.com/anth-mancini'>
              <AiFillGithub className='fill-black dark:fill-white'/>
            </a>
          </div>
          <div className='relative bg-gradient-to-b from-orange-400 rounded-t-xl mx-auto w-80 h-60 mt-14'>
            <Image src={profilepic}  objectFit='cover' />
          </div>
        </section>
        <section className='bg-white dark:bg-gray-900 max-h-screen  grid place-items-center text-black dark:text-white'>
          <div className='px-20 max-w-fit dark:bg-gray-900 '>
            {accordionData.map((data,index) =>{
              return <AccordionItem 
              key={index} 
              open ={index===open} 
              title={data.title} 
              desc={data.desc} toggle={()=>toggle(index)}/>
            })}

          </div>
        </section>
            <footer className='p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'>
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="" class="hover:underline">AnthonyMancini™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">Resume</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/anthony-mancini-b366701b5/" class="mr-4 hover:underline md:mr-6">LinkedIn</a>
        </li>
        <li>
            <a href="https://github.com/anth-mancini" class="mr-4 hover:underline md:mr-6">GitHub</a>
        </li>
        <li>
            <a href="mailto: mancini5@uwindsor.ca" class="hover:underline">Contact</a>
        </li>
    </ul>

            </footer>
      </main>
    </div>
  )
}
