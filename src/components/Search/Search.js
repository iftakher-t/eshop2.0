import React from 'react';
import { MdPageview } from "react-icons/md";
import styles from './Search.module.css';
import Button from '../Button/Button'

function Search(){
    return(
        <div className={styles.bar}>
            <div className={styles.logo}>
                <a href="#"> <img src="elogo.svg" /> elogo</a> 
            </div>

          <div className={styles.search}>
              <div className={styles.searchInputs}>
                  <input type="text" placeholder="Search.." />
                <div className={styles.searchIcon}>
                    <MdPageview />
                </div>
                <Button />
                </div>          
            </div>
        </div>
    
    
    )
}

export default Search;
