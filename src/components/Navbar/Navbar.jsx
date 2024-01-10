import React from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

function Navbar() {
    // const navigate = useNavigate();

    return (
        <Menu>
            <Menu.Item as={Link} to={"/"}>
                Ana Sayfa
            </Menu.Item>
            <Menu.Item as={Link} to={"/posts"}>
                Postlar
            </Menu.Item >
        </Menu >

    );
}

export default Navbar;
