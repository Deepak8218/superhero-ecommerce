// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState(""); // For success/error messages
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });
//       localStorage.setItem("token", res.data.token);
//       setMessage("Login successful! Welcome back, Hero!");
//       setTimeout(() => navigate("/"), 2000); // Redirect after 2s
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Something went wrong!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0e0e0e] to-[#1c1c1c] flex items-center justify-center relative overflow-hidden text-white font-sans">
//       <img
//         src="/superhero-fly.png"
//         alt="Superhero"
//         className="absolute inset-0 w-full h-full object-cover opacity-25 animate-float-slow z-0 transform scale-x-[-1]"
//       />
//       <div className="absolute w-[300px] h-[300px] bg-yellow-500/25 rounded-full blur-3xl top-[20%] left-[15%] animate-pulse-slow"></div>
//       <div className="absolute w-[200px] h-[200px] bg-green-500/25 rounded-full blur-2xl bottom-[15%] right-[10%] animate-ping"></div>
//       <div className="z-10 w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl animate-fade-in">
//         <h2 className="text-4xl font-bold text-center mb-6 tracking-wide text-yellow-400">
//           Hero Login
//         </h2>
//         {message && (
//           <p
//             className={`text-center mb-4 ${
//               message.includes("successful") ? "text-green-400" : "text-red-400"
//             }`}
//           >
//             {message}
//           </p>
//         )}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full mb-4 px-4 py-3 rounded-md bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-white text-white"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full mb-6 px-4 py-3 rounded-md bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-white text-white"
//           />
//           <button
//             type="submit"
//             className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
//           >
//             Enter Universe
//           </button>
//         </form>
//         <p className="text-center mt-4">
//           Not a hero yet?{" "}
//           <Link to="/signup" className="text-yellow-300 font-semibold hover:underline">
//             Join Now
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setMessage("Login successful! Welcome back, Hero!");
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0e0e] to-[#1c1c1c] flex items-center justify-center relative overflow-hidden text-white font-sans">
      <img
        src="/superhero-fly.png"
        alt="Superhero"
        className="absolute inset-0 w-full h-full object-cover opacity-25 animate-float-slow z-0 transform scale-x-[-1]"
      />
      <div className="absolute w-[300px] h-[300px] bg-yellow-500/25 rounded-full blur-3xl top-[20%] left-[15%] animate-pulse-slow"></div>
      <div className="absolute w-[200px] h-[200px] bg-green-500/25 rounded-full blur-2xl bottom-[15%] right-[10%] animate-ping"></div>
      <div className="z-10 w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl animate-fade-in">
        <h2 className="text-4xl font-bold text-center mb-6 tracking-wide text-yellow-400">
          Hero Login
        </h2>
        {message && (
          <p
            className={`text-center mb-4 ${
              message.includes("successful") ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-3 rounded-md bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-white text-white"
          />
          <div className="relative w-full mb-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-white text-white"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-yellow-400"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
          >
            Enter Universe
          </button>
        </form>
        <p className="text-center mt-4">
          Not a hero yet?{" "}
          <Link to="/signup" className="text-yellow-300 font-semibold hover:underline">
            Join Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;