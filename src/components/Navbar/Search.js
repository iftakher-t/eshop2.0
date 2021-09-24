import React from 'react'
import styles from './Search.module.css'; 
import { BiPhoneCall } from 'react-icons/bi';
import { BsChat } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMail, AiOutlineMobile,AiOutlineShoppingCart  } from 'react-icons/ai';
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSearchCircleSharp } from "react-icons/io5";

const Search = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.container_text}> 
                <div className = "phone"><BiPhoneCall color = "purple" size="1rem"/><a href="tel:0987654321">0987654321</a></div>
                <div className = "mail"><AiOutlineMail color = "purple" /><a href = "mailto:ift.tec@gmail.com">ift.tec@gmail.com</a></div>
                <div className = "app_link"><AiOutlineMobile color = "purple" /><a href="www.google.com">Save big on our app!</a></div>
            </div>
            <div className={styles.container_bar}> 
                <div className = "Logo"><a href="ev.com">EVALY</a></div>
                <div className = {styles.searchbar}>
                    <div> 
                    <input type="text" placeholder="Search.. " />
                    </div>
                    <div className = {styles.searchicon}>
                    <IoSearchCircleSharp className = 'ico' color="white" size="1.3rem" />
                    </div>
                </div>
                <div className = "cart"><AiOutlineShoppingCart color = "purple" /><a href="www.google.com"></a></div>
                <div className = "notification"><IoMdNotificationsOutline color = "purple" /><a href="www.google.com"></a></div>
                <div className = "chat"><BsChat color = "purple" /><a href="www.google.com"></a></div>
                <div className = "profile"><CgProfile color = "purple" /><a href="www.google.com"></a></div>
            </div>
        </div>
        </>
    )
}

export default Search
