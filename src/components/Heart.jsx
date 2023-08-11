import './Heart.css'
import { BsHeart } from 'react-icons/bs';
import { BsHeartFill } from 'react-icons/bs';
import { useState } from 'react';

const Heart = () => {

    const [Liked, setLiked]=useState(false)

    const handleClick= ()=>{
        Liked===true ? setLiked(false) :  setLiked(true);
    }



  return (
    <div onClick={handleClick}>
        { Liked===true ? <BsHeartFill className='Heart'/> :  <BsHeart className='Heart'/>}
       
    </div>
  )
}

export default Heart