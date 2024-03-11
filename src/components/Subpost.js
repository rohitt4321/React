import React from 'react'

function Subpost() {
    return (
        <div key={post.id} className='col-12' >
            <div style={{ backgroundColor: 'yellow', padding: '73px' }}>
                <p>{post.id}</p>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        </div>
    )
}

export default Subpost
