import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useState } from 'react'
import Box from '@mui/material/Box';
import './CarouselComponent.css'

function CarouselComponent() {
  const [items, setstate] = useState([
    {id: 1, title: 'item #1', img:"https://imgur.com/pjf8oYe.png"},
    {id: 2, title: 'item #2', img:"https://imgur.com/8gJYHyl.png"},
    {id: 3, title: 'item #3', img:"https://imgur.com/vrwduUi.png"}
   
  ])
  return (

<Carousel  className='' focusOnSelect={false} showArrows={false} isRTL={false} enableAutoPlay autoPlaySpeed={5000}>
{items.map(item => <div key={item.id}>
<img src={item.img} className="imagemCarrosel" />

</div>)}
</Carousel>

  )
}

export default CarouselComponent