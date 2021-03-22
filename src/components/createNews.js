import React from 'react'
import {useState} from 'react'


const CreateNews = ()  => {
    const [body, setBody] = useState(null)
    const [title, setTitle] = useState(null)

    const  generateRandomNumber = () => {
        return Math.floor(Math.random() * 9)
    }

    const createPost = (e) => {
        e.preventDefault();
        if(!title) {
            alert("TItle is required")
            return
        }
        if(!body) {
            alert("Body is required")
            return
        }
        const data = {
            title,
            body,
            userId: generateRandomNumber()
        }
        console.log(data)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                alert('Post created successfully')
            });
    }
    return (
        <div>
            <form>
                <input type="text" placeholder="Title..." onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="Body..." onChange={(e) => setBody(e.target.value)}  />
                <button onClick={(e) => createPost(e)}>Create</button>
            </form>
            
        </div>
    )
}


export default CreateNews