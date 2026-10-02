function WhyChooseUs() {

    const reasons = [
        {
            number: "01",
            title: "Experienced Engineering Team",
            description:
                "Our skilled professionals bring practical engineering knowledge and industry experience to every project."
        },
        {
            number: "02",
            title: "Quality-Focused Manufacturing",
            description:
                "We maintain consistent quality standards with attention to precision, performance and durability."
        },
        {
            number: "03",
            title: "Reliable Technical Support",
            description:
                "Our team provides dependable technical assistance to help customers keep their operations running efficiently."
        },
        {
            number: "04",
            title: "On-Time Project Delivery",
            description:
                "Structured planning and efficient execution help us deliver projects according to agreed timelines."
        }
    ];

    return (
        <section className="relative py-20 md:py-24 px-6 bg-slate-900 text-white overflow-hidden">

            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto">

                {/* Heading */}
                <div className="max-w-3xl">

                    <p className="text-orange-400 font-bold tracking-widest text-sm uppercase">
                        Why Choose Us
                    </p>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
                        Built Around
                        <span className="text-orange-400"> Quality & Reliability</span>
                    </h2>

                    <div className="w-20 h-1 bg-orange-500 mt-6 rounded-full"></div>

                    <p className="text-slate-400 mt-6 text-lg leading-8 max-w-2xl">
                        We combine engineering expertise, quality-driven
                        processes and customer-focused service to deliver
                        dependable industrial solutions.
                    </p>

                </div>


                {/* Reasons */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">

                    {reasons.map((reason) => (

                        <div
                            key={reason.number}
                            className="group relative bg-slate-800/60 border border-slate-700 rounded-2xl p-7 hover:border-orange-500/60 hover:bg-slate-800 transition-all duration-300"
                        >

                            {/* Number */}
                            <div className="flex items-center justify-between">

                                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 font-bold group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                    {reason.number}
                                </div>

                                <span className="text-5xl font-black text-slate-700/50 group-hover:text-orange-500/10 transition-colors">
                                    {reason.number}
                                </span>

                            </div>


                            {/* Content */}
                            <h3 className="text-lg font-bold mt-7 text-white group-hover:text-orange-400 transition-colors">
                                {reason.title}
                            </h3>

                            <p className="text-slate-400 text-sm leading-6 mt-3">
                                {reason.description}
                            </p>


                            {/* Bottom Line */}
                            <div className="w-0 h-0.5 bg-orange-500 mt-6 group-hover:w-full transition-all duration-500"></div>

                        </div>

                    ))}

                </div>


                {/* Bottom Trust Statement */}
                <div className="mt-16 pt-10 border-t border-slate-700 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                    <div>
                        <p className="text-orange-400 text-sm font-semibold uppercase tracking-wider">
                            Our Promise
                        </p>

                        <h3 className="text-2xl font-bold mt-2">
                            Engineering solutions you can depend on.
                        </h3>
                    </div>

                    <p className="text-slate-400 max-w-xl leading-7">
                        From initial consultation to project completion and
                        ongoing support, we remain focused on delivering
                        consistent value and dependable performance.
                    </p>

                </div>

            </div>

        </section>
    );
}

export default WhyChooseUs;



// function WhyChooseUs() {

//     const reasons = [
//         "Experienced Engineering Team",
//         "Quality-Focused Manufacturing",
//         "Reliable Technical Support",
//         "On-Time Project Delivery"
//     ];

//     return (
//         <section className="py-20 px-6 bg-slate-900 text-white">

//             <div className="max-w-7xl mx-auto">

//                 <div className="max-w-2xl">

//                     <p className="text-orange-400 font-semibold">
//                         WHY CHOOSE US
//                     </p>

//                     <h2 className="text-3xl md:text-4xl font-bold mt-3">
//                         Built Around Quality and Reliability
//                     </h2>

//                 </div>


//                 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

//                     {reasons.map((reason, index) => (

//                         <div
//                             key={index}
//                             className="border border-slate-700 rounded-xl p-6"
//                         >

//                             <div className="text-orange-400 text-2xl font-bold">
//                                 0{index + 1}
//                             </div>

//                             <h3 className="font-semibold mt-5">
//                                 {reason}
//                             </h3>

//                         </div>

//                     ))}

//                 </div>

//             </div>

//         </section>
//     );
// }

// export default WhyChooseUs;