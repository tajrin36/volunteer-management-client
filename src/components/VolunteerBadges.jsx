import { FaHandsHelping, FaLeaf, FaHandHoldingHeart, FaUsers, FaAmbulance } from "react-icons/fa";

const badges = [
    {
        id: 1,
        title: "Leadership Badge",
        description: "Awarded for outstanding leadership in volunteer activities.",
        icon: <FaUsers className="text-4xl text-yellow-500" />,
        bgColor: "bg-yellow-100",
    },
    {
        id: 2,
        title: "Community Service Badge",
        description: "Recognizing dedication to serving the community.",
        icon: <FaHandsHelping className="text-4xl text-blue-500" />,
        bgColor: "bg-blue-100",
    },
    {
        id: 3,
        title: "Environmental Badge",
        description: "For significant contributions to environmental conservation.",
        icon: <FaLeaf className="text-4xl text-green-500" />,
        bgColor: "bg-green-100",
    },
    {
        id: 4,
        title: "Fundraising Badge",
        description: "Awarded for exceptional fundraising efforts.",
        icon: <FaHandHoldingHeart className="text-4xl text-red-500" />,
        bgColor: "bg-red-100",
    },
    {
        id: 5,
        title: "Emergency Response Badge",
        description: "Recognizing quick response and aid in emergencies.",
        icon: <FaAmbulance className="text-4xl text-orange-500" />,
        bgColor: "bg-orange-100",
    },
];

const VolunteerBadges = () => {
    return (
        <section className="container mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-center text-gray-800">
                Volunteer Badges by Categories
            </h2>
            <p className="text-center text-gray-600 mt-2">
                Earn badges for your contributions to volunteering.
            </p>

            <div className="grid gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {badges.map((badge) => (
                    <div key={badge.id} className={`p-6 rounded-lg shadow-lg ${badge.bgColor}`}>
                        <div className="flex items-center justify-center">{badge.icon}</div>
                        <h3 className="mt-4 text-lg font-semibold text-center">{badge.title}</h3>
                        <p className="mt-2 text-sm text-gray-700 text-center">{badge.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VolunteerBadges;
