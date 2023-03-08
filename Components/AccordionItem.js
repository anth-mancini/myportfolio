import React from 'react';
import {Collapse} from "react-collapse"
import{AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"
import * as ReactDOM from 'react-dom';



const AccordionItem = ({open,toggle,title,desc}) => {
    return(
        <div className='pt-[10px] dark:bg-gray-900 '>
            <div className='bg-white  py-24 px-52 flex justify-between items-center cursor-pointer dark:bg-gray-900' onClick={toggle}>
                <p className='text-[22px] font-semibold text-black dark:text-white'> {title}</p>
                <div className='text-[30px] text-black dark:text-white '>
                    {open ? <AiOutlineMinus size={20}/> : <AiOutlinePlus size={20}/>}
                </div>
            </div>

            <Collapse isOpened={open}>
                <div className='px-[50px] pb-[20px] dark:bg-gray-900'>{desc}</div>
            </Collapse>
        </div>
    )
}

function replacewithBR(){
    return desc.replace(/\n/g, "<br />")
}

export default AccordionItem;