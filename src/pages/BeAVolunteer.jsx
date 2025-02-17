import { useContext, useEffect, useState } from "react"; // Fixed import
import AuthContext from "../providers/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

const BeAVolunteer = () => {
    const [volunteer, setVolunteer] = useState({});
    const [suggestion, setSuggestion] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetchPostData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const fetchPostData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/volunteer/${id}`);
            setVolunteer(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("Failed to fetch volunteer post!");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!suggestion.trim()) {
            toast.error("Please provide a suggestion.");
            return;
        }

        if (!volunteer.volunteers_needed || volunteer.volunteers_needed <= 0) {
            toast.error("No volunteers needed!");
            return;
        }

        const requestData = {
            volunteerName: user?.displayName || "Unknown",
            volunteerEmail: user?.email || "Unknown",
            postId: id,
            suggestion,
            status: "requested",
            postTitle: volunteer?.post_title || "N/A",
            description: volunteer?.description || "N/A",
            category: volunteer?.category || "N/A",
            location: volunteer?.location || "N/A",
            volunteersNeeded: volunteer?.volunteers_needed || 0,
            deadline: volunteer?.deadline || "N/A",
            organizerName: volunteer?.organizer?.name || "N/A",
            organizerEmail: volunteer?.organizer?.email || "N/A"
        };
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/add-request`, requestData);

            setSuggestion(" "); 
            toast.success("Volunteer request submitted successfully!");
            navigate('/myVolunteerNeed');
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong!");
        }
    };
    

    return (
        <section className="container mx-auto px-4 py-10">
            <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-md">
                <h2 className="text-2xl font-bold mb-4">Volunteer Request Form</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Read-Only Fields */}
                    <div>
                        <label className="block font-semibold">Thumbnail:</label>
                        {volunteer?.thumbnail ? (
                            <img src={volunteer.thumbnail} alt="Thumbnail" className="w-full h-40 object-cover rounded-md" />
                        ) : (
                            <p className="text-gray-500">No thumbnail available</p>
                        )}
                    </div>

                    <div>
                        <label className="block font-semibold">Post Title:</label>
                        <input type="text" value={volunteer?.post_title || ""} readOnly className="w-full border p-2 rounded-md bg-gray-100" />
                    </div>

                    <div>
                        <label className="block font-semibold">Description:</label>
                        <textarea value={volunteer?.description || ""} readOnly className="w-full border p-2 rounded-md bg-gray-100"></textarea>
                    </div>

                    <div>
                        <label className="block font-semibold">Category:</label>
                        <input type="text" value={volunteer?.category || ""} readOnly className="w-full border p-2 rounded-md bg-gray-100" />
                    </div>

                    <div>
                        <label className="block font-semibold">Location:</label>
                        <input type="text" value={volunteer?.location || ""} readOnly className="w-full border p-2 rounded-md bg-gray-100" />
                    </div>

                    <div>
                        <label className="block font-semibold">No. of Volunteers Needed:</label>
                        <input type="text" value={volunteer?.volunteers_needed || ""} readOnly className="w-full border p-2 rounded-md bg-gray-100" />
                    </div>

                    <div>
                        <label className="block font-semibold">Deadline:</label>
                        <input type="text" value={volunteer?.deadline ? new Date(volunteer.deadline).toLocaleDateString() : ""} readOnly className="w-full border p-2 rounded-md bg-gray-100" />
                    </div>

                    {/* Organizer Details */}
                    {volunteer?.organizer && (
                        <div>
                            <label className="block font-semibold">Organizer Name:</label>
                            <input type="text" value={volunteer.organizer?.name || ""} readOnly className="w-full border p-2 rounded-md bg-gray-100" />

                            <label className="block font-semibold mt-2">Organizer Email:</label>
                            <input type="text" value={volunteer.organizer?.email || ""} readOnly className="w-full border p-2 rounded-md bg-gray-100" />
                        </div>
                    )}

                    {/* Logged-In User Details */}
                    <div>
                        <label className="block font-semibold">Volunteer Name:</label>
                        <input type="text" value={user?.displayName || ""} readOnly className="w-full border p-2 rounded-md bg-gray-100" />
                    </div>

                    <div>
                        <label className="block font-semibold">Volunteer Email:</label>
                        <input type="email" value={user?.email || ""} readOnly className="w-full border p-2 rounded-md bg-gray-100" />
                    </div>

                    {/* Editable Field */}
                    <div>
                        <label className="block font-semibold">Suggestion:</label>
                        <textarea
                            value={suggestion}
                            onChange={(e) => setSuggestion(e.target.value)}
                            className="w-full border p-2 rounded-md"
                            placeholder="Enter your suggestion..."
                        ></textarea>
                    </div>

                    {/* Status */}
                    <div>
                        <label className="block font-semibold">Status:</label>
                        <input type="text" value="requested" readOnly className="w-full border p-2 rounded-md bg-gray-100" />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                        Request
                    </button>
                </form>
            </div>
        </section>
    );
};

export default BeAVolunteer;
