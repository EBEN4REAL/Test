import React, {useState, useEffect} from 'react'
import Posts from '../../components/Posts'
import {withRouter} from 'react-router-dom';


const PostWrapper =  (props) => {
    const linkCreateNews = (e) => {
        e.preventDefault();
        props.history.push({pathname: '/createNews'});
    }
    return (
        <div className="row">
            <div className="col-md-4">
                <article className="sideNav">
                    <h6 className="p-4">Filters</h6>
                    <div className="filter-wrapper ">
                        <h6 className="p-2">By Date</h6>
                        <div className="ml-3 p-2">
                            <input type="radio"  /> <span>Anytime</span>
                        </div>
                        <div className="ml-3  p-2">
                            <input type="radio" /> <span>Custom range</span>
                        </div>
                     </div>
                </article>
            </div>
            <div className="col-md-7">
                <button onClick={(e) => linkCreateNews(e)}> Create Post</button>
                <Posts />
            </div>
        </div>
    )
}

export default withRouter(PostWrapper)