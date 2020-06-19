import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <div>
        Read <Link href="/posts/first-post"><a>my first post!</a></Link>
        </div>
        <div>
        Read <Link href="/posts/second-post"><a>my second post!</a></Link>
        </div>
      </section>
    </Layout>
  )
}