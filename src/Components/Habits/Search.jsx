import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import api from "../../Api";

export default function Search() {
  const fetchCategories = async () => {
    const res = await api.get("/categories/get");
    setCategories(res.data.categories);
  };

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [active, setActive] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  console.log(categories);

  return (
    <div className="w-full h-30 bg-white pt-7.5 pl-10 flex">
      <div className="absolute w-[15%]">
        <CiSearch size={24} className="absolute inset-y-2.5 inset-x-3" />
        <input
          type="text"
          className="h-12 pl-12 border border-gray-400 rounded-xl"
          placeholder="Search habits..."
        />
      </div>

      <div className="ml-80">
        <select
          className="block h-10 pl-4 w-full border rounded-md mt-1"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value={""}>All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="ml-10">
        <select
          value={active}
          onChange={(e) => setActive(e.target.value)}
          className="block h-10 pl-2 border rounded-md mt-1 w-3/2"
        >
          <option value={true}>Status: Enabled</option>
          <option value={false}>Status: Disabled</option>
        </select>
      </div>
    </div>
  );
}
