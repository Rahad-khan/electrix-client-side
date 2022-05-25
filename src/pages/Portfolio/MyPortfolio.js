import React from 'react';

const MyPortfolio = () => {
    return (
        <div className="px-3 lg:px-12 my-10 flex justify-center items-center">
            <div className="card bg-base-100 max-w-fit  shadow-xl">
                <div className="card-body">
                    <div className='flex items-center justify-center flex-col'>
                        <h2 className="text-2xl font-semibold italic m-0">K.M. Rahad</h2>
                        <p className='italic m-0'>Email: <a href="mailto:kmrahad12@gmail.com"><span className='link link-primary'>kmrahad12@gmail.com</span></a></p>
                    </div>
                    <article>
                        <h2 className='text-xl font-medium'>Education</h2>
                        <ul className='list-disc list-inside'>
                            <li>Pabna Textile Engineering College, Pabna</li>
                            <li>B.sc in Textile Engineering</li>
                        </ul>
                    </article>
                    <article>
                        <h2 className='text-xl font-medium'>Skills</h2>
                        <ul className='list-disc list-inside'>
                            <li><strong>Expertise:</strong> React.js, JavaScript, HTML, CSS, Bootstrap,Tailwind,ES6</li>
                            <li><strong>Comfortable:</strong> React Router, JWT Auth,  MongDB.</li>
                            <li><strong>Familiar:</strong> Payment Getways, Typescript , Node,Js ,Express Js,, Context A.P.I</li>
                            <li><strong>Tools:</strong> Github , VS Code , Chrome Dev Tool, Heroku, Netlify, NPM, Yarn, Figma, Git.</li>
                        </ul>
                    </article>
                    <div>
                        <h2 className='text-2xl font-semibold'>PROJECTS</h2>
                        <article>
                            <h2 className='text-xl font-semibold'>Auto Cars</h2>
                            <a className='link link-primary' href="https://auto-cars-b3b7a.web.app/" target={`_blank`}>➤ Live Site </a>
                            <ul className='list-disc list-inside'>
                                <h1 className='text-lg font-semibold'>Features</h1>
                                <li>Authentication system added. A valid user have some power to add products and stock product</li>
                                <li>Valid User can add cars as he/ she want to stock car.</li>
                                <li>Email – Password base authentication features with email verification.</li>
                                <li><strong>Used:</strong> React.js, Node.js, Express.js, MongoDB, Firebase Authentication, Tailwind, React Router</li>
                            </ul>
                        </article>
                        <article>
                            <h2 className='text-xl font-semibold'>TODO Apps</h2>
                            <a className='link link-primary' href="https://todo-8bc38.web.app/" target={`_blank`}>➤ Live Site </a>
                            <ul className='list-disc list-inside'>
                                <h1 className='text-lg font-semibold'>Features</h1>
                                <li>User can add notes when user want.</li>
                                <li>Login base used system.</li>
                                <li>After completing task user should add complete status and
                                    Also delete this task</li>
                                <li><strong>Used:</strong> React.js, Tailwind, Node.js, MongoDB,Firebase Authentication.</li>
                            </ul>
                        </article>
                        <article>
                            <h2 className='text-xl font-semibold'>Medi Line</h2>
                            <a className='link link-primary' href="https://medi-line-203b8.web.app/" target={`_blank`}>➤ Live Site </a>
                            <ul className='list-disc list-inside'>
                                <h1 className='text-lg font-semibold'>Features</h1>
                                <li>A Doctors single service website.</li>
                                <li>Firebase Auth System add for users.</li>
                                <li>Email – Password base authentication features with email verification.</li>
                                <li><strong>Used:</strong> React.js, React Router, Tailwind, Firebase Authentication</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;