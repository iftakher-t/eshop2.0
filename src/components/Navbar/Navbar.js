import React from 'react'
import styles from './Navbar.module.css'; 
import {NavLink, Link } from 'react-router-dom';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail, AiOutlineMobile  } from 'react-icons/ai';
import {GiHamburgerMenu } from 'react-icons/gi';
import {RiArrowDropDownLine } from 'react-icons/ri';

const Navbar = () => {
    return (
        <>
        <div className={styles.container}>
            <div> 
                <div className = "top"><BiPhoneCall color = "purple" size="1rem"/><a href="tel:0987654321">0987654321</a></div>
                <div className = "top"><AiOutlineMail color = "purple" /><a href = "mailto:ift.tec@gmail.com">ift.tec@gmail.com</a></div>
                <div className = "top"><AiOutlineMobile color = "purple" /><a href="www.google.com">Save big on our app!</a></div>
            </div>
        
                <div className = {styles.menubar}>
                    <div className = {styles.catagories}>
                        <GiHamburgerMenu color = "white" /> catagories <RiArrowDropDownLine color = "white" />
                    </div> 
                        <Link to="/"> Home</Link>
                        <NavLink to="/dashboard">Dashboard</NavLink>


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
