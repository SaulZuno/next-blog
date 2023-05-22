import Head from "next/head"
import styles from "../src/styles/Layout.module.css"
import Link from "next/link"
import Image from "next/image"
import utilStyles from "../src/styles/utils.module.css"

const name = "bluuweb"

export default function Layout({children, title, description, home}) {
    console.log(home)
    return(
        <div className={styles.container}>
            <Head>
            <link rel="icon" href="/favicon.ico" />
                <title>{title}</title>
                <meta 
                    name="description"
                    content={description}
                />
            </Head>
            <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/1.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/img/1.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
            <nav>
                <Link href="/">
                    Inicio
                </Link>
                <Link href="/blog/primer-post">
                    Blog
                </Link>
                <Link href="/contact">
                    Contacto
                </Link>
                <Link href="/about">
                    About
                </Link>
            </nav>

            <main>
                {children}
            </main>

            {!home && (
                <div className="styles.backToHome">
                    <Link href="/" >
                    Back to home
                    </Link>
                </div>
            )}

            <footer>
                footer
            </footer>
        </div>
    )
}

Layout.defaultProps = {
    title: "Next.js | mi sitio web",
    description: "Descripción de mi sitio web"
}