import { log } from 'console';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Homepage() {
    const cartState = useSelector((state: any) => state.cart);
    console.log(cartState);
    // useEffect(() => {
    //     localStorage.setItem("token", "abc");
    //     localStorage.setItem("token", "abc123");
    //     let name= localStorage.getItem("name");
    //     console.log(name);
    //     localStorage.removeItem("token");
    //     localStorage.clear();
        
    //     let cart = [
    //         {id:1, quantity:10,price:50,name:"Ürün1"},
    //         {id:2, quantity:5,price:20,name:"Ürün2"},
    //     ];
    //     localStorage.setItem("cart",JSON.stringify(cart));
    //     let cartFromLocalStorage = localStorage.getItem("cart");
    //     console.log(cartFromLocalStorage);
    //     console.log(JSON.parse(cartFromLocalStorage!));
        
        
    // }, [])

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
