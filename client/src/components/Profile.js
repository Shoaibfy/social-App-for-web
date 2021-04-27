import React from 'react'

const Profile = () => {
    return (
        <div style={{ maxWidth: "500px", margin: "0px auto" }} >
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                margin: "18px 0px",
                borderBottom: "1px solid grey"
            }}>
                <div>
                    <img style={{ width: '160px', height: '160px', borderRadius: '80px' }}
                        src="https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div>
                    <h4>Shoaib </h4>
                    <div style={{ display: 'flex', justifyContent: "space-between", width: "108%" }}>
                        <h6> 40K following</h6>
                        <h6> 109K followers</h6>
                        <h6>100K posts</h6>
                    </div>
                </div>
            </div>
            <div className='gallery'>

                <img className="item" src="https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img-1" />
                <img className="item" src="https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img-2" />
                <img className="item" src="https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img-3" />
                <img className="item" src="https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img-4" />
                <img className="item" src="https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img-5" />
                <img className="item" src="https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img-6" />

            </div>
        </div>
    )
}

export default Profile
