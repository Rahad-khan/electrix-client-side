import React from 'react';
import question from '../../images/question.jpg'

const Faq = () => {
    return (
        <>
            <h1 className="text-2xl text-center font-semibold mb-10 md:text-4xl">
                <span className="border-b-[2px] border-orange-700">QUESTION &amp; ANSWER</span>
            </h1>
            <div className='grid md:grid-cols-2 content-center'>
                <div className='flex flex-col justify-center items-center'>
                    <div class="collapse collapse-arrow">
                        <input type="checkbox" />
                        <div class="collapse-title text-xl font-semibold">
                            Interested in tools authetication?
                        </div>
                        <div class="collapse-content">
                            <p>All are tools are 100% authentic.those are made in our factory.We don't import any of tools from others.So we hope that it will grow your belive in our tools</p>
                        </div>
                    </div>
                    <div class="collapse collapse-arrow">
                        <input type="checkbox" />
                        <div class="collapse-title text-xl font-semibold">
                            Product Purchase?
                        </div>
                        <div class="collapse-content">
                            <p>For purchase any of tools available in site you need to first a user account and when you want to purchase it will stored in Dashboard &rArr; My orders</p>
                        </div>
                    </div>
                    <div class="collapse collapse-arrow">
                        <input type="checkbox" />
                        <div class="collapse-title text-xl font-semibold">
                            Final Payment And Shipment?
                        </div>
                        <div class="collapse-content">
                            <p>In Dashboard &rArr; My orders section each tools you want to purchase have some information. after your payment is successful.Our shipment criteria will started as soon as possible</p>
                        </div>
                    </div>
                    <div class="collapse collapse-arrow">
                        <input type="checkbox" />
                        <div class="collapse-title text-xl font-semibold">
                            Orders and Shipment Time ?
                        </div>
                        <div class="collapse-content">
                            <p>After completing orders we gauranteed to give products within 24 to 72 hours workday. We are very sincire about shipment process</p>
                            <p>Customer satisfaction is our aim</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={question} className='rounded-2xl w-full' alt="question" />
                </div>
            </div>
        </>
    );
};

export default Faq;