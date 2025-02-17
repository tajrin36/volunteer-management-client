import { useContext } from "react"; // Fixed import
import AuthContext from "../providers/AuthContext";
import { Link, NavLink, useNavigate } from "react-router";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext);
    const navigate = useNavigate();

    // const handleLogout = async () => {
    //     await userSignOut();
    // };

    const handleLogout = async () => {
        try {
            
            toast.success("Logged out successfully!");
            await userSignOut();
            navigate("/signin");
        } catch (error) {
            console.error("Logout error:", error);
            toast.error("Failed to log out. Try again.");
        }
    };
    const links = <>
        <li className="text-lg font-semibold">
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? "text-white font-bold underline" : ""}
            >
                Home
            </NavLink>
        </li>
        <li className="text-lg font-semibold">
            <NavLink
                to="/allVolunteer"
                className={({ isActive }) => isActive ? "text-white font-bold underline" : ""}
            >
                All Volunteer
            </NavLink>
        </li>
    </>;

    return (
        <div className="bg-[#eca12c] shadow-sm">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl">HeroHands</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-2">
                    {!user ? (
                        <>
                            <button className="btn"><Link to="/register">Register</Link></button>
                            <button className="btn"><Link to="/signin">Sign in</Link></button>
                        </>
                    ) : (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        referrerPolicy="no-referrer"
                                        alt="User Avatar"
                                        src={user?.photoURL || " "}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li className="px-2 text-lg font-semibold">{user?.displayName}</li>
                                <li className=" font-semibold"><Link to='addVolunteerNeed'>Add volunteer</Link></li>
                                <li className=" font-semibold"><Link to='/myVolunteerNeed'>My volunteer post</Link></li>
                                <li className=" font-semibold"><Link to='/myRequest'>My request post</Link></li>
                                <li className=""><button className="font-semibold" onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
