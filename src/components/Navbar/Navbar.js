import React from 'react'
import styles from './Navbar.module.css'; 
import {NavLink, Link } from 'react-router-dom';
import { BiPhoneCall } from 'react-icons/bi';
import { BsChat } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMail, AiOutlineMobile,AiOutlineShoppingCart  } from 'react-icons/ai';
import {GiHamburgerMenu } from 'react-icons/gi';
import { HiSearch } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import {RiArrowDropDownLine } from 'react-icons/ri';

const Navbar = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.container_text}> 
                <div className = "phone"><BiPhoneCall color = "purple" size="1rem"/><a href="tel:0987654321">0987654321</a></div>
                <div className = "mail"><AiOutlineMail color = "purple" /><a href = "mailto:ift.tec@gmail.com">ift.tec@gmail.com</a></div>
                <div className = "app_link"><AiOutlineMobile color = "purple" /><a href="www.google.com">Save big on our app!</a></div>
            </div>
            <div className={styles.container_searchbar}> 
                <div className = "Logo"><a href="ev.com">EVALY</a></div>
                <div className = {styles.searchbar}><input type="text" placeholder="Search.. " /><HiSearch color = "purple" /></div>
                <div className = "cart"><AiOutlineShoppingCart color = "purple" /><a href="www.google.com"></a></div>
                <div className = "notification"><IoMdNotificationsOutline color = "purple" /><a href="www.google.com"></a></div>
                <div className = "chat"><BsChat color = "purple" /><a href="www.google.com"></a></div>
                <div className = "profile"><CgProfile color = "purple" /><a href="www.google.com"></a></div>
            </div>
        
                <div className = {styles.menubar}>
                    <div className = {styles.catagories}>
                        <GiHamburgerMenu color = "white" /> catagories <RiArrowDropDownLine color = "white" />
                    </div> 
                        <Link to="/"> </Link>
                        <NavLink to="/dashboard">All Shop</NavLink>
                        <NavLink to="/dashboard">Campaign</NavLink>
                        <NavLink to="/dashboard">Top-up</NavLink>
                        <NavLink to="/dashboard">Express</NavLink>
                        <NavLink to="/dashboard">T10</NavLink>
                        <NavLink to="/dashboard">News Feeds</NavLink>
                        <NavLink to="/dashboard"> Merchant zone</NavLink>
                        <NavLink to="/dashboard"> Help</NavLink>


                    {/*<Switch>
                    <Route path="/" component={Mainpage} exact />
                    <Route path="/dashboard"
                        component={Dashbord} 
                    /> </Switch>
                    */}
                </div>
            </div>
        </>
    )
}

export default Navbar
