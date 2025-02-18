import axios from "axios";
import { useEffect, useState } from "react";
import VolunteerCard from "../components/VolunteerCard";
import { FaSearch } from "react-icons/fa";

const AllVolunteers = () => {
    const [search, setSearch] = useState('');
    const [volunteers, setVolunteers] = useState([]);
    const [filteredVolunteers, setFilteredVolunteers] = useState([]);

    useEffect(() => {
        fetchAllVolunteers();
    }, []);

    useEffect(() => {
        handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, volunteers]);

    const fetchAllVolunteers = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/volunteers`);
            setVolunteers(data);
            setFilteredVolunteers(data);
        } catch (error) {
            console.error("Error fetching volunteers:", error);
        }
    };

    const handleSearch = () => {
        const filtered = volunteers.filter(volunteer =>
            volunteer.post_title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredVolunteers(filtered);
    };

    return (
        <div className="container mx-auto px-4">
            {/* Search Input */}
            <div className="flex justify-center my-8">
                <div className="relative w-full max-w-lg">
                    <input
                        type="text"
                        placeholder="Search by Post Title..."
                        className="w-full p-3 pl-10 text-lg border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
                </div>
            </div>

            {/* Volunteer Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredVolunteers.map(volunteer => (
                    <VolunteerCard key={volunteer._id} volunteer={volunteer} />
                ))}
            </div>

            {/* No Results Message */}
            {filteredVolunteers.length === 0 && (
                <p className="text-center text-gray-500 mt-4">No volunteers found</p>
            )}
        </div>
    );
};

export default AllVolunteers;
