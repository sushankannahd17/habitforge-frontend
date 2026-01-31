import { useEffect, useState } from "react";
import Sidebar from "../Components/Navbar/SideBar";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import api from "../api"
import Footer from "../Components/Footer/Footer";

export default function Settings() {
  const { user } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicURL, setProfilePicURL] = useState("");

  const fetchDetails = async () => {
    try {
      const res = await api.post("/auth/getAccountDetails", {
        userID: user.userID,
      });

      setName(res.data.name);
      setEmail(res.data.email);
      setProfilePicURL(res.data.profilePic);
    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const handleSave = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("userID", user.userID);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("profilePic", profilePic);

    toast.promise(
      api.patch("/auth/modifyAccountDetails", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      {
        loading: "Updating account...",
        success: async () => {
          await fetchDetails();
          return "Account Details Updated Successfully, refresh and check";
        },
        error: (err) => "Error: " + err.response?.data?.message,
      },
    );
  };

  const avatarPreview = profilePic
    ? URL.createObjectURL(profilePic)
    : profilePicURL ||
      "https://res.cloudinary.com/doea9ukcf/image/upload/v1769871937/profilePic_s4dznb.jpg";

  return (
    <div className="w-full min-h-screen bg-[#F7F8FA] flex">
      <Sidebar />

      <div className="w-full p-10">
        <h1 className="text-3xl font-semibold text-gray-800">Settings</h1>
        <p className="text-gray-500 mt-2">
          Manage your profile, preferences, and account security.
        </p>

        <form
          onSubmit={handleSave}
          className="bg-white mt-8 rounded-2xl shadow-md p-8 max-w-3xl"
        >
          <h2 className="font-semibold text-lg mb-6">Public Profile</h2>

          <div className="flex items-center gap-6 mb-10">
            <img
              src={avatarPreview}
              alt="avatar"
              className="w-20 h-20 rounded-full object-cover border"
            />

            <label className="cursor-pointer">
              <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200">
                Change Avatar
              </span>
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => setProfilePic(e.target.files[0])}
              />
            </label>

            <span className="text-sm text-gray-400">
              JPG, GIF or PNG. 1MB max.
            </span>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Display Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
