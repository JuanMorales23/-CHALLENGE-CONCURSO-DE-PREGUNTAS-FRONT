import React from 'react'

const UserList = ({players}) => {
  return (
    <div>
        <h3>
            User list's
        </h3>
        {
            players.map(player => (
                <div className='mb-3 border rounded p-3' key={player.id}>
                    {player.name}
                    <br></br>
                    {player.score}
                </div>
            ))
        }
    </div>
  )
}

export default UserList