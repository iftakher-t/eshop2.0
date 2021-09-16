import React from 'react'
import Home from 'Home'
import About from 'About'
import Contact from 'Contact'
import Post from 'Post'


function Container() {
    return (
        <BrowserRouter>
        <div>
           <Navbar />
           <Route path="/" exect component={Home} />
           <Route path="/about" exect component={About} />
           <Route path="/contact" exect component={Contact} />
           <Route path="/post" exect component={Post} />
           <Route path="/posts/:id" exect component={SinglePost} />
        
        </div>
        </BrowserRouter>
    )
}

export default Container
