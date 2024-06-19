import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Blog.css';
import blog1 from '../../assets/BlogImg/blog1.png';
import blog2 from '../../assets/BlogImg/blog2.png';
import blog3 from '../../assets/BlogImg/blog3.png';
import blog4 from '../../assets/BlogImg/blog4.png';

const Blog = () => {
    return (
        <div className='blog'>
            <Helmet>
                <title>Blog {`-- FlyTo-Grapher`}</title>
            </Helmet>
            <h2 className="text-3xl font-bold font-serif text-center py-4 blog-title">Some Essainail Blog</h2>

            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-7 py-4 blog-container'>
                <div className='blog_main'>
                    <img src={blog1} alt="" />
                    <h1 className='text-[#287d8f] text-xl font-semibold my-2'>Difference between SQL and NoSQL</h1>
                    <div>
                        <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                        <li>Language</li>
                        <li>Scalability</li>
                        <li>Structure</li>
                        <li>Properties</li>
                        <li>Support and communities</li>
                    </div>
                </div>

                <div className='blog_main'>
                    <img src={blog2} alt="" />
                    <h1 className='text-[#287d8f] text-xl font-semibold my-2'>What is JWT, and how does it work?</h1>
                    <p>JSON Web Token (JWT) is an open standard ,Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</p>
                </div>

                <div className='blog_main'>
                    <img src={blog3} alt="" />
                    <h1 className='text-[#287d8f] text-xl font-semibold my-2'>What is the difference between javascript and NodeJS?</h1>
                    <div>
                        <p><span className='font-bold :'>NodeJs</span> NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</p>
                        <p><span className='font-bold'>JavaScript:</span> Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                    </div>
                </div>

                <div className='blog_main'>
                    <img src={blog4} alt="" />
                    <h1 className='text-[#287d8f] text-xl font-semibold my-2'>How does NodeJS handle multiple requests at the same time?</h1>
                    <p> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;


