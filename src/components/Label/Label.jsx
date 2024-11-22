import React from 'react'

function Label({ name }) {
    return (
        <div style={{
            border: '1px solid gray',
            borderRadius: '32px',
            backgroundColor: 'white',
            margin: '8px',
            padding: '8px',
            width: '100px'
        }}>{name}</div>
    )
}

export default Label