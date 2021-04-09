import React from 'react'
import Tweetform from './Tweetform';
import News from './News'


const Tweet = (val) => {
    return (
        <div className="posts">
            <div className="posts_home">
                Home
            </div>
            <Tweetform/>
            <News />
            <News />
            <News />
            <News />
    
            
        </div>
    )
}

export default Tweet
