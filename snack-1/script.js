function getPostTitle(id) {
    const linkApi = "https://dummyjson.com/posts/";

    const promessa = new Promise((resolve, reject) => {
        fetch(linkApi + id)
            .then((res) => res.json())
            .then((data) => resolve(data))
            .catch(reject);
    });

    return promessa;
}

getPostTitle(2)
    .then((post) => console.log(post.title))
    .catch((err) => console.log(err));
