import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import "./Post.css";


function Post(props){
    
    
    const [isExpanded, setIsExpanded] = useState(false);

    return(
    
            


    <div>
        <div className="card gedf-card">
                    
                    <div className="card-body">
                        {/* <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i>10 min ago</div> */}
                        <p className="text-primary" href="#">
                            <h5 className="card-title">{props.title}</h5>
                        </p>

                        <p>
                            {isExpanded ? props.content : `${props.content.substr(0, 50)}...`}
                            <p className="text-primary" onClick={() => setIsExpanded(!isExpanded)}>
                            {isExpanded ? 'Show Less' : 'Show More'}
                            </p>
                        </p>
                    </div>
                    
                    <div className="container">
                    <img src={props.image} alt="Blog visual" className="img-fluid post-image"/>
                    </div>
                    
                </div>



    </div>



    )
}   

export default Post;