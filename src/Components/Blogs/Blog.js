import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className="row  mt-5">

            <div className="col-md-9 mx-auto ">
                <div className='bg-secondary text-white p-4'>
                    <h4>Difference between Node.JS and Javascript ?</h4>
                    JavaScript is a programming language but NodeJS is a JavaScript runtime environment. Javascript used for client-side and it is frontend development but NodeJS used for server-side and it is server-side development.JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.

                </div>

                <div className=" mt-5 bg-secondary text-white p-4">
                    <h4>Difference between SQL and NoSQL?</h4>
                    SQL databases are primarily called RDBMS or Relational Databases But,NoSQL databases are primarily called as Non-relational or distributed database. SQL databases are table-based and NoSQL databases are document, key-value, graph, or wide-column stores.SQL means Structured query language(SQL) but,NoSQL is no declarative query language.
                    SQL databases are vertically scalable but,NoSQL databases are horizontally scalable
                </div>
                <div className=" mt-5 bg-secondary text-white p-4">
                    <h2> What is the purpose of jwt and how does it work ?</h2>
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. </p>
                </div>
                <div className=" mt-5 bg-secondary text-white p-4">
                    <h2>When should we use NodeJS and when should we use MongoDB?</h2>
                    <p>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind. So when we need to do backend development, that's a good time for use Nodejs.
                        <br />
                        MongoDB facilitate to store database in json(javascript object notation) (or simply when data in form of key value pair) this is very fast and efficient so you should use it when you have key value pair to store(json data)
                    </p>

                </div>
                <br />
            </div>

        </div>


    );
};

export default Blog;