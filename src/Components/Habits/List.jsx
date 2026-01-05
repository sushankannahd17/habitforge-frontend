import { useEffect, useState } from "react";
import { FaPencil, FaList } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import api from "../../api";
import useAuth from "../../Hooks/useAuth";
import { CiSearch } from "react-icons/ci";
import toast from "react-hot-toast";
import UpdateHabit from "./UpdateHabit";

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export default function List() {
  const { user } = useAuth();
  const [habitData, setHabitData] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const deleteHabit = (habitID) => {    
    toast.promise(api.delete("/habits/delete", {
      data: {habitID}
    }), {
      loading: "Loading, please wait...",
      success: "Habit Delete",
      error: (err) => {console.log(err.response); return err.response?.data?.message}
    })
  } 

  const filteredHabits = habitData.filter(habit => {
    const matchesSearch = habit.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      !selectedCategory || habit.categoryName === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredHabits.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const pageData = filteredHabits.slice(startIndex, startIndex + pageSize);

  const refetchHabits = async () => {
    const res = await api.get("/habits/read", {
      params: { userID: user.userID },
    });
    setHabitData(res.data.habits);
  };

  useEffect(() => {
    const fetchHabits = async () => {
      const res = await api.get("/habits/read", {
        params: { userID: user.userID },
      });

      setHabitData(res.data.habits);
    };

    const fetchCategories = async () => {
      const res = await api.get("/categories/get");

      setCategories(res.data.categories);
    };

    fetchHabits();
    fetchCategories();
  }, []);

  return (
    <div className="h-200 w-full mt-4">
      <div className="gap-10">
        <div className="block w-full bg-white h-25 border-white rounded-2xl pt-4 pl-6 pr-6">
          <div className="flex">
            <div className="absolute">
              <CiSearch className="absolute inset-y-5 inset-x-6" size={24} />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="h-12 w-100 mt-2 ml-4 pl-10 border border-gray-500 rounded-md"
              />
            </div>
            <select
              className="ml-110 mt-3 w-[10%] border border-gray-500 rounded-md h-10 pl-3 inter-para"
              style={{ fontSize: "16px" }}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value={""}>Category: All</option>
              {categories.map((data) => {
                return <option value={data.name}>Category: {data.name}</option>;
              })}
            </select>
            <select
              className="ml-10 mt-3 w-[10%] border border-gray-500 rounded-md h-10 pl-3 inter-para"
              style={{ fontSize: "16px" }}
            >
              <option value={true}>Enabled</option>
              <option value={false}>Disabled</option>
            </select>
          </div>
        </div>
        <div className="w-full bg-white mt-10 border-white rounded-2xl">
          <div className="flex ml-4 mr-4 mb-10">
            <div className="flex-1 grid grid-cols-[2fr_1fr_1fr_1fr] pl-15 items-center justify-between">
              <h1 className="mt-4 text-2xl text-gray-900">Habits</h1>
              <h1 className="mt-4 ml-25 text-2xl text-gray-900">Category</h1>
              <h1 className="mt-4 ml-20 text-2xl text-gray-900">Schedule</h1>
              <h1 className="mt-4 ml-22 text-2xl text-gray-900">Time</h1>
            </div>
          </div>
          <div className="w-full h-0.5 bg-gray-300"></div>
          {pageData.map((data) => {
            return (
              <>
                <div className="w-full h-20 mt-4 ml-6 mb-4 flex">
                  <i
                    className={`text-3xl w-20 h-19 pt-5 pl-6 inline-block rounded-md ${data.categoryIcon}`}
                  ></i>
                  <div className="flex-1 ml-5 grid grid-cols-[2fr_1fr_1fr_1fr] items-center">
                    <div>
                      <p className="font-medium">{data.name}</p>
                      <p className="mt-1 text-gray-500 text-sm">
                        {data.description}
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <span
                        className="px-3 py-1 rounded-md text-sm"
                        style={{
                          backgroundColor: data.appearance.backgroundKey,
                        }}
                      >
                        {data.categoryName}
                      </span>
                    </div>

                    <p className="text-center">
                      {titleCase(data.schedule.frequency)}
                    </p>

                    {/* Time of day */}
                    <p className="text-center">
                      {titleCase(data.schedule.timeOfDay)}
                    </p>
                  </div>
                  <div className="flex gap-2 ml-auto mr-10">
                    <UpdateHabit habitID={data._id} categories={categories}/>
                    <button>
                      <FaList />
                    </button>
                    <button type="button" onClick={() => deleteHabit(data._id)}>
                      <MdDelete />
                    </button>
                  </div>
                </div>
                <div className="w-full h-0.5 bg-gray-300"></div>
              </>
            );
          })}
          <div className="flex justify-center items-center w-full mt-4">
            <button
              className="mr-4 w-20 h-8 border border-gray-400 rounded-2xl"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
            <p className="mr-4 h-8 mt-1">{currentPage}</p>
            <button
              className="mr-4 w-20 h-8 border border-gray-400 rounded-2xl"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
