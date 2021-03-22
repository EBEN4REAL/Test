import React, {useState, useEffect} from 'react'
import {configParams} from '../config.js';
import axios from 'axios'

const PostDetails =   (props) =>  {
    const [postDetails, setPostDetails] = useState({})
    const [loading , setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
            .then((res) => {
                setLoading(false)
                setPostDetails(res.data)
            }).catch(err => {
                setLoading(false)
                throw new Error(err)
            });
    },[])
    return (
        <div>
            {!loading ? 
                <div>
                    <h3>{postDetails.title}</h3>
                    <p>{postDetails.body}</p>
                </div>
            : null
        }
           
        </div>
    )
}

export default PostDetails