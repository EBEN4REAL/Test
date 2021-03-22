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
                <article class="side"></article>
            </div>
            <div class="col-md-7">
                
            </div>
            {/* <button onClick={(e) => linkCreateNews(e)}>Create News</button> */}
            <Posts />
        </div>
    )
}

export default withRouter(PostWrapper)