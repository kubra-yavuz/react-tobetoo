import React from 'react'
import { Link } from 'react-router-dom';

function Homepage() {  
    return (
        <div>
            <br />
            {/* iç linklerde href kullanımı yasak! link kullanacağız.*/}
            {/*<a href="/posts">Posts</a>*/}
            <Link to={"/posts"}>Posts</Link>
            </div>
    )
}

export default Homepage;
