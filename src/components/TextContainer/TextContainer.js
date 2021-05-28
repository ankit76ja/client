import React from 'react'

export const TextContainer = ({usersOnline}) => {
    console.log(usersOnline);
    return (
        <div>
            <h3>Online Users</h3>
            {usersOnline.map(user=><p>{user.name}</p>)}
        </div>
    )
}
