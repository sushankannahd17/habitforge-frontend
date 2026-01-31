import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import Chooser from "../Dashboard/Chooser";
import { IoCalendarClearOutline, IoCalendarOutline } from "react-icons/io5";
import { RxLoop } from "react-icons/rx";
import api from "../../api.jsx";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

export default function AddHabit() {
  const days = [
    { key: "mon", label: "M" },
    { key: "tue", label: "T" },
    { key: "wed", label: "W" },
    { key: "thu", label: "T" },
    { key: "fri", label: "F" },
    { key: "sat", label: "S" },
    { key: "sun", label: "S" },
  ];

  const [open, setOpen] = useState(false);

  const { user } = useAuth();

  // Variables required for creating
  const [habitName, setHabitName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("");
  const [repeatOn, setRepeatOn] = useState([]);
  const [timeOfDay, setTimeOfDay] = useState("any");
  const [date, setDate] = useState("");
  const [backgroundKey, setBackgroundKey] = useState("");

  const toggleDay = (day) => {
    setRepeatOn((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const createHabit = (e) => {
    e.preventDefault();

    if (frequency == "daily") setRepeatOn(["mon", "tue", "wed", "thu", "fri", "sat", "sun"])

    if (!habitName) toast.error("Enter habit name");
    else if (!selectedCategory) toast.error("Select category");
    else if (!frequency) toast.error("Select frequency");
    else if (frequency === "weekly" && repeatOn.length === 0)
      toast.error("Select the days");
    else if (!date) toast.error("Select date");
    else if (!backgroundKey) toast.error("Select appearance");
    else {
      api
        .post("/habits/create", {
          userID: user?.userID,
          name: habitName,
          description,
          categoryIcon: selectedCategory.icon,
          categoryName: selectedCategory.name,
          schedule: {
            frequency,
            repeatOn,
            timeOfDay,
            startDate: date,
          },
          appearance: {
            backgroundKey,
          },
          isEnabled: true,
        })
        .then(() => {
          toast.success("Created habit");
          setOpen(false);
        })
        .catch((err) => {
          const msg = err.response?.data?.message;
          toast.error(typeof msg === "string" ? msg : "Something went wrong");
        });
    }
  };

  return (
    <>
      <button
        className="ml-auto w-30 mt-10 mr-20 h-10 bg-[#5B6CFF] text-white"
        onClick={() => setOpen(!open)}
      >
        + New Habit
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-white/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-12 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <form onSubmit={createHabit}>
              <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-[#F7F8FA] text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
              >
                <div className="bg-white-800 px-6 pt-10 pb-6 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div>
                      <h1 className="inter-heading text-2xl">
                        Create a new habit
                      </h1>
                      <p
                        className="font-para text-gray-500 mt-5 mb-5"
                        style={{ fontSize: "14px" }}
                      >
                        Start small and build consistency. What do you want to
                        achieve?
                      </p>
                      <div className="habit-name ">
                        <label
                          className="inter-para"
                          style={{ fontSize: "13px" }}
                        >
                          Habit Name
                        </label>
                        <div className="flex">
                          <Chooser
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                          />
                          <input
                            type="text"
                            value={habitName}
                            onChange={(e) => setHabitName(e.target.value)}
                            className="w-full border ml-2 rounded-md border-gray-300 pl-4 bg-white"
                          />
                        </div>
                      </div>
                      <div className="habit-description">
                        <label
                          className="inter-para"
                          style={{ fontSize: "13px" }}
                        >
                          Description (Optional)
                        </label>
                        <textarea
                          className="block w-full bg-white"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                      <div>
                        <h3 className="inter-heading text-black mt-5">
                          Schedule
                        </h3>
                        <p
                          className="inter-para mt-2"
                          style={{ fontSize: "13px" }}
                        >
                          Frequency
                        </p>
                        <div className="flex gap-3">
                          <button
                            className="h-20 w-1/3 m-auto bg-white focus:bg-gray-400 border border-white rounded-xl focus:border-[##5b6cff]"
                            type="button"
                            onClick={() => setFrequency("daily")}
                          >
                            <IoCalendarClearOutline className="m-auto" />
                            Daily
                          </button>
                          <button
                            className="h-20 w-1/3 m-auto bg-white focus:bg-gray-400 border border-white rounded-xl focus:border-[##5b6cff]"
                            type="button"
                            onClick={() => setFrequency("weekly")}
                          >
                            <IoCalendarOutline className="m-auto" />
                            Weekly
                          </button>
                          <button
                            className="h-20 w-1/3 m-auto bg-white focus:bg-gray-400 border border-white rounded-xl focus:border-[##5b6cff]"
                            type="button"
                            onClick={() => setFrequency("interval")}
                          >
                            <RxLoop className="m-auto" />
                            Interval
                          </button>
                        </div>
                      </div>
                      {frequency != "weekly" ? (
                        <></>
                      ) : (
                        <>
                          <p
                            className="inter-para mt-5"
                            style={{ fontSize: "14px" }}
                          >
                            Repeat On
                          </p>
                          <div className="flex gap-3 mt-2">
                            {days.map(({ key, label }) => {
                              return (
                                <>
                                  <button
                                    key={key}
                                    className={`w-10 h-10 rounded-full border text-sm font-medium ${
                                      repeatOn.includes(key)
                                        ? "bg-[#5B6CFF] text-white"
                                        : "bg-white text-gray-600 border-gray-300"
                                    }`}
                                    type="button"
                                    onClick={() => toggleDay(key)}
                                  >
                                    {label}
                                  </button>
                                </>
                              );
                            })}
                          </div>
                        </>
                      )}
                      <div className="flex justify-between mt-4 gap-3">
                        <div className="w-full">
                          <p
                            className="inter-para mt-2"
                            style={{ fontSize: "13px" }}
                          >
                            Time of Day
                          </p>
                          <select
                            className="h-10 w-full bg-white border border-white mr-5"
                            value={timeOfDay}
                            onChange={(e) => setTimeOfDay(e.target.value)}
                          >
                            <option value={"any"}>Any Time</option>
                            <option value={"morning"}>Morning</option>
                            <option value={"afternoon"}>Afternoon</option>
                            <option value={"evening"}>Evening</option>
                            <option value={"night"}>Night</option>
                          </select>
                        </div>
                        <div className="w-full">
                          <p
                            className="inter-para mt-2 flex items-start w-full"
                            style={{ fontSize: "13px" }}
                          >
                            Start Date
                          </p>
                          <input
                            className="h-10 w-full bg-white border border-white mr-5"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            type="date"
                          />
                        </div>
                      </div>
                      <div className="mt-5">
                        <h4 className="inter-heading">Appearance</h4>
                        <p
                          className="inter-para mt-3"
                          style={{ fontSize: "14px" }}
                        >
                          Color
                        </p>
                        <div className="flex gap-3 mt-2">
                          <button
                            type="button"
                            className="h-12 w-12 border border-[#EF4444] focus:border-black rounded-3xl bg-[#EF4444]"
                            onClick={() => setBackgroundKey("#EF4444")}
                          ></button>
                          <button
                            type="button"
                            className="h-12 w-12 border border-[#F97316] focus:border-black rounded-3xl bg-[#F97316]"
                            onClick={() => setBackgroundKey("#F97316")}
                          ></button>
                          <button
                            type="button"
                            className="h-12 w-12 border border-[#F59E0B] focus:border-black rounded-3xl bg-[#F59E0B]"
                            onClick={() => setBackgroundKey("#F59E0B")}
                          ></button>
                          <button
                            type="button"
                            className="h-12 w-12 border border-[#10B981] focus:border-black rounded-3xl bg-[#10B981]"
                            onClick={() => setBackgroundKey("#10B981")}
                          ></button>
                          <button
                            type="button"
                            className="h-12 w-12 border border-[#06B6D4] focus:border-black rounded-3xl bg-[#06B6D4]"
                            onClick={() => setBackgroundKey("#06B6D4")}
                          ></button>
                          <button
                            type="button"
                            className="h-12 w-12 border border-[#3B82F6] focus:border-black rounded-3xl bg-[#3B82F6]"
                            onClick={() => setBackgroundKey("#3B82F6")}
                          ></button>
                          <button
                            type="button"
                            className="h-12 w-12 border border-[#6366F1] focus:border-black rounded-3xl bg-[#6366F1]"
                            onClick={() => setBackgroundKey("#6366F1")}
                          ></button>
                          <button
                            type="button"
                            className="h-12 w-12 border border-[#8B5CF6] focus:border-black rounded-3xl bg-[#8B5CF6]"
                            onClick={() => setBackgroundKey("#8B5CF6")}
                          ></button>
                        </div>

                        <div className="h-0.5 mt-3 w-full bg-gray-300"></div>

                        <div className="mt-4 w-full flex justify-end">
                          <button className="mr-10" type="button" onClick={() => setOpen(false)}>
                            Cancel
                          </button>
                          <button
                            className="w-30 h-10 bg-[#5B6CFF] text-white"
                            type="submit"
                          >
                            Create Habit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </form>
          </div>
        </div>
      </Dialog>
    </>
  );
}
