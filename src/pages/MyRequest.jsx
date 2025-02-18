import { useContext, useEffect, useState } from "react";
import AuthContext from "../providers/AuthContext";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FaExclamationTriangle } from "react-icons/fa"; // Warning icon
import RequestTable from "../components/RequestTable";

const MyRequest = () => {
    const { user } = useContext(AuthContext);
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetchAllRequests();
    }, [user]);

    // Fetch requests for logged-in user
    const fetchAllRequests = async () => {
        try {
            const { data } = await axios.get(
                `${import.meta.env.VITE_API_URL}/my-requests/${user?.email}`
            );
            setRequests(data);
        } catch (err) {
            console.error("Error fetching requests:", err);
            toast.error("Failed to load requests.");
        }
    };

    // Function to delete a volunteer request
    // const handleDelete = async (id) => {
    //     try {
    //         const { data } = await axios.delete(
    //             `${import.meta.env.VITE_API_URL}/volunteer/${id}`
    //         );
    //         console.log(data);
    //         toast.success("Request deleted successfully!");
    //         fetchAllRequests(); // Refresh the list after deletion
    //     } catch (err) {
    //         console.error(err);
    //         toast.error("Something went wrong!");
    //     }
    // };
    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(
                `${import.meta.env.VITE_API_URL}/delete-request/${id}`
            );

            console.log("Delete Response:", data); 

            toast.success("Request deleted successfully!");

            fetchAllRequests();
        } catch (err) {
            console.error("Delete Error:", err.response?.data || err.message);
            toast.error("Failed to delete request. Try again.");
        }
    };


    // Custom confirmation toast before deletion
    const modernDelete = (id) => {
        toast.custom((t) => (
            <div
                className={`flex items-center gap-4 bg-white border border-gray-300 shadow-lg px-4 py-3 rounded-lg ${t.visible ? "animate-fadeIn" : "animate-fadeOut"
                    }`}
            >
                <FaExclamationTriangle className="text-yellow-500 text-xl" />
                <p className="text-gray-800 font-medium">
                    Are you <b>sure</b> you want to delete this request?
                </p>

                <div className="flex gap-3">
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
                        onClick={() => {
                            toast.dismiss(t.id);
                            handleDelete(id);
                        }}
                    >
                        Yes
                    </button>
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded-md transition"
                        onClick={() => toast.dismiss(t.id)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        ), { duration: Infinity });
    };

    return (
        <section className="container px-4 mx-auto my-12">
            <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 ">My Requests</h2>
                <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
                    {requests.length} Requests
                </span>
            </div>

            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                            {requests.length > 0 ? (
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                                                <span>Title</span>
                                            </th>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                                                <span>Deadline</span>
                                            </th>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                                                <span>Volunteers</span>
                                            </th>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                                                Category
                                            </th>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                                                Status
                                            </th>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {requests.map((request) => (
                                            <RequestTable
                                                key={request._id}
                                                request={request}
                                                onDelete={() => modernDelete(request._id)}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="p-6 text-center text-gray-500">
                                    No requests found. You have not added any volunteer requests yet.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyRequest;
