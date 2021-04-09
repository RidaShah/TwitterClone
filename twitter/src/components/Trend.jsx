import React from 'react'
import {FiSearch} from 'react-icons/fi'
import Trendkey from './Trendkey'

const Trend = () => {
    return (
        <div className="trends">
            <div className="trends_search">
                <input type="text" className="trends_control"  placeholder="Search Twitter"/>
                <div className="trends_icon">
                <FiSearch className="search"/>
                </div>
                
            </div>
            <Trendkey/>
            
        </div>
    )
}

export default Trend
