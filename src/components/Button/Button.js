import React from 'react'
import { BiPhoneCall } from 'react-icons/bi';
import { BsChat } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMail, AiOutlineMobile,AiOutlineShoppingCart  } from 'react-icons/ai';
import {GiHamburgerMenu } from 'react-icons/gi';
import { HiSearch } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import {RiArrowDropDownLine } from 'react-icons/ri';
import { IoChatbubbleOutline } from "react-icons/io5";
import styles from './Button.module.css';
function Button() {
    return (

        <div>
             <div className={styles.button}>

              <div className={styles.icon}>
                <div className={styles.cartIcon}>
                  <AiOutlineShoppingCart />

              </div>
              <div className={styles.notifications}>
                  <IoMdNotificationsOutline />

              </div>
              <div className={styles.chatbox}>
                  <IoChatbubbleOutline />

              </div>
              <div className={styles.account}>
                  <CgProfile />

              </div> 

              </div>
            
        </div>
        </div>
    )
}

export default Button;
