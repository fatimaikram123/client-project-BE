import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () =>{
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({ username: "", password: "", email: "",phoneNo:"" });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10,15}$/;
  const toggleAuth = () => {
    setIsLogin(!isLogin);
    setFormData({ username: "", password: "" , email: "",phoneNo:""});
    setMessage("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setMessage("");
    if (formData.password.length < 8) {
      setMessage("Password must be at least 8 characters long.");
      return;
    }
      if (formData.username.includes(" ")) {
    setMessage("Username should not contain spaces.");
    return;
  }
  if (!isLogin && !emailRegex.test(formData.email)) {
    setMessage("Invalid email format.");
    return;
  }
  if (!isLogin && !phoneRegex.test(formData.phoneNo)) {
    setMessage("Phone number must be 10 to 15 digits long.");
    return;
  }

  if (!isLogin && formData.password !== formData.confirmPassword) {
    setMessage("Passwords do not match.");
    return;
  }
    console.log(import.meta.env.VITE_API_BASE_URL)
    const url = isLogin ? `${import.meta.env.VITE_API_BASE_URL}/login` : `${import.meta.env.VITE_API_BASE_URL}/register`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Response:", data);
     
      if(isLogin){
     
      if(data.token!=undefined && data.token!=null){
        
        localStorage.setItem("token",data.token);
        navigate("/Home", { replace: true });
        window.location.reload();
      }
      else
      {
        setMessage("Invalid Username or Password ");
      }
      }
      else
      {
      setMessage(data.message);
      // setMessage("User registered successfully! Please log in.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">{isLogin ? "Login" : "Sign Up"}</h2>
        {message && (
          <p className={`text-center font-semibold mb-4 ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder={isLogin?"Username or Email or Phone":"Username"}
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
           {!isLogin && (
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          )}
             {!isLogin && (
          <input
          type="text"
          name="phoneNo"
          placeholder="Phone Number"
          value={formData.phoneNo}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
           {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          )}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"} 
          <button onClick={toggleAuth} className="text-blue-500 underline ml-1">
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
