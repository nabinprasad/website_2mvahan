import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">
          Customer Login
        </h1>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Login
          </button>
        </form>

        <Link
          to="/car-insurance"
          className="block text-center mt-6 text-blue-600 font-medium"
        >
          Get Insurance Quote →
        </Link>
      </div>
    </div>
  );
};

export default Login;