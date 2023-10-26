import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BlogPost.css';

const BlogPost = () => {
    // Dummy data
    const post = {
        title: "Exploring Gradient Backgrounds",
        content: "Gradients can be a great way to add depth and interest to your design...",
        imageUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
        author: "John Doe",
        comments: [
            { author: "Jane Smith", text: "Great post!" },
            { author: "Alice", text: "Thanks for sharing this." }
        ]
    }

    return (
        <div className='post-blog'>
            
            <div className="blog-post-container card post-offre" >
                <div className="" >
                    <div className="">
                        <div className="container">
                            <h1 className="post-title">{post.title}</h1>
                            <p className="post-author">Published by: {post.author}</p>
                            <img src={post.imageUrl} alt="Blog visual" className="img-fluid post-image"/>
                            <p className="post-content">{post.content}</p>
                            <div className="comments-section">
                                <h5>Comments:</h5>
                                {post.comments.map((comment, index) => (
                                    <div key={index} className="comment">
                                        <p><strong>{comment.author}</strong></p>
                                        <p>{comment.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                hello
            </div>
        </div>
    );
}

export default BlogPost;










// import { useParams } from 'react-router-dom';


// function PostPage(props){
//     const { postId } = useParams();
//     return(
//         <div>
            
//         </div>
//     )
// }

// export default PostPage