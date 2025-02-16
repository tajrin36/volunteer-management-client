import axios from 'axios';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
import { useParams } from 'react-router';
const VolunteerPostDetails = () => {

    const [startDate, setStartDate] = useState(new Date())
    const [volunteer, setVolunteer] = useState({})
    const { id } = useParams();

    useEffect(() => {
        fetchPostData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const fetchPostData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/volunteer/${id}`)
        setVolunteer(data);
        setStartDate(new Date(data.deadline))
    }

    const {
        thumbnail,
        post_title,
        description,
        category,
        location,
        volunteers_needed,
        deadline,
        organizer }
        = volunteer || {}
    return (
        <section className="container mx-auto px-4 py-10">
            <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-md">
                {/* Thumbnail Image */}
                <img
                    src={thumbnail}
                    alt="Thumbnail"
                    className="w-full h-60 object-cover rounded-md mb-4"
                />

                <h1 className="text-2xl font-bold text-gray-800">{post_title}</h1>

                {/* Location */}
                <p className="text-gray-600 mt-1"><b>📍 Location:</b> {location}</p>

                {/* Description */}
                <p className="text-gray-600 mt-2">{description}</p>

                {deadline && (
                    <div className="mt-4 space-y-2">
                        <p><b>📌 Category:</b> {category}</p>
                        <p><b>🧑‍🤝‍🧑 Volunteers Needed:</b> {volunteers_needed}</p>
                        <p><b>📅 Deadline:</b> {format(new Date(deadline), "P")}</p>
                    </div>
                )}

                {/* Organizer Info */}
                {organizer && (
                    <div className="mt-6 p-4 border rounded-md bg-yellow-100">
                        <h2 className="text-lg font-semibold text-gray-900">Organizer Details</h2>
                        <div className="flex items-center mt-2">
                            <img
                                src={organizer.photo}
                                alt={organizer.name}
                                className="w-12 h-12 rounded-full mr-3 border-2 border-gray-300"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">{organizer.name}</p>
                                <p className="text-gray-600 text-sm">{organizer.email}</p>
                            </div>
                        </div>
                    </div>
                )}

                <button
                    className="mt-6 bg-[#eca12c] text-white px-5 py-2 rounded-md hover:bg-[#d47f1e] transition-all duration-300 w-full text-lg font-semibold"
                >
                    Be a Volunteer
                </button>
            </div>
        </section>
    );
};

export default VolunteerPostDetails;