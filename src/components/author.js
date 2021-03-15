import React from 'react'
import AuthorImg from '../../static/author/1.jpg'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                     <div className="grid-child" id="author-contents">

                        <p>
                        I lived in Anchorage Alaska 1999 I went to the gym to lift weights and they had an arm wrestling table there for arm wrestlers. I was predicted to be the next world champion arm wrestler for my weight class and age at the time. I was very much involved in sports growing up it was the only thing I enjoyed outside of creative writing in school. I competed in the Thursday night tough man competition in Anchorage Alaska and I won.
                        </p>

                        <h1 className="author-name-tag">
                            <span>Chaitanya</span>
                            <span>Das Ma</span>
                        </h1>
                        
                        <span className="author-tagline">Author & Writer</span>

                     </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg}/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;