import React from "react";
import trending from "../assets/mocks/trending";
import {PostMasonry} from '../components/common'

const trendingConfig ={
    1: {
        gridArea:'1 / 2 / 3 / 3'
    }
}

const mergeStyles = function (posts,config) {
    posts.forEach((post, index) => {
        post.style = config[index]
    })
}

mergeStyles(trending ,trendingConfig)

export default function Home () {
    return(
        <section className={"container home"}>
            <div className={"row"}>
                <h2>Trending Post</h2>
                <PostMasonry post={trending} columns={3} />

            </div>

        </section>
    )



}