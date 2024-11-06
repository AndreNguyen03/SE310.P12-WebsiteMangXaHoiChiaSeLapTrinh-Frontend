import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex flex-col items-center mt-10">
      <img
        src="https://placehold.co/50x50"
        alt="Stack Overflow logo"
        className="h-12 mb-6"
      />
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
        <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center justify-center mb-4">
          <i className="fab fa-google mr-2"></i> Log in with Google
        </button>

        <button className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center mb-6">
          <i className="fab fa-facebook-f mr-2"></i> Log in with Facebook
        </button>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <a href="#" className="absolute right-3 top-3 text-gray-500">
                <i className="fas fa-eye"></i>
              </a>
            </div>
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline mt-1 inline-block"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Log in
          </button>
        </form>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-700">
          Don't have an account?{" "}
          <Link to="/SignUp" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
