import Head from "next/head";
import Image from "next/image";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections";

// Content push 1: Sept. 18th, 2022
// Content push 2: Sept. 23rd, 2022
// Content push 3: Oct. 10th, 2022
// Content push 4: Oct. 18th, 2022
// Content push 5: May 29th, 2023
// Content push 6: May 30th, 2023
// Content push 7: June 1st, 2023
// Content push 8: June 13th, 2023
// Content push 9: June 17th, 2023
// Content push 10: June 18th, 2023
// Content push 11: June 19th, 2023

const Home = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Hashing It Out</title>
        <link rel="icon" href="/browser.png" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

export default Home;
