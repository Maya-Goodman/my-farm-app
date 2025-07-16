"use client";

import { useState } from "react";
import Layout from "@/app/components/Layout";
import GlassCard from "@/app/components/GlassCard";
import {
  Plus,
  CheckCircle,
  XCircle,
  Edit,
  Trash,
  Calendar,
  Flag,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const initialTasks = [
  {
    id: 1,
    name: "Plow Field B",
    dueDate: "2025-07-20",
    priority: "High",
    completed: false,
  },
  {
    id: 2,
    name: "Check irrigation system in Field A",
    dueDate: "2025-07-16",
    priority: "Medium",
    completed: false,
  },
  {
    id: 3,
    name: "Harvest strawberries",
    dueDate: "2025-07-15",
    priority: "High",
    completed: false,
  },
  {
    id: 4,
    name: "Order new seeds",
    dueDate: "2025-07-25",
    priority: "Low",
    completed: true,
  },
  {
    id: 5,
    name: "Repair fence near barn",
    dueDate: "2025-07-18",
    priority: "Medium",
    completed: false,
  },
];

export default function TaskManager() {
  const [tasks, setTasks] = useState(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null); // For edit mode

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "rgb(239 68 68)"; // red-500
      case "Medium":
        return "rgb(234 179 8)"; // yellow-500
      case "Low":
        return "rgb(34 197 94)"; // green-500
      default:
        return "rgb(107 114 128)"; // gray-500
    }
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTask = {
      id: currentTask ? currentTask.id : tasks.length + 1,
      name: formData.get("name"),
      dueDate: formData.get("dueDate"),
      priority: formData.get("priority"),
      completed: currentTask ? currentTask.completed : false,
    };

    if (currentTask) {
      setTasks(tasks.map((t) => (t.id === newTask.id ? newTask : t)));
    } else {
      setTasks([...tasks, newTask]);
    }
    setIsModalOpen(false);
    setCurrentTask(null);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    if (confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const openModal = (task = null) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <h2 className="text-4xl font-bold text-white mb-8">Task Manager</h2>

      <div className="mb-6 text-right">
        <button
          onClick={() => openModal()}
          className="flex items-center px-4 py-2 text-white rounded-lg shadow-md transition-all duration-300 ml-auto"
          style={{
            background: "linear-gradient(to right, #2a9d8f, #264653)",
            "&:hover": {
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            },
          }}
        >
          <Plus size={20} className="mr-2" /> Add New Task
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Tasks */}
        <GlassCard>
          <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
            <XCircle size={24} className="text-red-400 mr-2" /> Pending Tasks (
            {pendingTasks.length})
          </h3>
          <ul className="space-y-4">
            <AnimatePresence>
              {pendingTasks.length === 0 ? (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-white text-center py-4"
                  style={{ opacity: 0.8 }}
                >
                  No pending tasks. Great job!
                </motion.li>
              ) : (
                pendingTasks.map((task) => (
                  <motion.li
                    key={task.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg transition-colors"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)", // bg-white bg-opacity-5
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }, // hover:bg-opacity-10
                    }}
                  >
                    <div className="flex-1">
                      <p className="text-white text-lg font-semibold mb-1">
                        {task.name}
                      </p>
                      <div
                        className="flex items-center text-white text-sm"
                        style={{ opacity: 0.7 }}
                      >
                        <Calendar size={16} className="mr-1" /> {task.dueDate}
                        <Flag
                          size={16}
                          className="ml-4 mr-1"
                          style={{ color: getPriorityColor(task.priority) }}
                        />{" "}
                        {task.priority}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3 sm:mt-0">
                      <button
                        onClick={() => toggleTaskCompletion(task.id)}
                        className="p-2 rounded-full text-white transition-colors"
                        style={{
                          backgroundColor: "rgba(34, 197, 94, 0.3)", // bg-green-500 bg-opacity-30
                          "&:hover": {
                            backgroundColor: "rgba(34, 197, 94, 0.4)",
                          }, // hover:bg-opacity-40
                        }}
                        title="Mark as Complete"
                      >
                        <CheckCircle size={18} />
                      </button>
                      <button
                        onClick={() => openModal(task)}
                        className="p-2 rounded-full text-white transition-colors"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)", // bg-white bg-opacity-10
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                          }, // hover:bg-opacity-20
                        }}
                        title="Edit Task"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="p-2 rounded-full text-white transition-colors"
                        style={{
                          backgroundColor: "rgba(239, 68, 68, 0.3)", // bg-red-500 bg-opacity-30
                          "&:hover": {
                            backgroundColor: "rgba(239, 68, 68, 0.4)",
                          }, // hover:bg-opacity-40
                        }}
                        title="Delete Task"
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  </motion.li>
                ))
              )}
            </AnimatePresence>
          </ul>
        </GlassCard>

        {/* Completed Tasks */}
        <GlassCard>
          <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
            <CheckCircle size={24} className="text-emerald-400 mr-2" />{" "}
            Completed Tasks ({completedTasks.length})
          </h3>
          <ul className="space-y-4">
            <AnimatePresence>
              {completedTasks.length === 0 ? (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-white text-center py-4"
                  style={{ opacity: 0.8 }}
                >
                  No completed tasks yet.
                </motion.li>
              ) : (
                completedTasks.map((task) => (
                  <motion.li
                    key={task.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg transition-colors"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                      opacity: 0.7, // opacity-70
                    }}
                  >
                    <div className="flex-1 line-through">
                      <p className="text-white text-lg font-semibold mb-1">
                        {task.name}
                      </p>
                      <div
                        className="flex items-center text-white text-sm"
                        style={{ opacity: 0.7 }}
                      >
                        <Calendar size={16} className="mr-1" /> {task.dueDate}
                        <Flag
                          size={16}
                          className="ml-4 mr-1"
                          style={{ color: getPriorityColor(task.priority) }}
                        />{" "}
                        {task.priority}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3 sm:mt-0">
                      <button
                        onClick={() => toggleTaskCompletion(task.id)}
                        className="p-2 rounded-full text-white transition-colors"
                        style={{
                          backgroundColor: "rgba(234, 179, 8, 0.3)", // bg-yellow-500 bg-opacity-30
                          "&:hover": {
                            backgroundColor: "rgba(234, 179, 8, 0.4)",
                          }, // hover:bg-opacity-40
                        }}
                        title="Mark as Pending"
                      >
                        <XCircle size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="p-2 rounded-full text-white transition-colors"
                        style={{
                          backgroundColor: "rgba(239, 68, 68, 0.3)", // bg-red-500 bg-opacity-30
                          "&:hover": {
                            backgroundColor: "rgba(239, 68, 68, 0.4)",
                          }, // hover:bg-opacity-40
                        }}
                        title="Delete Task"
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  </motion.li>
                ))
              )}
            </AnimatePresence>
          </ul>
        </GlassCard>
      </div>

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <GlassCard className="w-full max-w-md">
            <h3 className="text-2xl font-bold text-white mb-6">
              {currentTask ? "Edit Task" : "Add New Task"}
            </h3>
            <form onSubmit={handleAddTask}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Task Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={currentTask?.name || ""}
                  className="w-full p-3 rounded-lg text-white"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    outline: "none",
                    "--tw-ring-color": "#2a9d8f",
                    boxShadow: "0 0 0 0px var(--tw-ring-color)",
                    transition: "box-shadow 0.15s ease-in-out",
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 2px var(--tw-ring-color)")
                  }
                  onBlur={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 0px var(--tw-ring-color)")
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="dueDate"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  defaultValue={currentTask?.dueDate || ""}
                  className="w-full p-3 rounded-lg text-white"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    outline: "none",
                    "--tw-ring-color": "#2a9d8f",
                    boxShadow: "0 0 0 0px var(--tw-ring-color)",
                    transition: "box-shadow 0.15s ease-in-out",
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 2px var(--tw-ring-color)")
                  }
                  onBlur={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 0px var(--tw-ring-color)")
                  }
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="priority"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Priority
                </label>
                <select
                  id="priority"
                  name="priority"
                  defaultValue={currentTask?.priority || "Medium"}
                  className="w-full p-3 rounded-lg text-white"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    outline: "none",
                    "--tw-ring-color": "#2a9d8f",
                    boxShadow: "0 0 0 0px var(--tw-ring-color)",
                    transition: "box-shadow 0.15s ease-in-out",
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 2px var(--tw-ring-color)")
                  }
                  onBlur={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 0px var(--tw-ring-color)")
                  }
                  required
                >
                  <option
                    value="High"
                    style={{ backgroundColor: "#264653", color: "white" }}
                  >
                    High
                  </option>
                  <option
                    value="Medium"
                    style={{ backgroundColor: "#264653", color: "white" }}
                  >
                    Medium
                  </option>
                  <option
                    value="Low"
                    style={{ backgroundColor: "#264653", color: "white" }}
                  >
                    Low
                  </option>
                </select>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 rounded-lg text-white transition-colors"
                  style={{
                    backgroundColor: "rgba(107, 114, 128, 0.3)",
                    "&:hover": { backgroundColor: "rgba(107, 114, 128, 0.4)" },
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg text-white shadow-md transition-all duration-300"
                  style={{
                    background: "linear-gradient(to right, #2a9d8f, #264653)",
                    "&:hover": {
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    },
                  }}
                >
                  {currentTask ? "Update Task" : "Add Task"}
                </button>
              </div>
            </form>
          </GlassCard>
        </motion.div>
      )}
    </Layout>
  );
}
