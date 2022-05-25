import React from 'react';

const Blog = () => {
    return (
        <div className="px-3 lg:px-12 my-10">
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div class="card bg-base-100 max-w-fit shadow-xl">
                    <div class="card-body">
                        <article>
                            <h1 className='font-semibold text-xl mb-4'>How will you improve the performance of a React Application?</h1>
                            <ul className='list-inside list-disc'>
                                <li>keep data on useState when necessary</li>
                                <li>Memoizing components for prevent unnecessary re-renders</li>
                                <li>Code-splitting using dynamic import()</li>
                                <li>Low size image used in site</li>
                            </ul>
                        </article>
                    </div>
                </div>
                <div class="card bg-base-100 max-w-fit  shadow-xl">
                    <div class="card-body">
                        <article>
                            <h1 className='font-semibold text-xl mb-4'>What are the different ways to manage a state in a React application?</h1>
                            <p><strong>There are four type of states available in react</strong></p>
                            <ul className='list-inside list-decimal'>
                                <li>Local state</li>
                                <li>Global state</li>
                                <li>Server state</li>
                                <li>URL state</li>
                            </ul>
                            <p>Local state used for set a data like useState is a local sate.</p>
                            <p>Global state means those data which we used from anywhere of our components. <br />
                                such as create any hook like use hook
                            </p>
                            <p>Server state means load data out of our react apps . in this thime we can use useEffect state</p>
                            <p>Data that exists on our URLs, including the pathname and query parameters.</p>
                        </article>
                    </div>
                </div>
                <div class="card bg-base-100 max-w-fit  shadow-xl">
                    <div class="card-body">
                        <article>
                            <h1 className='font-semibold text-xl mb-4'>How does prototypical inheritance work?</h1>

                            <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                            <p>JavaScript does not have "methods" in the form that class-based languages define them. In JavaScript, any function can be added to an object in the form of a property. An inherited function acts just as any other property, including property shadowing as shown above (in this case, a form of method overriding).</p>
                        </article>
                    </div>
                </div>
                <div class="card bg-base-100 max-w-fit  shadow-xl">
                    <div class="card-body">
                        <article>
                            <h1 className='font-semibold text-xl mb-4'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                            <p>Firstly i create a input field which take search value what i looking for and then i do filter mathod on array with includes method of the name property which value are matched those are return back to an array and i will show the result in UI</p>
                        </article>
                    </div>
                </div>
                <div class="card bg-base-100 max-w-fit  shadow-xl">
                    <div class="card-body">
                        <article>
                            <h1 className='font-semibold text-xl mb-4'>What is a unit test? Why should write unit tests?</h1>
                            <p>UNIT testing is a type of testing where individual components of a apps are tested. The purpose is to validate that each unit of the apps code performs as expected. Unit Testing is done during the development </p>
                            <p>Unit Testing is important because it saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;