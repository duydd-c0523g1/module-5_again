import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import * as blog from "../service/PostService";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function AddNewPost() {
  const navigate = useNavigate();
  const initValue = {
    title: "",
    slug: "",
    category: "",
    updated: "",
  };
  async function handleSubmit(values) {
    let result = await blog.createBlog(values);
    if (result) {
      navigate("/");
    }
  }

  return (
    <>
      <div className="container">
        <div className="row text-lg-center">
          <div>
            <Formik
              initialValues={initValue}
              validationSchema={yup.object().shape({
                title: yup.string().required("Tiêu đề không được để trống"),
                category: yup.string().required("Danh mục không được để trống"),
                updated: yup.string().required("Thời gian không được để trống"),
              })}
              onSubmit={(value) => {
                handleSubmit(value);
              }}
            >
              <Form>
                <div>
                  <label htmlFor={"title"}>Title Blog</label>
                  <br />
                  <Field id="title" name="title"></Field>
                  <ErrorMessage
                    id="title"
                    name="title"
                    component="div"
                    className={"text-danger"}
                  ></ErrorMessage>
                </div>
                <div>
                  <label htmlFor={"slug"}>Slug Blog</label>
                  <br />
                  <Field id="slug" name="slug"></Field>
                  <ErrorMessage
                    id="slug"
                    name="slug"
                    component="div"
                    className={"text-danger"}
                  ></ErrorMessage>
                </div>
                <div>
                  <label htmlFor={"category"}>Category Blog</label>
                  <br />
                  <Field id="category" name="category"></Field>
                  <ErrorMessage
                    id="category"
                    name="category"
                    component="div"
                    className={"text-danger"}
                  ></ErrorMessage>
                </div>
                <div>
                  <label htmlFor={"updated"}>Updated Blog</label>
                  <br />
                  <Field id="updated" name="updated"></Field>
                  <ErrorMessage
                    id="updated"
                    name="updated"
                    component="div"
                    className={"text-danger"}
                  ></ErrorMessage>
                </div>
                <br />
                <div>
                  <button type="submit">Save</button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
