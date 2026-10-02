function AboutSection() {
    return (
        <section className="py-20 md:py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Heading & Introduction */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Content */}
                    <div>
                        <p className="text-orange-500 font-bold tracking-widest text-sm uppercase">
                            About Us
                        </p>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mt-3">
                            Engineering Excellence
                            <span className="text-orange-500"> Since Day One</span>
                        </h2>

                        <div className="w-20 h-1 bg-orange-500 mt-6 rounded-full"></div>

                        <p className="text-slate-500 mt-6 text-lg leading-8">
                            Building smarter industrial solutions with
                            precision, reliability and a commitment to
                            long-term customer success.
                        </p>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-5">
                        <p className="text-slate-600 leading-8">
                            <span className="font-semibold text-slate-900">
                                Apex Industrial Solutions
                            </span>{" "}
                            delivers engineering and manufacturing solutions
                            designed to improve productivity, reliability and
                            operational efficiency across modern industrial
                            environments.
                        </p>

                        <p className="text-slate-600 leading-8">
                            From engineering consultation and precision
                            manufacturing to installation and technical
                            support, our team focuses on delivering practical
                            solutions that meet real-world industrial
                            requirements.
                        </p>

                        <p className="text-slate-600 leading-8">
                            We work closely with our customers to understand
                            their challenges, develop efficient solutions and
                            maintain the highest standards of quality,
                            performance and safety.
                        </p>
                    </div>
                </div>


                {/* Company Highlights */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

                    {/* Card 1 */}
                    <div className="group border border-slate-200 rounded-xl p-6 bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-500 text-xl font-bold group-hover:bg-orange-500 group-hover:text-white transition">
                            01
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mt-5">
                            Engineering Expertise
                        </h3>

                        <p className="text-sm text-slate-600 leading-6 mt-2">
                            Experienced professionals delivering technically
                            sound and practical industrial solutions.
                        </p>
                    </div>


                    {/* Card 2 */}
                    <div className="group border border-slate-200 rounded-xl p-6 bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-500 text-xl font-bold group-hover:bg-orange-500 group-hover:text-white transition">
                            02
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mt-5">
                            Quality Focus
                        </h3>

                        <p className="text-sm text-slate-600 leading-6 mt-2">
                            Consistent attention to quality, precision and
                            reliable performance at every stage.
                        </p>
                    </div>


                    {/* Card 3 */}
                    <div className="group border border-slate-200 rounded-xl p-6 bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-500 text-xl font-bold group-hover:bg-orange-500 group-hover:text-white transition">
                            03
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mt-5">
                            Customer Focus
                        </h3>

                        <p className="text-sm text-slate-600 leading-6 mt-2">
                            We understand customer requirements and create
                            solutions aligned with their business goals.
                        </p>
                    </div>


                    {/* Card 4 */}
                    <div className="group border border-slate-200 rounded-xl p-6 bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-500 text-xl font-bold group-hover:bg-orange-500 group-hover:text-white transition">
                            04
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mt-5">
                            Reliable Support
                        </h3>

                        <p className="text-sm text-slate-600 leading-6 mt-2">
                            Dedicated technical support and dependable service
                            throughout the project lifecycle.
                        </p>
                    </div>

                </div>


                {/* Bottom Statement */}
                <div className="mt-16 bg-slate-900 rounded-2xl px-8 py-10 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                    <div>
                        <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                            Our Commitment
                        </p>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                            Precision. Performance. Partnership.
                        </h3>

                        <p className="text-slate-300 mt-3 max-w-2xl leading-7">
                            We believe successful engineering is not just about
                            delivering a product — it is about creating
                            dependable solutions that continue to deliver value
                            for years to come.
                        </p>
                    </div>

                    <div className="shrink-0">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                        >
                            Talk to Our Team
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default AboutSection;




// function AboutSection() {
//     return (
//         <section className="py-20 px-6 bg-white">

//             <div className="max-w-7xl mx-auto">

//                 <div className="grid md:grid-cols-2 gap-12 items-center">

//                     <div>

//                         <p className="text-orange-500 font-semibold">
//                             ABOUT US
//                         </p>

//                         <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
//                             Engineering Excellence Since Day One
//                         </h2>

//                     </div>

//                     <div>

//                         <p className="text-slate-600 leading-7">
//                             Apex Industrial Solutions delivers
//                             engineering and manufacturing solutions
//                             designed to improve productivity,
//                             reliability and operational efficiency.
//                         </p>

//                         <p className="text-slate-600 leading-7 mt-4">
//                             Our team works closely with customers to
//                             understand their requirements and deliver
//                             practical industrial solutions.
//                         </p>

//                     </div>

//                 </div>

//             </div>

//         </section>
//     );
// }

// export default AboutSection;