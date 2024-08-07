import Head from 'next/head';
import{BsFillMoonStarsFill} from 'react-icons/bs';
import{RiMoonFoggyLine} from 'react-icons/ri'
import{IoMdFunnel} from 'react-icons/io'
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
            <font size="+1"> HTML, CSS, Bootstrap, ReactJs, JavaScript </font>
            <br></br>
            <br></br>
            <font size="+2"> Technologies: </font>
            <br></br>
            <font size="+1"> Git, Linux, Angular Boostrap, NodeJs, MongoDB, Hadoop </font>
            </font>
    },
    {
      title: "Awards",
      desc: <font size="+1">  University of Windsor: Dean's List 2020-2022
            <br></br> 
            <font size="+1"> Ford Motor Company: Certificate of Recognition</font>
            </font>
    },
    
    
  ]
  const[darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>anthony-mancini</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="home_house_icon_.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 h-full w-full dark:bg-gray-900">
        <section className="min-h-screen dark:bg-gray-900">
          <nav className="py-10 mb-12 flex justify-between dark: text-white dark:bg-gray-900">
            <h1 className="text-xl font-extralight  text-black dark:text-white">My Portfolio</h1>
            <ul className="flex items-center">
              <li><RiMoonFoggyLine onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-4xl fill-gray-900 dark:fill-white"/></li>
              <li><a className="bg-gradient-to-r from-green-700 to-green-500  text-white px-4 py-2 rounded-md ml-8"href="./ResumeApr.pdf">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10 font-mono'>
            <h2 className='text-4xl py-2 text-orange-400 font-medium '>Anthony Mancini</h2>
            <h3 className='text-2xl py-2 text-gray-900 dark:text-yellow-100'>Automation Engineer.</h3>
            <p className='text-md py-5 leading-5 text-zinc-700 dark:text-gray-400 '>Automation Engineer experienced in software developing with 5+ years in the automotive industry. Highly competitive, passionate, organized employee equipped
              for fast-paced work and determined to achieve success through attention to detail and efficient results. Seeking to leverage my skills while utilizing a broad educational background 
              with excellent analytical, technical, and programming skills. </p>
          </div> 
          <div className='flex justify-center'>
            <a href="mailto: mancini5@uwindsor.ca">
            <button class=" bg-green-500 hover:bg-green-600 text-black flex-row font-bold py-2 px-6 rounded-full">
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
          <div className='relative bg-gradient-to-b from-orange-400 rounded-full mx-auto w-60 h-80 mt-10 mb-20'>
            <Image src={profilepic}  objectFit='cover' />
          </div>
        </section>
  <div className='text-left p-10 font-thin mx-12'>
    <h1 className='text-4xl py-2 text-gray-900 dark:text-yellow-100'>Projects.</h1>

  </div>
  <div class="grid lg:grid-cols-3 mb-10 ml-20 gap-12 ">
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="https://gearheadmarketplace.herokuapp.com/">
        <img class="rounded-t-lg" src="/gearheadmarketplaceimage.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="https://gearheadmarketplace.herokuapp.com/">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gearhead Marketplace</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A user friendly website capable of connecting clients within North America to fufill their automotive needs.</p>
        <a href="https://gearheadmarketplace.herokuapp.com/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Visit Site
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <video src='cyberfpsvid.mp4' autoPlay controls></video>
    </a>
    <div class="p-5">
        <a href="https://github.com/anth-mancini/CyberFPS">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cyber FPS</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A capture the flag game featuring up to 8 person multiplayer game mode.</p>
        <a href="https://github.com/anth-mancini/CyberFPS" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View Scripts
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <video src='fitnessappvid.mp4' autoPlay controls></video>
    </a>
    <div class="p-5">
        <a href="https://github.com/anth-mancini/FitnessApp">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fitness Android App</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">An android application capable of tracking daily calories and general fitness advancements.</p>
        <a href="https://github.com/anth-mancini/FitnessApp" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View Code
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

  
  </div>     
  


          
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
            <a href="./ResumeApr.pdf" class="mr-4 hover:underline md:mr-6 ">Resume</a>
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
