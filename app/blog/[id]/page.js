import getPost from "@/lib/getPost";
import { notFound } from "next/navigation";

export default async function BlogPage({params}){
    const {id} = params;
    const post = await getPost(id);
    console.log(post);

    if (Number(id) >= 21) {
      notFound();
    }
    return(
        <div className="m-6 p-2 text-center">
            
            <h1 className="font-bold text-xl">{post.title}</h1>
            <hr/>
            <p className="text-sky-600 mt-4">{post.body} </p>
        </div>
    )
}