import {useState} from 'react'
import PostItem from './PostItem'

import Thumbnail2 from '../images/blog9.jpg'
import Thumbnail1 from '../images/blog10.jpg'
import Thumbnail3 from '../images/blog71.jpg'
import Thumbnail4 from '../images/blog40.jpg'
import Thumbnail31 from '../images/blog38.jpg'
import Thumbnail12 from '../images/blog12.jpg'

const DUMMY_POSTS = [
  {
    id: '1',
    thumbnail: Thumbnail1,
    category: 'education',
    title: 'This is the very first post on this blog',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ut? Necessitatibus reprehenderit rerum nam quasi vero magni quas veniam praesentium.',
    authorID: 1,
  },
  {
    id: '2',
    thumbnail: Thumbnail2,
    category: 'education',
    title: 'This is the very second post on this blog',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ut? Necessitatibus reprehenderit rerum nam quasi vero magni quas veniam praesentium.',
    authorID: 2,
  },
  {
    id: '3',
    thumbnail: Thumbnail3,
    category: 'education',
    title: 'This is the very third post on this blog',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ut? Necessitatibus reprehenderit rerum nam quasi vero magni quas veniam praesentium.',
    authorID: 3,
  },
  {
    id: '4',
    thumbnail: Thumbnail1,
    category: 'science',
    title: 'This is the very fourth post on this blog',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ut? Necessitatibus reprehenderit rerum nam quasi vero magni quas veniam praesentium.',
    authorID: 4,
  },
  {
    id: '37',
    thumbnail: Thumbnail12,
    category: 'education',
    title: 'This is the very third post on this blog',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ut? Necessitatibus reprehenderit rerum nam quasi vero magni quas veniam praesentium.',
    authorID: 39,
  },
  {
    id: '5',
    thumbnail: Thumbnail31,
    category: 'education',
    title: 'This is the very third post on this blog',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ut? Necessitatibus reprehenderit rerum nam quasi vero magni quas veniam praesentium.',
    authorID: 9,
  },
]

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)

  return (
    <section className='posts'>
      <div className='container posts__container'>
        {posts.map(({ id, thumbnail, title, category, desc, authorID }) => (
          <PostItem
            key={id}
            postID={id}
            thumbnail={thumbnail}
            category={category}
            title={title}
            description={desc}
            authorID={authorID}
          />
        ))}
      </div>
    </section>
  )
}

export default Posts
