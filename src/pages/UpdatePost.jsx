import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router";
import AuthContext from "../providers/AuthContext";
import toast from "react-hot-toast";

const UpdatePost = () => {

    const { user } = useContext(AuthContext)

    const navigate = useNavigate();

    const { id } = useParams()

    const [startDate, setStartDate] = useState(new Date());

    const [volunteer, setVolunteer] = useState({})
    useEffect(() => {
        fetchPostData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const fetchPostData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/volunteer/${id}`)
        setVolunteer(data);
        setStartDate(new Date(data.deadline))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const post_title = form.post_title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteers_needed = form.volunteers_needed.value;
        const deadline = startDate;
        const email = form.email.value;

        const formData =
        {
            thumbnail,
            post_title,
            description,
            category,
            location,
            volunteers_needed,
            deadline,
            organizer: {
                email,
                name: user?.displayName,
                photo: user?.photoURL,
            }
        };

        console.log((formData));

        try {
            // make a post request
            await axios.put(
                `${import.meta.env.VITE_API_URL}/update-volunteer/${id}`,
                formData
            )
            form.reset();
            toast.success("Data updated successfully!")
            navigate('/myVolunteerNeed')
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong!")
        }

    }
    console.log(volunteer)
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <section className='p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    📢 Update Volunteer Need Post
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>

                        {/* Thumbnail */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='thumbnail'>Thumbnail URL</label>
                            <input id='thumbnail' name='thumbnail' defaultValue={volunteer.thumbnail} type='text' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring' placeholder="Enter image URL" />
                        </div>

                        {/* Post Title */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='post_title'>Post Title</label>
                            <input id='post_title' name='post_title' defaultValue={volunteer.post_title} type='text' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring' placeholder="Enter post title" />
                        </div>

                        {/* Description */}
                        <div className='sm:col-span-2'>
                            <label className='text-gray-700 ' htmlFor='description'>Description</label>
                            <textarea className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring' name='description' defaultValue={volunteer.description} id='description' rows="3" placeholder="Enter description"></textarea>
                        </div>

                        {/* Category */}
                        {volunteer.category && (
                            <div>
                                <label className='text-gray-700 ' htmlFor='category'>Category</label>
                                <select name='category' defaultValue={volunteer.category} id='category' className='border p-2 rounded-md w-full'>
                                    <option value=''>Select a category</option>
                                    <option value='Healthcare'>Healthcare</option>
                                    <option value='Education'>Education</option>
                                    <option value='Social Service'>Social Service</option>
                                    <option value='Animal Welfare'>Animal Welfare</option>
                                    <option value='Environmental'>Environmental</option>
                                    <option value='Emergency Response'>Emergency Response</option>
                                </select>
                            </div>
                        )}

                        {/* Location */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='location'>Location</label>
                            <input id='location' name='location' type='text' defaultValue={volunteer.location} className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring' placeholder="Enter location" />
                        </div>

                        {/* No. of Volunteers Needed */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='volunteers_needed'>Number of Volunteers Needed</label>
                            <input id='volunteers_needed' name='volunteers_needed' defaultValue={volunteer.volunteers_needed} type='number' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring' min="1" placeholder="Enter number of volunteers" />
                        </div>

                        {/* Deadline */}
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700'>Deadline</label>
                            <DatePicker className='border p-2 rounded-md w-full' selected={startDate} onChange={date => setStartDate(date)} dateFormat="yyyy-MM-dd" />
                        </div>

                        {/* Organizer Name (Read-only) */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='organizer_name'>Organizer Name</label>
                            <input id='organizer_name' name="name" type='text' value={user?.displayName || "Anonymous"} readOnly className='block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md focus:outline-none' />
                        </div>

                        {/* Organizer Email (Read-only) */}
                        <div>
                            <label className='text-gray-700 ' htmlFor='organizer_email'>Organizer Email</label>
                            <input id='organizer_email' name="email" type='email' value={user?.email || "Not provided"} readOnly className='block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md focus:outline-none' />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className='flex justify-end mt-6'>
                        <button type="submit" className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 bg-[#eca12c] rounded-md hover:bg-[#d47f1e] focus:outline-none focus:bg-[#d47f1e]'>
                            Update Post
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdatePost;