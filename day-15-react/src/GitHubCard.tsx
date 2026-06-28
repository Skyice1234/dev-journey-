import { useState, useEffect } from "react";


interface GitHubUser{
    name: string,
    bio: string,
    avatar_url: string,
    public_repos: number
}

function GitHubCard () {
const [user, setUser] = useState<GitHubUser | null>(null);

useEffect(() => {
    fetch('https://api.github.com/users/Skyice1234')
    .then(res => res.json())
    .then(data => setUser(data));
}, [])

if (!user) return <p>Loading...</p>;

return(
    <div>
        <img src={user.avatar_url} width={100}/>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <p>Public repos: {user.public_repos}</p>
    </div>
);
}

export default GitHubCard;