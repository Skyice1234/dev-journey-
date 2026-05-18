const loadPosts = async () => {
    const loading = document.getElementById("loading");
    const container = document.getElementById("posts-container");

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        const posts = await response.json();
        
        loading.textContent = "";

        posts.forEach(post => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");
            postDiv.innerHTML =`
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `;
            container.appendChild(postDiv);
        });

    } catch (err) {
        loading.textContent = "Failed to load posts.";
        console.log("Error", err)
    }
};

loadPosts();