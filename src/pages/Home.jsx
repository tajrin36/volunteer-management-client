import { Link } from "react-router";
import Carousel from "../components/Carousel";
import VolunteerBadges from "../components/VolunteerBadges";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

    const [volunteers, setVolunteers] = useState([])
    useEffect(() => {
        fetchAllVolunteers();
    }, [])

    const fetchAllVolunteers = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/volunteers`)
        setVolunteers(data);
    }




    return (
        <div className="container mx-auto">
            <Carousel></Carousel>
            <VolunteerBadges></VolunteerBadges>


        </div>
    );
};

export default Home;