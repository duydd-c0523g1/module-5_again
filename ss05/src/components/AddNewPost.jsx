import { useState } from "react";
import Navbar from "./Navbar";

export default function AddNewPost() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "5 Best Crypto Performers During The 2022 Market Flop",
      slug: "5-best-crypto-performers-during-the-2022-market-flop",
      category: "Crypto News",
      updatedAt: "21 hours ago",
    },
    {
      id: 2,
      title: " Top crypto funding stories of 2022  ",
      slug: "top-crypto-funding-stories-of-2022",
      category: "New Year Special",
      updatedAt: "a day ago",
    },
    {
      id: 3,
      title: " 2023 will see the death of play-to-earn gaming ",
      slug: "2023-will-see-the-death-of-playtoearn-gaming",
      category: " Opinion",
      updatedAt: "a day ago",
    },
    {
      id: 4,
      title: " US lawmakers under pressure following FTX collapse: Report  ",
      slug: "us-lawmakers-under-pressure-following-ftx-collapse-report",
      category: " News",
      updatedAt: "2 days ago",
    },
    {
      id: 5,
      title:
        "A Crypto Holiday Special: Past, Present, And Future With Material Indicators",
      slug: "a-crypto-holiday-special-past-present-and-future-with-material-indicators",
      category: "Interviews",
      updatedAt: "2 days ago",
    },
    {
      id: 6,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      slug: "lorem-ipsum, dolor-sit-amet-consectetur-adipisicing-elit",
      category: "Crypto News",
      updatedAt: "5 days ago",
    },
  ]);

  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = form.id && form.title && form.category && form.time;
    if (isValid) {
      setPosts((prevState) => [...prevState, form]);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <h1>Add Post</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">
              ID
            </label>
            <input
              type="text"
              className="form-control"
              id="id"
              name="id"
              value={form.id || posts.length + 1}
              placeholder="00"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={form.title || ""}
              placeholder="This is the title"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              value={form.category || ""}
              placeholder="This is the category"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Last update
            </label>
            <input
              type="text"
              className="form-control"
              id="timestamp"
              name="timestamp"
              value={form.time || ""}
              placeholder="69 hours ago"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-primary"
              onSubmit={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
