import React from "react";
const BlogPostSec1 = () => {
    return (
        <div className="BlgP1">
            <div className="Tag">
                Dinner tips
            </div>

            <div className="videoInfo">
                <div className="description">
                    Our chef tips for a great and tasty dinner ready in 20 minutes
                </div>
                <div className="userInfo">
                    <div className="profile"></div>
                    <p>Author   17.16.2023</p>
                </div>
            </div>

        </div>
    );
}
const BlogPostSec2 = ({ popularPost }) => {
    
    return (
        <div className="BlgP2">
            <div className="video">
            </div>
            <div className="vidInfo">
                <div className="vidTag">{popularPost.tag}</div>
                <p style={{'font-weight': 'bold'}}>{popularPost.description}</p>
                <span >{popularPost.author}  {popularPost.date}</span>
            </div>
        </div>
    )
}
const BlogPostSec3 = ({ post }) => {
    return (
        <div className="BlogPostSec3">
            {post.map(elem =>
                <div className="BlgP3">
                    <div className="videos">
                        <div className="videoInfo">
                            <p >{elem.title}</p>
                            <span>{elem.author} {elem.date}</span>
                        </div>
                        <div className="video"></div>
                    </div>
                </div>
            )}
        </div>
    );
}
const BlogPost = () => {
    return (
        <div className="BlogPost">
            <h3 >Read our Blog post</h3>
            <div className="BlgP">
                <BlogPostSec1 />
                <BlogPostSec2
                    popularPost={
                        {
                            tag: "Vegetable",
                            description: "Which vegetable your family will love and want’s eat each day",
                            author: "author",
                            date: "15.6.2020"
                        }
                    }
                />
                <BlogPostSec3
                    post={[
                        {
                            title: "Salat is kinda good start to your morning routines",
                            author: "author",
                            date: "15.6.2020"
                        },
                        {
                            title: "Salat is kinda good start to your morning routines",
                            author: "author",
                            date: "15.6.2020"
                        },
                        {
                            title: "Salat is kinda good start to your morning routines",
                            author: "author",
                            date: "15.6.2020"
                        }
                    ]}
                />
            </div>
        </div>
    )
}

export default BlogPost;