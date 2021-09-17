import React from 'react'
import styles from './Navbar.module.css'; 
import {NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className={styles.container}>
            <p>0987654321</p>
            <p>ift.tec@gmail.com</p>
            <p>Save big on our app!</p>

        <div className = {styles.catagories}> catagory </div> 
        <div className = {styles.menubar}>

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
