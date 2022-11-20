import React from 'react'

const Menu = () => {

    const posts = [
        {
          id: 1,
          title: "Title1",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi esse exercitationem magnam soluta commodi corporis, libero optio veniam consectetur vero voluptas consequuntur in repellendus tempora praesentium totam! Laudantium, sit.",
          img: "https://images.pexels.com/photos/86405/penguin-funny-blue-water-86405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          id: 2,
          title: "Title2",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi esse exercitationem magnam soluta commodi corporis, libero optio veniam consectetur vero voluptas consequuntur in repellendus tempora praesentium totam! Laudantium, sit.",
          img:"https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 3,
          title: "Title3",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi esse exercitationem magnam soluta commodi corporis, libero optio veniam consectetur vero voluptas consequuntur in repellendus tempora praesentium totam! Laudantium, sit.",
          img:"https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          id: 4,
          title: "Title4",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi esse exercitationem magnam soluta commodi corporis, libero optio veniam consectetur vero voluptas consequuntur in repellendus tempora praesentium totam! Laudantium, sit.",
          img: "https://images.pexels.com/photos/2708981/pexels-photo-2708981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      ]

  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post => (
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
                </div>
        ))}
    </div>
  )
}

export default Menu