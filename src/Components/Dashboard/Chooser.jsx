import { useEffect, useState } from "react";
import api from "../../api.jsx";
import { Dropdown } from "primereact/dropdown";

export default function Chooser({ selectedCategory, setSelectedCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await api.get("/categories/get");
      setCategories(res.data.categories);
    };

    fetchCategories();
  }, []);

  const items = (option) => {
    return <i className={option.icon}></i>;
  };

  const selectedValueTemplate = (option) => {
    if (!option) return <i />;

    return (
      <div className="flex align-items-center gap-2">
        <i className={option.icon}></i>
      </div>
    );
  };

  return (
    <Dropdown
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.value)}
      options={categories}
      optionLabel="_id"
      itemTemplate={items}
      valueTemplate={selectedValueTemplate}
      className="w-[19%]"
    />
  );
}
