import axios from "axios";
import { useEffect, useState } from "react";
import VolunteerCard from "../components/VolunteerCard";

const AllVolunteers = () => {
    const [volunteers, setVolunteers] = useState([])
    useEffect(() => {
        fetchAllVolunteers();
    }, [])

    const fetchAllVolunteers = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/volunteers`)
        setVolunteers(data);
    }

    console.log(volunteers);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {volunteers.map(volunteer=><VolunteerCard key={volunteer._id} volunteer={volunteer}></VolunteerCard>)}
        </div>
    );
};

export default AllVolunteers;