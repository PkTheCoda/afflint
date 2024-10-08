import React from "react";

export default function About() {
    return (
        <>
            <div className="bg-main font-outfit">
                <div className="max-w-[75rem] mx-auto flex flex-col gap-y-4">

                    <div className="seven-title tracking-tight font-medium text-center">
                        Our <span className="text-secondary">Beliefs</span>
                    </div>

                    <div className="py-10 grid grid-cols-2 gap-10">
                        
                        <div className="flex flex-row items-center gap-x-4">
                            <h1 className="eight-title text-slate-200 font-bold">
                                01
                            </h1>
                            <p className="text-xl font-fig font-semibold text-slate-600">
                                Capitalism works through creative disruption, and competition 
                                will naturally destroy many businesses while strengthening others
                            </p>
                        </div>

                        <div className="flex flex-row items-center gap-x-4">
                            <h1 className="eight-title text-slate-200 font-bold">
                                02
                            </h1>
                            <p className="text-xl font-fig font-semibold text-slate-600">
                                Active stock picking might outperform for short stretches of time, 
                                but very few stock pickers maintain this level of performance yearly.
                            </p>
                        </div>

                        <div className="flex flex-row items-center gap-x-4">
                            <h1 className="eight-title text-slate-200 font-bold">
                                03
                            </h1>
                            <p className="text-xl font-fig font-semibold text-slate-600">
                                A partnership is key. Our job is applying our research-backed 
                                strategies consistently, and our clients' more difficult job is 
                                to stay the course.
                            </p>
                        </div>

                        <div className="flex flex-row items-center gap-x-4">
                            <h1 className="eight-title text-slate-200 font-bold">
                                04
                            </h1>
                            <p className="text-xl font-fig font-semibold text-slate-600">
                                Human judgment + Data-driven insights together are more powerful than each 
                                individually.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}