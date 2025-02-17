import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../../providers/AuthContext";

const Register = () => {

    const navigate = useNavigate()

    const { createUser,updateUserProfile } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const userName = form.username.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log({ email, userName, password, photo });

        // password validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(password)) {
            toast.error("Password must be at least 6 characters, include one uppercase letter, one number, and one special character.")
            return; 
        }
        navigate('/signin');

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success("Registration successful!");
                updateUserProfile({
                    displayName: userName,
                    photoURL: photo
                }).then(()=> {
                    navigate('/signin');
                }).catch((error)=>{
                    console.log(error.message);
                    toast.error("User already exist!")
                })
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message)
            })

        // form.reset();
    }
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <button className="btn btn-outline w-full flex items-center gap-2">
                        <FcGoogle className="text-2xl" />
                        Sign up with Google
                    </button>
                    <div className="divider">Or continue with</div>

                    <form onSubmit={handleRegister} className="space-y-4">

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

                        {/* <div className="relative">
                            <label className="label">Password *</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                // value={formData.password}
                                // onChange={handleChange}
                                placeholder="Password"
                                className="input input-bordered w-full"
                                required
                            />
                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                className="btn btn-xs absolute right-4 bottom-2 bg-white border-none">
                                {
                                    showPassword ? <FiEyeOff /> : <FiEye />
                                }
                            </button>
                        </div> */}

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


                        <div>
                            <label className="label">Photo URL *</label>
                            <input
                                type="text"
                                name="photo"
                                // value={formData.username}
                                // onChange={handleChange}
                                placeholder="Photo URL"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>


                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="termsAccepted"
                                // checked={formData.termsAccepted}
                                // onChange={handleChange}
                                className="checkbox"
                                required
                            />
                            <span>Agree to our <a href="#" className="text-[#ea9715] font-semibold">terms and policy</a></span>
                        </div>

                        <button type="submit" className="btn bg-[#eeab43] w-full">Submit & Register</button>
                    </form>

                    <p className="text-center mt-4">
                        Already have an account? <Link to='/signin'><span className="text-[#ea9715] font-semibold">Sign in</span></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;