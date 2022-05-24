import React from "react";
import CountUp from "react-countup";
import { BsPeople, BsTools } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { MdOutlineRateReview } from "react-icons/md";

const BuisenessSummary = () => {
    return (
        <section className="my-12">
            <h1 className="text-lg md:text-2xl text-center md:font-semibold mb-10 md:md:text-4xl">
                <span className="border-b-[2px] border-orange-700">
                    Buiseness Summary
                </span>
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col justify-center items-center">
                    <BsPeople className="text-4xl md:text-6xl text-accent mb-3"></BsPeople>
                    <p className="md:text-4xl font-bold">
                        <CountUp end={150} enableScrollSpy={true} />+
                    </p>
                    <p className="text-lg md:text-xl text-accent md:font-semibold">Customers</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <GiProgression className="text-4xl md:text-6xl text-accent mb-3"></GiProgression>
                    <p className="md:text-4xl font-bold">
                        <CountUp end={125} enableScrollSpy={true} />
                        M+
                    </p>
                    <p className="text-lg md:text-xl text-accent md:font-semibold">Annual revenue</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <MdOutlineRateReview className="text-4xl md:text-6xl text-accent mb-3"></MdOutlineRateReview>
                    <p className="md:text-4xl font-bold">
                        <CountUp end={33} enableScrollSpy={true} />
                        K+
                    </p>
                    <p className="text-lg md:text-xl text-accent md:font-semibold">Reviews</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <BsTools className="text-4xl md:text-6xl text-accent mb-3"></BsTools>
                    <p className="md:text-4xl font-bold">
                        <CountUp end={100} enableScrollSpy={true} />+
                    </p>
                    <p className="text-lg md:text-xl text-accent md:font-semibold">Tools</p>
                </div>
            </div>
        </section>
    );
};

export default BuisenessSummary;
