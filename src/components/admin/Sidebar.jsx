import React from "react";
import { Link } from 'react-router-dom';

const Sidebar = ({ match }) => {
    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to={`${match.url}/posts`}>Posts</Link>
                </li>

                <li>
                    <Link to={`${match.url}/users`}>Users</Link>
                </li>
            </ul >
        </React.Fragment >
    );
}

export default Sidebar;
