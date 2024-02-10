import React from 'react'

function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            You! Yes You! You deserve a break
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Break time is not a platform it is a feeling of relaxation for 
                            People with a cause. So don't put so much pressure over yourself. You 
                            shall achieve the aim you are looking for.But Remember! Don't get caried away with
                            breaks because breaks are temperary and life is permanent.
                        </p>
                        <p className="mt-4 text-gray-600">
                            I spent a lot of effort to bring such a free platform. I really don't need
                            any appriciation from you guys. Just share the links with your best friends, crush
                            and class groups. Because they also deserve some break. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About