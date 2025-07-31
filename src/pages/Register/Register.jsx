import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await register(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 p-4 border rounded">
      <h2 className="text-xl mb-4">Register</h2>
      {error && <p className="text-red-600">{error}</p>}
      <label className="block mb-2">
        Email:
        <input className="w-full border p-2 rounded" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label className="block mb-4">
        Password:
        <input className="w-full border p-2 rounded" type="password" required value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">Register</button>
    </form>
  );
};

export default Register;
