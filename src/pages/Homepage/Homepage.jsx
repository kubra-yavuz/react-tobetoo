import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Homepage() {
const selector = useSelector (state => {
    console.log(state);
     return state.cart;
    });

    
    return (
        <div>
            {selector.cartItems.length} adet ürün sepette
            <br />
            {/* iç linklerde href kullanımı yasak! link kullanacağız.*/}
            {/*<a href="/posts">Posts</a>*/}
            <Link to={"/posts"}>Posts</Link>
        </div>
    )
}

export default Homepage;
