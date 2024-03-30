import getAllPosts from '@/lib/fetchPost';
import fish from '@/public/fish.jpg';
import Image from "next/image";
import Link from "next/link";

export default async function Blogs() {
    const blogs = await getAllPosts();
    console.log('abc')
  return (
    <div className="container mx-auto ">
      <div className="text-center">All of Blog</div>
      <hr />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className=" m-3 w-fit p-3 border border-1 border-sky-500"
            >
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </div>
          ))}
        </div>
        <div className="w-[600px] align-center">
          <Image placeholder="blur" src={fish} alt="betta fish" />
        </div>
      </div>
    </div>
  );
}
