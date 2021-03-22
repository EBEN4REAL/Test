import React, {useState, useEffect} from 'react'
import Posts from '../../components/Posts'
import {withRouter} from 'react-router-dom';


const PostWrapper =  (props) => {
    const linkCreateNews = (e) => {
        e.preventDefault();
        props.history.push({pathname: '/createNews'});
    }
    return (
        <div class="row">
            <div class="col-md-4">
                <article class="sideNav">
                    <h6 class="p-4">Filters</h6>
                    <div class="filter-wrapper ">
                        <h6 class="p-4">By Date</h6>
                    </div>
                </article>
            </div>
            <div class="col-md-7">
                
            </div>
            {/* <button onClick={(e) => linkCreateNews(e)}>Create News</button> */}
            <Posts />
        </div>
    )
}

export default withRouter(PostWrapper)