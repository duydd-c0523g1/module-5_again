export default function Add() {
  return (
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
        />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}