import React from 'react'
import './blog.css'
import blankimg from '../assets/blankimg.png'
import Card from '../components/Card/Card'

const cardData = [
    {'author': "Abd1", 'title': "title_name1", 'img': blankimg},
    {'author': "abdulrahman", 'title': "this is my second title", 'img': blankimg},
    {'author': "Ehab Serawan", 'title': "title_name3", 'img': blankimg},
    {'author': "Abd4", 'title': "title_name4", 'img': blankimg},
    {'author': "Abd5", 'title': "title_name5", 'img': blankimg},
    {'author': "Abd6", 'title': "title_name6", 'img': blankimg},
]

const data= {
    'author': 'a',
    'title': 'tile',
    'img' : {blankimg}
}

const Blog = () => {
  return (
    <>  
    <div className="blog-container">
        <div className="filter-container">
            <button className='filter'>
                Any date ↓
            </button>
            <button className='filter'>
                Writer ↓
            </button>
            <button className='filter'>
                Catagories ↓
            </button>
        </div>

        <div className="cards-container">
            {
                cardData.map((card,i) => (
                    <Card author={card.author} title={card.title} img={card.img} />
                ))
            }

        </div>

    </div>
    </>
  )
}

export default Blog