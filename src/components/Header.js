import React from 'react'
import {withRouter} from 'react-router-dom';
import Logo from '../assets/img/logo.png'
import Mic from '../assets/img/Vector.png'
import SearchIcon from '../assets/img/search.png'


 const Header = () => {
   
    return (
       <>
            <header className="headerWrapper">
                <div className="logo">
                    <img src={Logo} />
                </div>
                <div className="search-container">
                    <div className="inputWrapper">
                        <div className="search-input">
                            <input type="text" placeholder="search posts..." />
                         </div>
                        <div className="children-vertical-align p-3 seach-icons">
                            <img  src={Mic} width="" className="icon-margin" />
                            <img  src={SearchIcon} width="15" className="icon-margin" />
                            
                        </div>
                    </div>
                </div>
            </header>
       </>
    )
}
export default withRouter(Header)