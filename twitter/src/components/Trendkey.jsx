
import React, { useState } from 'react';

const Trendkey = () => {
const [state, useState] = React.useState(
    [
        {id: 1,
        country: "Trending in Pakistan",
        keyword: "#schoolreopening",
        num: "2,563 Tweets" } ,


        {id:2 ,
         country: "Technology .Trending",
         keyword: "##WeMetOnTwitter",
         num: "8,347 Tweets" },


        {id: 3,
         country: "Trending in Pakistan",
         keyword: "#Islamabad",
         num: "2,281 Tweets" },


        {id: 4,
        country: "Trending in Pakistan",
        keyword: "#PSL6",
        num: "2,563 Tweets" }
    ]
)

    return (
        <div className="keyword">
            <div className="key">
            <div className="keyword_header">
                <h4>Trends for you</h4>
            </div>
            {state.map((keyword)=> (
              <div key={keyword.id}>
            <div className="country">
                {keyword.country}
                
            </div>
            <div className="keyword_tweet">
                <strong>{keyword.keyword}</strong>
            </div>
            <div className="keyword_num">
                {keyword.num}
                
            </div>
            </div>  
            ))}
         
            </div>
        </div>
    );
};

export default Trendkey
