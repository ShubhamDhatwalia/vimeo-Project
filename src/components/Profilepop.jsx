import React from 'react'
import { CgProfile } from "react-icons/cg";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiSlideshow3Line } from "react-icons/ri";
import { IoIosMore } from "react-icons/io";
import { PiShieldWarning } from "react-icons/pi";
import { MdOutlineLogin } from "react-icons/md";
import { MdRepeat } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";


import "./css/Profilepop.css"

function Profilepop({isOpen}) {
    return (
        <>

            <div>
                <ul className={`profile-list ${isOpen ? "show" : ""}`}>
                    <li className='d-flex align-items-center gap-2 profile-list-item'>
                        <CgProfile size={40} /> <div> <span className='userName'>Shubham Dhatwalia </span> <br /> <span className='email'>shubhamdhatwalia@gmail.com</span> </div>
                    </li>
                    <li className='profile-list-item'>
                        <button className='btn btn-block'>Start your team</button>
                        
                    </li>
                    <hr className='hr'/>
                    <li className='profile-list-item'>
                        <div><MdOutlineSettings size={20} className='profilelistIcon'/> &nbsp; &nbsp; Setting</div>
                    </li>
                    <li className='profile-list-item'>
                        <div><MdOutlineDarkMode size={25} className='profilelistIcon'/>  &nbsp; Dark mode </div>
                        <div></div>
                    </li>
                    <hr className='hr'/>
                    <li className='profile-list-item'>
                        <div><RiSlideshow3Line size={25} className='profilelistIcon'/>  &nbsp; Watch</div> <div> <RiArrowDropRightLine size={25}/> </div>
                    </li>
                    <li className='profile-list-item'>
                        <div><IoIosMore  size={25} className='profilelistIcon'/>  &nbsp; More </div><div> <RiArrowDropRightLine size={25}/> </div>
                    </li>
                    <hr className='hr'/>
                    <li className='profile-list-item'>
                        <div><PiShieldWarning size={25} className='profilelistIcon'/>  &nbsp; Legal</div> <div> <RiArrowDropRightLine size={25}/> </div>
                    </li>
                    <li className='profile-list-item'>
                        <div><MdOutlineLogin size={25} className='profilelistIcon'/>  &nbsp; Logout</div> <div></div>
                    </li>
                    <hr className='hr' />
                    <li className='profile-list-item'>
                        <div><MdRepeat size={25} className='profilelistIcon'/>  &nbsp; Classic Experience </div><div></div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Profilepop
