// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  console.log(eachItem)
  const {id, title, imageUrl, avatarUrl, topic, author} = eachItem

  return (
    <Link to={`/blogs/${id}`} className="bg-link">
      <li className="each-list">
        <div>
          <img src={imageUrl} alt={title} className="blog-item-img" />
        </div>
        <div className="bg-info">
          <h4>{title}</h4>
          <h1>{topic}</h1>
          <div className="author-info">
            <img src={avatarUrl} alt={author} className="avatar-img" />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
