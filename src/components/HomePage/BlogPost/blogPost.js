import React from "react";

const BlogPostSec1 = () => {
    const BlgP1 = {
        'border-radius': '10px',
        'margin-left': '80px',
        'height': '400px',
        'width': '550px',
        'background-color': ' rgb(223, 223, 223)'
    }
    const Tag = {
        'background-color': 'rgb(233, 233, 233)',
        'width': 'fit-content',
        'height': 'fit-content',
        'padding': '0px 8px 2px 8px',
        'border-radius': '10px',
        'margin': '24px 0px 0px 16px',
        'color': 'rgb(0, 173, 115)',
        'font-weight': 'bold'
    }
    const videoInfo = {
        'position': 'absolute',
        'width': 'inherit',
        'height': '250px',
        'margin-top': '102px',
        'border-radius': '10px',
        'background-image': 'linear-gradient(180deg, transparent ,rgb(12, 12, 12) )',
        'display': 'grid',
        'grid-template-rows': 'auto 40%'
    }
    const description = {
        'margin': '0px 0px 0px 16px',
        'font-size': '20px',
        'color': 'white',
        'font-weight': 'bold',
        'align-self': 'end'
    }
    const userInfo = {
        'margin': '0px 0px 0px 16px',
        'display': 'flex',
        'align-items': 'center',
        'column-gap': '10px',
        'color': 'white'
    }
    const profile = {
        'border-radius': '50%',
        'width': '50px',
        'height': '50px',
        'background-color': 'aliceblue'
    }
    return (
        <div style={BlgP1}>
            <div style={Tag}>
                Dinner tips
            </div>

            <div style={videoInfo}>
                <div style={description}>
                    Our chef tips for a great and tasty dinner ready in 20 minutes
                </div>
                <div style={userInfo}>
                    <div style={profile}></div>
                    <p>Author   17.16.2023</p>
                </div>
            </div>

        </div>
    );
}
const BlogPostSec2 = ({ popularPost }) => {
    const BlgP2 = {
        'width': '350px'
    }
    const video = {
        'border-radius': '10px',
        'width': '350px',
        'height': '220px',
        'background-color': 'rgb(223, 223, 223)'
    }
    const vidInfo = {
        'margin-top': '16px'
    }
    const vidTag = {
        'color': 'rgb(10, 208, 142)',
        'width': 'fit-content',
        'padding': '0px 8px 4px 8px',
        'background-color': 'rgb(223, 223, 223)',
        'border-radius': '10px',
        'font-weight': 'bold'
    }
    return (
        <div style={BlgP2}>
            <div style={video}>
            </div>
            <div style={vidInfo}>
                <div style={vidTag}>{popularPost.tag}</div>
                <p style={{'font-weight': 'bold'}}>{popularPost.description}</p>
                <span >{popularPost.author}  {popularPost.date}</span>
            </div>
        </div>
    )
}
const BlogPostSec3 = ({ post }) => {
    const BlogPostSec3 = {
        'display': 'flex',
        'flex-direction': 'column',
        'row-gap': '16px',
        'width': '300px'
    }
    const videos = {
        'width': '400px',
        'display': 'flex',
        'column-gap': '10px'
    }
    const video = {
        'width': '100px',
        'height': '100px',
        'background-color': 'rgb(223, 223, 223)',
        'border-radius': '10px'
    }
    const videoInfo = {
        'width': '280px'
    }
    const title = {
        'font-weight': 'bold'
    }
    return (
        <div style={BlogPostSec3}>
            {post.map(elem =>
                <div>
                    <div style={videos}>
                        <div style={videoInfo}>
                            <p style={title}>{elem.title}</p>
                            <span>{elem.author} {elem.date}</span>
                        </div>
                        <div style={video}></div>
                    </div>
                </div>
            )}
        </div>
    );
}
const BlogPost = () => {
    const BlogpostSt = {
        'margin-top': '80px'
    }
    const BlgP = {
        'height' : '450px',
        'display' : 'flex',
        'column-gap' : '10px'
    }
    const title = {
        'margin-left' : '80px',
        'margin-bottom' : '32px'
    }
    return (
        <div style={BlogpostSt}>
            <h3 style={title}>Read our Blog post</h3>
            <div style={BlgP}>
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