import React, { useState, useEffect } from 'react'
import '../App.css'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/allposts', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt-token")
            }
        }).then(res => res.json())

            .then(result =>
                // console.log(result)
                setData(result.posts)
            )
    }, [])

    return (

        <div className="home">
            {data.map(item => {
                return (
                    <div className="card home-card" key={item._id} >
                        <h5 style={{ padding: '20px' }}> {`${item.postedBy.name}'s post`} </h5>
                        <div className="card-image">
                            <img className='homeimg' src={item.photo} />
                        </div>
                        <div className="card-content">
                            <i className="material-icons" style={{ color: 'red' }}>favorite</i>
                            <h6>{item.title} </h6>
                            <p>{item.body}</p>
                            <input
                                type="text"
                                placeholder="add a comment"
                            />
                        </div>
                    </div>
                )
            })}

        </div>

    )
}

export default Home
