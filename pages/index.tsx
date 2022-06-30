import type { NextPage } from 'next'
import Head from 'next/head'
import PostCard, { PostCardProps } from '../components/posts/PostCard/PostCard'
import PostEditor from '../components/posts/PostEditor/PostEditor'
import PostsGrid from '../components/posts/PostsGrid/PostsGrid'
import PostsSlider from '../components/posts/PostsSlider/PostsSlider'

const posts: PostCardProps[] = [
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
  {
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    category: "personal growth",
    date: "2020-01-01",
    author: "Saad ur Rehman",
    image: "/avatar.png",
  },
]

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='p-3 mx-auto'>
        <PostEditor />
      </div>
    </div>
  )
}

export default Home
