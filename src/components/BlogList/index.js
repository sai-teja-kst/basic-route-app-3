// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs/')
    const statusCode = await response.statusCode
    console.log(statusCode)

    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    console.log(isLoading)

    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <ul className="list-container">
            {blogsData.map(eachItem => (
              <BlogItem eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BlogList
