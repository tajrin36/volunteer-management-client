import Carousel from "../components/Carousel";
import VolunteerBadges from "../components/VolunteerBadges";
import { useEffect, useState } from "react";
import axios from "axios";
import VolunteerCard from "../components/VolunteerCard";
import { Link } from "react-router";

const Home = () => {

    const [volunteers, setVolunteers] = useState([])
    useEffect(() => {
        fetchAllVolunteers();
    }, [])

    const fetchAllVolunteers = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/volunteers`);

            // Sorting based on deadline (ascending order)
            const sortedVolunteers = data.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

            // Show only the first 6
            setVolunteers(sortedVolunteers.slice(0, 6));
        } catch (error) {
            console.error("Error fetching volunteers:", error);
        }
    }




    return (
        <div className="container mx-auto">
            <Carousel></Carousel>
            <VolunteerBadges></VolunteerBadges>

            <div className="my-10 px-4">
                <h2 className="text-3xl font-bold text-center mb-6">🚀 Volunteer Needs Now</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {volunteers.map(volunteer => <VolunteerCard key={volunteer._id} volunteer={volunteer}></VolunteerCard>)}
                </div>
                <div className="text-center mt-8">
                    <Link to="/allVolunteer" className="bg-[#eca12c] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#d47f1e] transition">
                        See All
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default Home;