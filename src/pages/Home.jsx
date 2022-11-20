import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "Title1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi esse exercitationem magnam soluta commodi corporis, libero optio veniam consectetur vero voluptas consequuntur in repellendus tempora praesentium totam! Laudantium, sit.",
      img: "https://punefoodblog.com/wp-content/uploads/2019/06/Top-Food-Bloggers.jpg"
    },
    {
      id: 2,
      title: "Title2",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi esse exercitationem magnam soluta commodi corporis, libero optio veniam consectetur vero voluptas consequuntur in repellendus tempora praesentium totam! Laudantium, sit.",
      img: "https://images.pexels.com/photos/14186492/pexels-photo-14186492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Title3",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi esse exercitationem magnam soluta commodi corporis, libero optio veniam consectetur vero voluptas consequuntur in repellendus tempora praesentium totam! Laudantium, sit.",
      img: "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Title4",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi esse exercitationem magnam soluta commodi corporis, libero optio veniam consectetur vero voluptas consequuntur in repellendus tempora praesentium totam! Laudantium, sit.",
      img: "https://images.pexels.com/photos/12309507/pexels-photo-12309507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt=""/>
            </div>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}> 
                <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <button>Read More</button>
                
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home