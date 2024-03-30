export default async function getAllPosts(){
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20");
    

    return posts.json();
}