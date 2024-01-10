import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { AuthContext } from '../../contexts/authContext';

function Navbar() {
    // const navigate = useNavigate();
    const authContext = useContext(AuthContext); //AuthContext'ten gelen değerleri çekmek için useContext kullanılır
    return (
        <Menu>
            <Menu.Item as={Link} to={"/"}>
                Ana Sayfa
            </Menu.Item>
            <Menu.Item as={Link} to={"/posts"}>
                Postlar
            </Menu.Item >

            {!authContext.isAuthenticated && <Menu.Item as={Link} to={"/login"}> Giriş yap  </Menu.Item>} {/*eğer aoutContextin isAuthenticated alanı false ise giriş yap göster. */}

        </Menu >

    );
}

export default Navbar;
