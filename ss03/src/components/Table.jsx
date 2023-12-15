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
];

export default function Table() {
  return (
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
            <tr key={crypto.randomUUID}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.category}</td>
              <td>{post.updatedAt}</td>
              <td>
                <span><button type="button" className="btn btn-primary">EDIT</button></span> 
                <span><button type="button" className="btn btn-danger">DELETE</button></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
