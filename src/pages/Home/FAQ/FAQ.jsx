/* eslint-disable react/no-unescaped-entities */
import Container from "../../../Components/Container/Container";


const FAQ = () => {
    return (
        <div className="my-10">
            <h2 className="text-3xl font-bold text-center">FAQ</h2>
            <Container>
                <div className="flex flex-col md:flex-row my-20 gap-6 px-4 lg:px-0">

                    <div className="flex-1">
                        <img className="h-[620px] object-cover rounded-md  w-full" src={"https://i.ibb.co/Mc3rLHn/graphic-question-mark-asking-symbol.jpg"} alt="" />
                    </div>
                    <div className="flex-1 bg-white p-6 border shadow-xl rounded">
                        <div className="collapse collapse-arrow bg-base-200 mb-4">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                            What is an inventory management system?
                            </div>
                            <div className="collapse-content">
                                <p className="font-light">An inventory management system is a software application that helps businesses efficiently track, manage, and organize their inventory. It provides real-time insights, helps prevent stockouts or overstock situations, and contributes to overall business efficiency.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 mb-4">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                            Why do I need an inventory management system
                            </div>
                            <div className="collapse-content">
                                <p>An inventory management system is essential for businesses to maintain accurate stock levels, prevent losses from overstock or stockouts, reduce manual errors, improve order fulfillment, and gain valuable insights into inventory trends and performance.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 mb-4">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                            How does your inventory management system work?
                            </div>
                            <div className="collapse-content">
                                <p>Our inventory management system uses a combination of advanced tracking, automated processes, and intuitive interfaces. It allows you to monitor stock levels, track product movements, set reorder points, and generate insightful reports for informed decision-making</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 mb-4">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                            Is the system suitable for my business size?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, our inventory management system is designed to cater to businesses of all sizes. Whether you're a small startup or a large enterprise, our system can be customized to meet your specific needs and scale as your business grows.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 mb-4">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                            Can I integrate the inventory management system with other software?
                            </div>
                            <div className="collapse-content">
                                <p>"Absolutely! Our system is designed with integration capabilities, allowing seamless connections with other business applications such as accounting software, e-commerce platforms, and more. This ensures a unified and efficient workflow for your business.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 mb-4">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                            How secure is my data with your inventory management system?
                            </div>
                            <div className="collapse-content">
                                <p>Security is a top</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FAQ;