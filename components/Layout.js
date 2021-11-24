import Head from "next/head"
import Header from "@/components/Header"

export default function Layout({title, children, keywords, description}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords}/>
        <meta name='description' content={description}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="container mx-auto my-7">{children}</main>
    </div>
  )
}

Layout.defaultProps = {
  title: "thien.me",
  keywords: "web development, fullstack, coding, backend, frontend, react, nextjs, tailwindcss, strapi, css, javascript",
  description: "welcome to my portfolio"
}
