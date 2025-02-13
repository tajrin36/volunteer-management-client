import { Link , useNavigate} from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import AuthContext from "../../providers/AuthContext";
import toast from "react-hot-toast";

const Signin = () => {

    const navigate = useNavigate()

    const { userSignIn, } = useContext(AuthContext);

    const handleSignin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const userName = form.username.value;
        const password = form.password.value;

        console.log({ email, userName, password });

        userSignIn(email, password)
            .then(result => {
                console.log(result.user)
                toast.success("Sign-in successful!");
                navigate('/');
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message)
            })
    }

    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <button className="btn btn-outline w-full flex items-center gap-2">
                        <FcGoogle className="text-2xl" />
                        Sign in with Google
                    </button>
                    <div className="divider">Or continue with</div>

                    <form onSubmit={handleSignin} className="space-y-4">

                        <div>
                            <label className="label">Email *</label>
                            <input
                                type="email"
                                name="email"
                                // value={formData.email}
                                // onChange={handleChange}
                                placeholder="Email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="label">Username *</label>
                            <input
                                type="text"
                                name="username"
                                // value={formData.username}
                                // onChange={handleChange}
                                placeholder="Username"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="relative">
                            <label className="label">Password *</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Password"
                                className="input input-bordered w-full"
                                required
                            />
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowPassword(!showPassword);
                                }}
                                className="btn btn-xs absolute right-4 bottom-2 bg-white border-none"
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>

                        {/* Forgot Password */}
                        <div className="text-left">
                            <Link to="/forgot-password" className="text-sm text-[#ea9715] font-semibold">
                                Forgot Password?
                            </Link>
                        </div>

                        <button type="submit" className="btn bg-[#eeab43] w-full">Submit & sign in</button>
                    </form>

                    <p className="text-center mt-4">
                        Do not have an Account? <Link to='/register'><span className="text-[#ea9715] font-semibold">Register</span></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signin;