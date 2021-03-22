import React from 'react'
import {withRouter} from 'react-router-dom';
import Logo from '../assets/img/logo.png'
import Mic from '../assets/img/sch.png'
import SearchIcon from '../assets/img/search.png'


 const div = () => {
   
    return (
       <>
            <header className="header-container">
                <div className="headerWrapper">
                    <div className="logo">
                        <img src={Logo} width="68" />
                    </div>
                    <div className="search-container">
                        <div className="inputWrapper">
                            <div className="search-input">
                                <input type="text" placeholder="search posts..."  className="w-100" />
                            </div>
                            <div className="children-vertical-align p-3 seach-icons">
                                <img  src={Mic} width="25" className="icon-margin" />
                                <img  src={SearchIcon} width="15" className="icon-margin" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-menu-wrapper">
                    <div className="empty-wrapper"></div>
                    <div className="nav-menu">
                        <ul>
                            <li className="active">All</li>
                            <li>Web</li>
                            <li>Iamges</li>
                            <li>Social</li>
                            <li>Documents</li>
                        </ul>
                    </div>
                </div>
            </header>
       </>
    )
}
export default withRouter(div)