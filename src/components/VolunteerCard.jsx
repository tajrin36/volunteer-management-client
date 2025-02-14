import { Link } from "react-router";

const VolunteerCard = ({ volunteer }) => {

    const {
        thumbnail,
        post_title,
        // description,
        category,
        // location,
        // volunteers_needed,
        deadline
    } = volunteer || {};


    // const sortedNeeds = [...volunteerNeeds].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    return (
        <div>
            <section className="container mx-auto my-10 px-4">

            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
            <img src={thumbnail} alt={post_title} className="w-full h-48 object-cover" />

            <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800">{post_title}</h3>
                <p className="text-sm text-gray-600 mt-1">Category: <span className="font-medium text-gray-800">{category}</span></p>
                <p className="text-sm font-medium text-red-500 mt-2">⏳ Deadline: {deadline}</p>

                <div className="flex justify-center mt-4">
                    <Link to="/volunteer-details" className="bg-[#eca12c] text-white px-5 py-2 rounded-md font-medium hover:bg-[#d47f1e] transition-all">
                        View Details
                    </Link>
                </div>
            </div>
        </div>

                {/* See All Button */}
                <div className="text-center mt-8">
                    {/* <Link to="/allVolunteer" className="bg-[#eca12c] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#d47f1e] transition">
                        See All
                    </Link> */}
                </div>
            </section>
        </div>
    );
};

export default VolunteerCard;