import React from 'react'

function Homepage() {
    return (
        <div>
            Homepage
            <br />
            {/* iç linklerde href kullanımı yasak! link kullanacağız.*/}
            {/*<a href="/posts">Posts</a>*/}
            <link to={"/posts"}>Posts</link>
        </div>
    )
}

export default Homepage;
