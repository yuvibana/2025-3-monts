import React, { useEffect, useState } from 'react';

export default function Index() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // to track the loading state
    const [error, setError] = useState(null); // to track if there was an error

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []); // runs only once when the component mounts

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>No user</div>;

    return (
        <div>
            <h1>useEffect Hook Example</h1>
            <h2>User Details</h2>
            <ul>
                <li>Id : {user.id}</li>
                <li>Name : {user.name}</li>
                <li>Email : {user.email}</li>
            </ul>
        </div>
    );
}
