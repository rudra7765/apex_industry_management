function ContactSection() {

    return (
        <div className="bg-white text-slate-900">
            {/* CONTACT CONTENT */}
            <section className="py-20 px-6 bg-slate-50">

                <div className="max-w-7xl mx-auto">

                    <div className="grid lg:grid-cols-5 gap-10">


                        {/* CONTACT INFORMATION */}
                        <div className="lg:col-span-2">

                            <p className="text-orange-500 font-bold tracking-widest text-sm uppercase">
                                Get In Touch
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold mt-3">
                                We're Here to Help
                            </h2>

                            <p className="text-slate-600 leading-7 mt-4">
                                Contact us for engineering, manufacturing or
                                customized industrial solutions.
                            </p>


                            <div className="space-y-6 mt-8">

                                {/* Email */}
                                <div className="flex gap-4">

                                    <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-lg bg-orange-100 text-orange-500 font-bold">
                                        @
                                    </div>

                                    <div>
                                        <p className="text-sm text-slate-500">
                                            Email
                                        </p>

                                        <a
                                            href="mailto:info@apexindustrial.com"
                                            className="font-semibold hover:text-orange-500 transition"
                                        >
                                            info@apexindustrial.com
                                        </a>
                                    </div>

                                </div>


                                {/* Phone */}
                                <div className="flex gap-4">

                                    <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-lg bg-orange-100 text-orange-500 font-bold">
                                        ☎
                                    </div>

                                    <div>
                                        <p className="text-sm text-slate-500">
                                            Phone
                                        </p>

                                        <a
                                            href="tel:+919999999999"
                                            className="font-semibold hover:text-orange-500 transition"
                                        >
                                            +91 99999 99999
                                        </a>
                                    </div>

                                </div>


                                {/* Office */}
                                <div className="flex gap-4">

                                    <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-lg bg-orange-100 text-orange-500 font-bold">
                                        ●
                                    </div>

                                    <div>
                                        <p className="text-sm text-slate-500">
                                            Office
                                        </p>

                                        <p className="font-semibold leading-6">
                                            Industrial Area, New Delhi,
                                            India
                                        </p>
                                    </div>

                                </div>


                                {/* Hours */}
                                <div className="flex gap-4">

                                    <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-lg bg-orange-100 text-orange-500 font-bold">
                                        ◷
                                    </div>

                                    <div>
                                        <p className="text-sm text-slate-500">
                                            Business Hours
                                        </p>

                                        <p className="font-semibold">
                                            Mon – Sat
                                        </p>

                                        <p className="text-sm text-slate-600">
                                            9:00 AM – 6:00 PM
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* CONTACT FORM */}
                        <div className="lg:col-span-3">

                            <div className="bg-white border border-slate-200 rounded-2xl p-7 md:p-9 shadow-sm">

                                <p className="text-orange-500 font-bold text-sm uppercase tracking-wider">
                                    Send a Message
                                </p>

                                <h3 className="text-2xl md:text-3xl font-bold mt-2">
                                    Tell Us About Your Project
                                </h3>


                                <form className="space-y-5 mt-7">

                                    {/* Name + Email */}
                                    <div className="grid md:grid-cols-2 gap-5">

                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                                        />

                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                                        />

                                    </div>


                                    {/* Phone + Company */}
                                    <div className="grid md:grid-cols-2 gap-5">

                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                                        />

                                        <input
                                            type="text"
                                            placeholder="Company Name"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                                        />

                                    </div>


                                    {/* Service */}
                                    <select
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-700 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                                    >

                                        <option value="">
                                            Select Service
                                        </option>

                                        <option>
                                            Engineering Solutions
                                        </option>

                                        <option>
                                            Manufacturing
                                        </option>

                                        <option>
                                            Industrial Consultation
                                        </option>

                                        <option>
                                            Technical Support
                                        </option>

                                    </select>


                                    {/* Message */}
                                    <textarea
                                        rows="5"
                                        placeholder="Tell us about your requirements..."
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none resize-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                                    ></textarea>


                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-2 px-7 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition"
                                    >
                                        Send Inquiry
                                        <span>→</span>
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default ContactSection;
