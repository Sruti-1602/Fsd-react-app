import React from 'react'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        {<img  src="https://punefoodblog.com/wp-content/uploads/2019/06/Top-Food-Bloggers.jpg" alt=""/> }
      <div className="user">
        { <img src=" https://i0.wp.com/www.yesmagazine.org/wp-content/uploads/2022/03/Ghaderi_1400x840.jpg?fit=1400%2C840&quality=90&ssl=1" alt=""/>}
      <div className="info">
        <span>John</span>
        <p>Posted 2 days ago</p>
      </div>
      <div className="edit">
        <Link to={`/write?edit=2`}>
        {<img src={Edit} alt="" />}
        </Link>
        <img src={Delete} alt=""/>
      </div>
      </div>
      <h1>Title</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In tempora nihil eos ab consectetur obcaecati quis enim! Officiis doloribus autem ipsum fugiat facilis, modi et vero adipisci quasi id architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam, odio non rem omnis quae autem exercitationem distinctio voluptatum ut corporis, nesciunt consequatur quis dolorum unde nemo accusantium aspernatur. Eveniet.</p>
      <br/>
      <br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ut quis id, ea eaque voluptates vitae dicta perspiciatis reiciendis veniam! Voluptatibus, amet! Molestias omnis odio aspernatur, unde sit labore fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat possimus, ullam laborum veniam deleniti, eveniet veritatis aspernatur nobis, nesciunt ipsum molestias perferendis commodi impedit consectetur nam laudantium necessitatibus sint dolores.</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single