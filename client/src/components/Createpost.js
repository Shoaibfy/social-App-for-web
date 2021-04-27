import React, { useState, useEffect } from 'react'
import M from 'materialize-css'
import { Link, useHistory } from 'react-router-dom'



const Createpost = () => {

    const history = useHistory()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [url, setUrl] = useState("")


    useEffect(() => {
        if (url) {
            fetch("/createpost", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt-token")
                },
                body: JSON.stringify({
                    title,
                    body,
                    photo: url
                })
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.error) {
                        M.toast({ html: data.error, classes: "#ef9a9a red lighten-1" })
                        // console.log(data)
                    }
                    else {
                        // console.log(data)
                        M.toast({ html: "created new post successfully", classes: "#1b5e20 green darken-4" })
                        history.push("/")

                    }
                }).catch(err => {
                    console.log(err)
                })
        }
    }, [url])

    const PostDetails = () => {
        const data = new FormData()
        data.append('file', url)
        data.append('upload_preset', 'social-app')
        data.append('cloud_name', 'shoaibi2')
        fetch("	https://api.cloudinary.com/v1_1/shoaibi2/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json())
            .then(data => setUrl(data.url))
            .catch(err => console.log(err))

        //fetching pic

    }

    return (
        <div className='card input-field' style={{ margin: '30px auto', padding: '20px', width: '500px' }}>
            <input
                type='text'
                placeholder='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
            <input
                type='text'
                placeholder='body'
                value={body}
                onChange={(e) => setBody(e.target.value)} />
            <div className='file-field input-field'>
                <div className="btn #ef9a9a blue lighten-1">
                    <span>       Upload Image</span>
                    <input type='file' placeholder='body' onChange={(e) => setUrl(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate " placeholder='select image to post' type="text" />
                </div>
            </div>
            <div className="btn #ef9a9a red lighten-1" onClick={PostDetails}>
                Create Post
            </div>


        </div>
    )
}

export default Createpost
