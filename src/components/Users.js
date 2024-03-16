import React, { useEffect, useState } from 'react'

const Users = ({ userId, change }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                const data = await response.json();
                setUserData(data)
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();
    }, [userId])

  return (
    <div>
        {userData ? (
            <div>
                <h2>{userData.name}</h2>
                <p>{userData.phone}</p>
                <button onClick={() => change(1)}>User 1</button>
                <button onClick={() => change(2)}>User 2</button>
                <button onClick={() => change(3)}>User 3</button>
            </div>
        ) : <p>Loading...</p>}
    </div>
  )
}

export default Users