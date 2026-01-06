import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaCity,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import PasswordChecklist from "../components/PasswordChecklist";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    city: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Reset form
  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      gender: "",
      city: "",
      password: "",
      confirmPassword: "",
      agree: false,
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
    toast("Form Reset!", { icon: "♻️" });
  };

  // Password validation
  const isPasswordValid =
    form.password.length >= 8 &&
    /[A-Z]/.test(form.password) &&
    /[a-z]/.test(form.password) &&
    /\d/.test(form.password) &&
    /[!@#$%^&*]/.test(form.password);

  // Form validation
  const isFormValid =
    form.name &&
    form.email &&
    form.phone &&
    form.gender &&
    form.city &&
    isPasswordValid &&
    form.password === form.confirmPassword &&
    form.agree;

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      toast.error("Please complete the form correctly!");
      return;
    }

    toast.success("Registration Successful! 🎉");
    handleReset();
  };

  return (
    <div className="w-full bg-gray-100 flex items-center justify-center px-4 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl w-full max-w-md p-5 sm:p-6 "
      >
        <h2 className="text-xl font-semibold mb-6">Registration Form</h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="text-sm font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative mt-1">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Your full name"
              className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Note: Name should not contain numbers or special characters
          </p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm font-medium">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative mt-1">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Your email address"
              className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="text-sm font-medium">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative mt-1">
            <FaPhone className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter Your phone number"
              className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="text-sm font-medium">
            Gender <span className="text-red-500">*</span>
          </label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full mt-1 py-2 px-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* City */}
        <div className="mb-4">
          <label className="text-sm font-medium">
            City <span className="text-red-500">*</span>
          </label>
          <div className="relative mt-1">
            <FaCity className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="Enter Your City"
              className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="text-sm font-medium">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative mt-1">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter Your password"
              className="w-full pl-10 pr-10 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Password Checklist */}
        <PasswordChecklist password={form.password} />

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="text-sm font-medium">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <div className="relative mt-1">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Enter Your confirm password"
              className="w-full pl-10 pr-10 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-3 top-3 text-gray-500"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {form.confirmPassword &&
            form.password !== form.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                Passwords do not match
              </p>
            )}
        </div>

        {/* Terms */}
        <div className="flex items-center mb-6 text-sm">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className="mr-2"
          />
          I agree to the{" "}
          <span className="text-blue-600 ml-1 cursor-pointer">
            Terms of Services and Privacy Policy
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="w-1/2 border rounded-md py-2 hover:bg-gray-100 transition"
          >
            Reset
          </button>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-1/2 py-2 rounded-md text-white transition
              ${
                isFormValid
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }
            `}
          >
            Submit Form
          </button>
        </div>

        <Toaster position="top-right" />
      </form>
    </div>
  );
}
