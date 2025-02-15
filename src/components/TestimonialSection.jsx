const testimonials = [
    {
        name: "Olivia",
        role: "Volunteer",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        feedback:
            "Volunteering here has been a life-changing experience. Seeing the impact of our efforts firsthand is truly rewarding!",
    },
    {
        name: "Benjamin",
        role: "Volunteer",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        feedback:
            "The team is so supportive, and the projects are well-organized. I'm proud to be part of this community!",
    },
    {
        name: "William",
        role: "CEO",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        feedback:
            "Our mission is to bring positive change, and with dedicated volunteers, we've been able to make a real difference.",
    },
];

const stats = [
    { number: "200K", label: "Received Donations" },
    { number: "90K", label: "Projects Done" },
    { number: "20K", label: "People We Helped" },
    { number: "10.7K", label: "Number We Solved" },
];

const TestimonialSection = () => {
    return (
        <div className="bg-gradient-to-b from-[#fefae0] to-[#fae1dd] py-16 px-4 mb-10">
            {/* Header */}
            <div className="text-center mb-10">
                <span className="text-sm font-semibold bg-[#eca12c] text-white py-1 px-3 rounded-full">🎤 TESTIMONIAL</span>
                <h2 className="text-4xl font-bold text-gray-800 mt-3">What They Say About Us</h2>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </p>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200">
                        <p className="italic text-gray-600">"{testimonial.feedback}"</p>
                        <div className="mt-4 flex items-center justify-center gap-2">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-10 h-10 rounded-full border-2 border-[#eca12c]"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-[#d47f1e]">{testimonial.name}</h3>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Impact Stats */}
            <div className="grid md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white shadow-md py-6 rounded-lg border-t-4 border-[#eca12c]">
                        <h3 className="text-3xl font-bold text-[#d84315]">{stat.number}</h3>
                        <p className="text-gray-600 text-sm font-medium mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialSection;
