import React from 'react'
import PostAuthor from '../components/PostAuthor'

const PostDetail = () => {
  return (
    <section className='post-detail'>
      <div className='container post-detail__container'>
        <div className='post-detail__header'>
          <PostAuthor />
          <div className='post-detail__buttons'>
            <Link to={'/posts/viewer/edit'} className='btn sm primary'>
              Edit
            </Link>
            <Link to={'/posts/viewer/delete'} className='btn sm danger'>
              Delete
            </Link>
          </div>
        </div>
        <h1>this is the post title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloremque eligendi tenetur quod numquam et sequi ad quidem laudantium perspiciatis id culpa aut dolores delectus, cupiditate ipsum saepe consequatur necessitatibus a nulla! Dolorum perferendis impedit inventore vel optio quod ea tempora, corrupti facilis voluptate incidunt laudantium vero. Nam excepturi consectetur repudiandae, eos voluptatem reiciendis odio sed minus eum perferendis? Quidem alias quia iusto quam repellendus perferendis fugit est fugiat expedita natus, velit vel autem neque ipsa cumque sint recusandae eveniet sapiente consequuntur. Quasi, adipisci voluptate veritatis pariatur voluptatum cumque similique. Corrupti labore doloribus quibusdam cum officiis odio sed harum id?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse eos aliquam, cupiditate illum ex soluta nisi repellat recusandae voluptate nihil maiores quis quisquam sint quam? Nam earum nihil facere vel, suscipit, quasi inventore distinctio, dolorum dolores sed voluptatum autem? Quae autem ut, nulla iusto perspiciatis nemo sequi dolor illum voluptatum quibusdam. Est, quos mollitia expedita odio doloremque nulla in nisi tenetur enim, repudiandae doloribus. Neque soluta repudiandae voluptas ullam! Aliquam reiciendis laborum molestias ea, itaque tempora amet. Eos ut nisi voluptatem corrupti amet fugiat numquam necessitatibus ex aliquid quibusdam? Fugiat, facilis! Quo blanditiis aut adipisci, dignissimos alias, molestias eveniet mollitia libero fuga quod voluptatem eum tempore architecto distinctio commodi aperiam quas ratione odit? Accusantium ipsum eius harum facere? Quidem asperiores repellat, odio dolore modi ipsam aliquam quisquam? Rem dolore reprehenderit, at non, sapiente quam, aliquam cupiditate praesentium velit quia quas earum placeat officia itaque.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi sed laudantium error cum illum repellat commodi harum nesciunt minus earum, dignissimos possimus rerum dolorem maxime maiores accusantium sequi iusto vel magni? Eveniet, laboriosam sapiente dolores similique incidunt esse minus. Doloremque nisi reiciendis cum labore.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde a voluptates explicabo necessitatibus numquam obcaecati praesentium eaque eligendi libero voluptate! Ipsum doloremque voluptate illo delectus harum quos rerum, non neque excepturi voluptas iusto amet mollitia facilis impedit earum? Hic consectetur, nisi molestiae dolore ad consequatur facilis consequuntur dolorem corrupti optio id non eos veniam! Harum quae neque assumenda cum hic aspernatur officia quisquam! Eligendi, blanditiis? Odio optio molestias consequuntur. Similique ipsa omnis esse dolorem fugiat eveniet voluptas aut velit neque totam enim quas sunt repudiandae dolor, eos ex animi veniam ratione rem tempora voluptates eligendi, iste distinctio adipisci. Dignissimos voluptate, alias officia non esse distinctio voluptas atque possimus, enim voluptates dolorum consectetur reiciendis, fugiat quaerat perferendis ad? Fugit nihil quis sit veritatis odio amet sed architecto nemo repudiandae omnis. Quos perferendis blanditiis earum voluptates dolorem doloremque cum distinctio fugit, eaque perspiciatis magnam animi accusantium commodi eveniet adipisci quis quo veniam placeat praesentium nostrum porro sunt unde hic laborum! Ut, ullam soluta officia cupiditate ab sint excepturi dolores voluptates laborum, illum, ipsam facilis dolorum reprehenderit nam reiciendis id quas repellendus ipsa! Impedit eius laborum delectus animi, sunt laboriosam nulla, voluptates quidem nihil omnis exercitationem aut perferendis neque, expedita velit ratione similique. n</p>
      </div>
    </section>
  )
}

export default PostDetail
