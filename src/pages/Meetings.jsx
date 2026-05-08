import React, { useState, useEffect } from "react";
import axios from "axios";

function Meetings() {
  const [meetings, setMeetings] = useState([]);
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    link: "",
    participant: "student",
  });
  const [editId, setEditId] = useState(null);

  // Fetch meetings
  const fetchMeetings = async () => {
    const res = await axios.get("http://localhost:5000/api/meetings");
    setMeetings(res.data);
  };

  useEffect(() => {
    fetchMeetings();
  }, []);

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Create / Update
  const handleSubmit = async () => {
    if (!form.title || !form.date || !form.time || !form.link) {
      alert("Fill all fields");
      return;
    }

    if (editId) {
      await axios.put(
        `http://localhost:5000/api/meetings/${editId}`,
        form
      );
      setEditId(null);
    } else {
      await axios.post("http://localhost:5000/api/meetings", form);
    }

    setForm({
      title: "",
      date: "",
      time: "",
      link: "",
      participant: "student",
    });

    fetchMeetings();
  };

  // Delete
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/meetings/${id}`);
    fetchMeetings();
  };

  // Edit
  const handleEdit = (meeting) => {
    setForm(meeting);
    setEditId(meeting._id);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Meeting Management</h2>

      {/* Form */}
      <div className="card p-3 mb-4">
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="form-control mb-2" />
        <input type="date" name="date" value={form.date} onChange={handleChange} className="form-control mb-2" />
        <input type="time" name="time" value={form.time} onChange={handleChange} className="form-control mb-2" />
        <input name="link" placeholder="Meeting Link" value={form.link} onChange={handleChange} className="form-control mb-2" />

        <select name="participant" value={form.participant} onChange={handleChange} className="form-control mb-2">
          <option value="student">Student</option>
          <option value="parent">Parent</option>
          <option value="both">Both</option>
        </select>

        <button className="btn btn-primary" onClick={handleSubmit}>
          {editId ? "Update Meeting" : "Create Meeting"}
        </button>
      </div>

      {/* List */}
      <div className="card p-3">
        <h4>Upcoming Meetings</h4>

        {meetings.map((m) => (
          <div key={m._id} className="border p-2 mb-2 d-flex justify-content-between">
            <div>
              <strong>{m.title}</strong><br />
              {m.date} at {m.time}<br />
              For: {m.participant}
            </div>

            <div>
              <a href={m.link} target="_blank" rel="noreferrer" className="btn btn-success btn-sm me-2">
                Join
              </a>

              <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(m)}>
                Edit
              </button>

              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(m._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meetings;