import { useState } from "react";

const posts = [
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
];

export default function Table() {
  const [post, setPost] = useState(posts);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPost([...post, { title: input }]);
  };
  return (
    <>
      <div className="container-fluid">
        <table className="table table-hover">
          <thead>
            <td>ID</td>
            <td>TITLE</td>
            <td>CATEGORY</td>
            <td>TIME</td>
            <td colSpan={2}>ACTION</td>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.category}</td>
                <td>{post.updatedAt}</td>
                <td>
                  <span>
                    <button type="button" className="btn btn-warning">
                      Edit
                    </button>
                  </span>
                  <span>
                    <button type="button" className="btn btn-danger">
                      DELETE
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="container-fluid">
        <h1>Add Post</h1>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="This is the title"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            placeholder="This is the category"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Content
          </label>
          <input
            type="text"
            className="form-control"
            id="content"
            placeholder="This is the content"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
