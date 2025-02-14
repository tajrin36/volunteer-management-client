import { Link } from "react-router";
import Carousel from "../components/Carousel";
import VolunteerBadges from "../components/VolunteerBadges";

import card1 from '../assets/card_1.1.jpg'

const Home = () => {

    const volunteerNeeds = [
        {
            id: 1,
            thumbnail: "https://via.placeholder.com/150",
            title: "Food Distribution",
            category: "Community Service",
            deadline: "2025-02-20",
        },
        {
            id: 2,
            thumbnail: "https://via.placeholder.com/150",
            title: "Beach Cleanup",
            category: "Environment",
            deadline: "2025-02-18",
        },
        {
            id: 3,
            thumbnail: "https://via.placeholder.com/150",
            title: "Blood Donation Drive",
            category: "Health",
            deadline: "2025-02-22",
        },
        {
            id: 4,
            thumbnail: {card1},
            title: "Animal Shelter Help",
            category: "Animal Care",
            deadline: "2025-02-15",
        },
        {
            id: 5,
            thumbnail: "https://via.placeholder.com/150",
            title: "Tutoring for Kids",
            category: "Education",
            deadline: "2025-02-17",
        },
        {
            id: 6,
            thumbnail: "https://via.placeholder.com/150",
            title: "Senior Home Assistance",
            category: "Social Work",
            deadline: "2025-02-19",
        },
    ];

    const sortedNeeds = [...volunteerNeeds].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    return (
        <div className="container mx-auto">
            <Carousel></Carousel>
            <VolunteerBadges></VolunteerBadges>

            <section className="container mx-auto my-10 px-4">
                <h2 className="text-3xl font-bold text-center mb-6">🚀 Volunteer Needs Now</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {sortedNeeds.map((post) => (
                        <div key={post.id} className="card bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={post.thumbnail} alt={post.title} className="w-full h-40 object-cover" />

                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{post.title}</h3>
                                <p className="text-sm text-gray-500">{post.category}</p>
                                <p className="text-sm font-medium text-red-500 mt-2">⏳ Deadline: {post.deadline}</p>

                                <Link to={`/volunteer/${post.id}`} className="mt-3 block bg-[#eca12c] text-white text-center py-2 rounded-md hover:bg-[#d84315] transition">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See All Button */}
                <div className="text-center mt-8">
                    <Link to="/allVolunteer" className="bg-[#eca12c] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#d47f1e] transition">
                        See All
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;