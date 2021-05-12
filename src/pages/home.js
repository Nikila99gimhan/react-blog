import React from "react";
import trending from "../assets/mocks/trending";
import {PostMasonry} from '../components/common'


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