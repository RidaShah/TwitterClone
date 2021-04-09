import React from 'react'
import {GoVerified} from 'react-icons/go';
import {BiMessageRounded} from 'react-icons/bi'
import {FaRetweet} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiUpload} from 'react-icons/fi'

const News = () => {
    
    return (
        
        <div className="news">
            <div className="news_first">
                <div className="news_first_img">
                <img src="/images/ary.jpg" alt="ary Image"></img>
                </div>
                <div className="news_first_name">
                    <strong>ARY NEWS <span className="verify"><GoVerified/></span></strong>
                </div>
                <div className="news_first_username">@ARYNEWSOFFICIAL</div>
                </div>
                <div className="news_details">
                    <div className="news_title">
                    PM Khan green lights finalisation of development package for GB
                    <div className="hashtag">#ARYNews</div>
                   
                    </div>
                    <div className="news_img">
                        <img src="/images/imran2.jpg" alt="imran bhai"></img>
                    </div>
                    <div className="news_reactions">
                        <BiMessageRounded className="re" />
                        <span> <FaRetweet className="re" /> 1</span>
                        <span><AiOutlineHeart className="re" /> 28</span>
                        <FiUpload className="re"/>

                    </div>
                </div>
            </div>
            
        
    )
}

export default News
