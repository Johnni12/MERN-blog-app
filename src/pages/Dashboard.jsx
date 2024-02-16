import React, { useState } from 'react'
import {DUMMY_POSTS} from '../data'

const Dashboard = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)

  return (
    <section className='dashboard'>
      {posts.length ? (
        <div className='container dashboard__container'> 
        {posts.map(post=>{
          return <article key={post.id} className='dsahboard__post'>

          </article>
        })}
        </div>
      ) : (
        <h2>You have no posts yet</h2>
      )}
    </section>
  )
}

export default Dashboard