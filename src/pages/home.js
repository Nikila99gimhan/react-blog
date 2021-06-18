import React from "react";
import trending from "../assets/mocks/trending";
import {MasonryPost, PostMasonry, PostGrid} from '../components/common'
import featured from "../assets/mocks/featured";



const trendingConfig ={
    1: {
        gridArea:'1 / 2 / 3 / 3'
    }
}
const featuredConfig =  {
    0:{
        gridArea: '1 / 1 / 2 / 3',
        height:'300px'
    },
    1:{
        height: '300px'
    },
    3:{
        height:'630px',
        marginLeft:'30px',
        width:'630px'
    }



}
const mergeStyles = function (posts,config) {
    posts.forEach((post, index) => {
        post.style = config[index]
        post.author="Nikila Gimhan"
        post.description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec congue risus. Suspendisse tincidunt orci vel odio pharetra mollis. Quisque eu diam porta, placerat dui sed, bibendum justo. Nam eu porttitor felis. Sed convallis eros lacinia, scelerisque metus egestas, viverra nulla. Integer quam nisi, semper ac dictum a, ornare eget ex. Donec ipsum sapien, molestie eget tellus nec, dapibus pellentesque turpis. Vestibulum nec scelerisque risus. In sodales turpis dapibus'
    })
}
const recentPosts = [...trending, ...featured, ...featured]

mergeStyles(trending ,trendingConfig)
mergeStyles(featured , featuredConfig)

const lastFeatured = featured.pop()

export default function Home () {
    return(
        <main className={"home"}>
        <section className={"container"}>
            <div className={"row"}>
                <section className="featured-posts-container">
                <PostMasonry post={featured} columns={2} tagsOnTop={true} />
                <MasonryPost post={lastFeatured} tagsOnTop={true} />
                </section>
            </div>
        </section>
            <section className={"container"}>
                <div className={"row"}>
                    <h1>Recent Posts</h1>
                     <PostGrid posts={recentPosts} />

                </div>
            </section>

            <section className={"container"}>
                <div className={"row"}>
                    <PostMasonry post={trending} columns={3} />
                </div>
            </section>
        </main>
    )



}