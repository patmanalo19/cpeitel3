import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Patrick. I'm a graphic designer and digital artist. I love to read manga and watch movies in my free time.</p>
        <p> My expectation in this subject </p>
        <ul>
          <li>I expect this subject to be challenging for me</li>
          <li>I will gain new knowledge after this sem</li>
          <li>I expect that I will have mun while learning</li>
        </ul>
        <p> 10 things that requires 0 talent </p>
         <ol>
          <li>Being on Time</li>
          <li>Body language</li>
          <li>Effort</li>
          <li>Energy</li>
          <li>Being coachable</li>
          <li>Doing extra</li>
          <li>Positive Attitude</li>
          <li> Being prepared</li>
          <li>Following work ethics</li>
          <li>Asking permission</li>
         </ol>
      </section>
    </Layout>
  );
}