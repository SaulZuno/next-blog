import Layout from "../../../components/Layout";
import Link from "next/link";

export default function index ({data}) {
    return (
        <Layout>
        <h1>Lista de blog </h1>
        {
            data.map((post) => (
                <div key={post.id} >
                    <h3><Link href={`/blog/${post.id}`}>
                    {post.id} - {post.title}
                    </Link></h3>
                    <p>{post.body}</p>
                </div>
            ))
        }
    </Layout>
    )
}

export async function getStaticProps () {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        return {
                    props: {
                        data: data
                    }
                }
    } catch (error) {
        console.log(error)
    }
}