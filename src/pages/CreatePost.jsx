import React, { useState } from 'react'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState('')

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'orderd' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  }

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ]

  const POST_CATEGORIES = [
    'Agriculture',
    'Business',
    'Education',
    'Entertainment',
    'Art',
    'Investment',
    'Uncategorized',
    'Weather',
  ]

  return (
    <div className='create-post'>
      <div className='container'>
        <h2>Create Post</h2>
        <p className='form__error-message'>This is an error message</p>
        <form className='form create-post__form'>
          <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <select
            name='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {POST_CATEGORIES.map((cat) => (
              <option>{cat}</option>
            ))}
          </select>
        </form>
      </div>
    </div>
  )
}

export default CreatePost
