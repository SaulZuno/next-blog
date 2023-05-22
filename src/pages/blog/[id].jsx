import Link from "next/link";
import Image from "next/image";
import Layout from "../../../components/Layout";
export default function primerPost({data}) {
    return(
        <Layout
            title="Mi primer post | next.js"
            description="agregue una descripción"
        >
            <div>
            <h1>
                {data.id}{data.title}
            </h1>
            <p>{data.body}</p>
            <Link href="/">
               Volver al inicio
            </Link>
            </div>
        </Layout>
        
        
    )
}

export async function getStaticPaths() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await res.json();
                const paths = data.map(({id}) => ({params: {id: `${id}`}}))
                return {
                                    paths,
                                    fallback: false
                                }
                
    }catch (error) {
        console.log(error);
    }
    
}

export async function getStaticProps ({params}) {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/' +params.id);
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