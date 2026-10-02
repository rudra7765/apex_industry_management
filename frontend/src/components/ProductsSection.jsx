function ProductsSection() {

    const products = [
        {
            title: "Industrial Machinery",
            description: "High-performance machinery for industrial operations."
        },
        {
            title: "Automation Systems",
            description: "Modern automation solutions for improved productivity."
        },
        {
            title: "Heavy Equipment",
            description: "Reliable equipment for demanding industrial applications."
        }
    ];

    return (
        <section
            id="products"
            className="py-20 px-6 bg-slate-50"
        >

            <div className="max-w-7xl mx-auto">

                <div className="text-center max-w-2xl mx-auto mb-12">

                    <p className="text-orange-500 font-semibold">
                        OUR PRODUCTS
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold mt-3">
                        Industrial Products
                    </h2>

                </div>


                <div className="grid md:grid-cols-3 gap-6">

                    {products.map((product, index) => (

                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition"
                        >

                            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-bold">
                                {index + 1}
                            </div>

                            <h3 className="text-xl font-bold mt-6">
                                {product.title}
                            </h3>

                            <p className="text-slate-600 mt-3 leading-6">
                                {product.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default ProductsSection;