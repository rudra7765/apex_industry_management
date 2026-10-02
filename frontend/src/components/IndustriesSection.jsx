function IndustriesSection() {

    const industries = [
        {
            number: "01",
            name: "Automotive",
            description:
                "Precision engineering and manufacturing solutions supporting modern automotive operations."
        },
        {
            number: "02",
            name: "Construction",
            description:
                "Reliable industrial solutions designed for demanding construction and infrastructure projects."
        },
        {
            number: "03",
            name: "Pharmaceutical",
            description:
                "Quality-focused engineering solutions designed for controlled and efficient pharmaceutical environments."
        },
        {
            number: "04",
            name: "Power & Energy",
            description:
                "Dependable solutions supporting energy generation, distribution and industrial power systems."
        },
        {
            number: "05",
            name: "Manufacturing",
            description:
                "Efficient engineering solutions that improve productivity, reliability and manufacturing performance."
        },
        {
            number: "06",
            name: "Infrastructure",
            description:
                "Scalable industrial solutions built to support complex infrastructure and development projects."
        }
    ];

    return (
        <section className="py-20 md:py-24 px-6 bg-slate-50">

            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="max-w-3xl mx-auto text-center mb-14">

                    <p className="text-orange-500 font-bold tracking-widest text-sm uppercase">
                        Industries We Serve
                    </p>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
                        Solutions Built for
                        <span className="text-orange-500"> Every Industry</span>
                    </h2>

                    <div className="w-20 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>

                    <p className="text-slate-600 leading-7 mt-6">
                        Our engineering expertise enables us to deliver
                        reliable, efficient and industry-specific solutions
                        across a wide range of industrial sectors.
                    </p>

                </div>


                {/* Industries Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {industries.map((industry) => (

                        <div
                            key={industry.number}
                            className="group relative bg-white border border-slate-200 rounded-2xl p-7 overflow-hidden hover:border-orange-400 hover:shadow-xl transition-all duration-300"
                        >

                            {/* Background Number */}
                            <span className="absolute -right-2 -top-5 text-8xl font-black text-slate-100 group-hover:text-orange-50 transition-colors duration-300">
                                {industry.number}
                            </span>


                            {/* Number Badge */}
                            <div className="relative w-11 h-11 flex items-center justify-center rounded-lg bg-orange-100 text-orange-600 font-bold group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                {industry.number}
                            </div>


                            {/* Content */}
                            <div className="relative">

                                <h3 className="text-xl font-bold text-slate-900 mt-6 group-hover:text-orange-500 transition-colors">
                                    {industry.name}
                                </h3>

                                <p className="text-slate-600 text-sm leading-6 mt-3">
                                    {industry.description}
                                </p>

                            </div>


                            {/* Bottom Arrow */}
                            <div className="relative mt-6 flex items-center gap-2 text-sm font-semibold text-slate-500 group-hover:text-orange-500 transition-colors">

                                <span>
                                    Explore Solutions
                                </span>

                                <span className="group-hover:translate-x-1 transition-transform duration-300">
                                    →
                                </span>

                            </div>

                        </div>

                    ))}

                </div>


                {/* Bottom CTA */}
                <div className="mt-14 text-center">

                    <p className="text-slate-600">
                        Looking for a solution tailored to your industry?
                    </p>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        Discuss Your Requirement
                        <span>→</span>
                    </a>

                </div>

            </div>

        </section>
    );
}

export default IndustriesSection;


// function IndustriesSection() {

//     const industries = [
//         "Automotive",
//         "Construction",
//         "Pharmaceutical",
//         "Power & Energy",
//         "Manufacturing",
//         "Infrastructure"
//     ];

//     return (
//         <section className="py-20 px-6 bg-white">

//             <div className="max-w-7xl mx-auto">

//                 <div className="text-center mb-12">

//                     <p className="text-orange-500 font-semibold">
//                         INDUSTRIES WE SERVE
//                     </p>

//                     <h2 className="text-3xl md:text-4xl font-bold mt-3">
//                         Solutions Across Industries
//                     </h2>

//                 </div>


//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

//                     {industries.map((industry, index) => (

//                         <div
//                             key={index}
//                             className="border border-slate-200 rounded-xl p-6 text-center hover:border-orange-400 hover:shadow-md transition"
//                         >
//                             <h3 className="font-semibold text-slate-800">
//                                 {industry}
//                             </h3>
//                         </div>

//                     ))}

//                 </div>

//             </div>

//         </section>
//     );
// }

// export default IndustriesSection;