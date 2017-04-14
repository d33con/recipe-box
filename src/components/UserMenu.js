import React from 'react';

import { Link } from 'react-router-dom';

import { Menu, Icon } from 'semantic-ui-react';

const UserMenu = () => {
    return (
        <div>
            <Menu widths={4} icon='labeled' >
                <Menu.Item name='home' >
                    <Link to="/">
                        <Icon name='home' />
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item name='food' >
                    <Link to="/recipes">
                        <Icon name='food' />
                        Recipes
                    </Link>
                </Menu.Item>
                <Menu.Item name='star' >
                    <Link to="/favourites">
                        <Icon name='star' />
                        Favourites
                    </Link>
                </Menu.Item>
                <Menu.Item name='pencil' >
                    <Link to="/addrecipe">
                        <Icon name='pencil' />
                        Add Recipe
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default UserMenu;