import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/philosophical-poetry-min.png'



const ATB = (props)=>{

    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'chaitanya-das-ma',
	  config: { identifier:  12, slug}
    }
      

	return (
		<>
		 	<Layout>
		        <Helmet title="About the Book | Chaitanya Das Ma" />
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Philosophical Poetry`,
                                    spanFirst:``,
                                    imgSrc: Book1,
                                    id:'',
                                    content:
                                    `
                                        <p>
                                        Whoever you may or may not be as a reader of these words of wisdom in this book, everything you experience while reading this book is a positive experience. It is an accomplishment as a writer and reader equally.
                                        </p>

                                        <p>
                                        And so it is, abracadabra.
                                        </p>
                                    `,

                                    ebooks:{
                                        stratton:'#',
                                        barnes:'https://www.barnesandnoble.com/w/philosophical-poetry-chaitanya-das-ma/1137619716?ean=9781648951756',
                                        amazon:'https://www.amazon.com/dp/B08HSP7BH3/ref=sr_1_1?dchild=1&keywords=9781648951756&qid=1599769837&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Philosophical-Poetry-Chaitanya-Das-Ma/dp/1648951740/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1600197365&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/philosophical-poetry-chaitanya-das-ma/1137619716?ean=9781648951749',
                                        booksamillion:'https://www.booksamillion.com/p/Philosophical-Poetry/Chaitanya-Das-Ma/9781648951749?id=8147396224924',
                                    }
                                }} 
                            />

                            <div className="commentSection">
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;