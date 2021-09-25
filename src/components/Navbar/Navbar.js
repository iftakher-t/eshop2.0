import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <>
        <div className={styles.container}>

                <div className = {styles.menubar}>
                    <div className = {styles.catagories}>
                        <GiHamburgerMenu color = "white" />
                         catagories <RiArrowDropDownLine color = "white" />
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
