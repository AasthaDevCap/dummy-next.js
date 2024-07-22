
import Link from "next/link"

const BlogPost = () => {
    return (
        <main>
            <h1> Blog Post</h1>
            <p><Link href={'/blog/blog-post1'}> Blog Post 1</Link></p>
            <p> <Link href={'/blog/blog-post2'}> Blog Post 2</Link></p>

        </main>
    )
};
export default BlogPost;