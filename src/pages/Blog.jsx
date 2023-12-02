import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Blog = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {};
  }, [location.pathname]);
  return (
    <div className="mb-5">
      <div className="container-fluid ">
        <div className="row">
          <p className="text-start my-3 headingInBookProfessional">Blog</p>
          <p className="TextHolderLatestStory">Latest Stories</p>
          <hr className="LineInBlog mb-3" />
          <div className="col-md-6 ">
            <div>
              <Link to={"/blog-details"}>
                <img
                  src="/assets/images/BlogImage1.svg"
                  className="w-100 rounded h-100"
                  alt="BlogImage1"
                />
              </Link>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-1">
              <p className="my-2 HeadingInBlog">
                Case Study: HappyX app & brand identity
              </p>
              <Link to={"/blog-details"}>
                <Button className="button">Learn More</Button>
              </Link>
            </div>

            <p className="SubHeadingInBlog mb-2">
              The design process with a mission to make an easier life for
              separated families
            </p>
            <div className="outerWrapperUserInBlog d-flex gap-2">
              <img src="/assets/images/blogUser.svg" alt="blogUser" />
              <div>
                <p className="userHeadingInBlog">Assad Ali</p>
                <p className="mt-2 userSubHeadingInBlog">
                  Jun 14 . 16 min read
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div>
              <Link to={"/blog-details"}>
                <img
                  src="/assets/images/BlogImage5.svg"
                  className="w-100 rounded h-100"
                  alt="BlogImage1"
                />
              </Link>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-1">
              <p className="my-2 HeadingInBlog">
                Case Study: HappyX app & brand identity
              </p>
              <Link to={"/blog-details"}>
                <Button className="button">Learn More</Button>
              </Link>
            </div>
            <p className="SubHeadingInBlog mb-2">
              The design process with a mission to make an easier life for
              separated families
            </p>
            <div className="outerWrapperUserInBlog d-flex gap-2">
              <img src="/assets/images/blogUser.svg" alt="blogUser" />
              <div>
                <p className="userHeadingInBlog">Assad Ali</p>
                <p className="mt-2 userSubHeadingInBlog">
                  Jun 14 . 16 min read
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4 ">
            <Link to={"/blog-details"}>
              <img
                src="/assets/images/BlogImage3.svg"
                className="w-100 rounded"
                alt="BlogImage1"
              />
            </Link>

            <div className="d-flex justify-content-between align-items-center mt-1">
              <p className="my-2 HeadingInBlog">
                Case Study: HappyX app & brand identity
              </p>
              <Link to={"/blog-details"}>
                <Button className="button">Learn More</Button>
              </Link>
            </div>
            <p className="SubHeadingInBlog mb-2">
              The design process with a mission to make an easier life for
              separated families
            </p>
            <div className="outerWrapperUserInBlog d-flex gap-2">
              <img src="/assets/images/blogUser.svg" alt="blogUser" />
              <div>
                <p className="userHeadingInBlog">Assad Ali</p>
                <p className="mt-2 userSubHeadingInBlog">
                  Jun 14 . 16 min read
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <Link to={"/blog-details"}>
              <img
                src="/assets/images/BlogImage4.svg"
                className="w-100 rounded"
                alt="BlogImage1"
              />
            </Link>
            <div className="d-flex justify-content-between align-items-center mt-1">
              <p className="my-2 HeadingInBlog">
                Case Study: HappyX app & brand identity
              </p>
              <Link to={"/blog-details"}>
                <Button className="button">Learn More</Button>
              </Link>
            </div>
            <p className="SubHeadingInBlog mb-2">
              The design process with a mission to make an easier life for
              separated families
            </p>
            <div className="outerWrapperUserInBlog d-flex gap-2">
              <img src="/assets/images/blogUser.svg" alt="blogUser" />
              <div>
                <p className="userHeadingInBlog">Assad Ali</p>
                <p className="mt-2 userSubHeadingInBlog">
                  Jun 14 . 16 min read
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <Link to={"/blog-details"}>
              <img
                src="/assets/images/BlogImage2.svg"
                className="w-100 rounded"
                alt="BlogImage1"
              />
            </Link>
            <div className="d-flex justify-content-between align-items-center mt-1">
              <p className="my-2 HeadingInBlog">
                Case Study: HappyX app & brand identity
              </p>
              <Link to={"/blog-details"}>
                <Button className="button">Learn More</Button>
              </Link>
            </div>
            <p className="SubHeadingInBlog mb-2">
              The design process with a mission to make an easier life for
              separated families
            </p>
            <div className="outerWrapperUserInBlog d-flex gap-2">
              <img src="/assets/images/blogUser.svg" alt="blogUser" />
              <div>
                <p className="userHeadingInBlog">Assad Ali</p>
                <p className="mt-2 userSubHeadingInBlog">
                  Jun 14 . 16 min read
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 mt-3">
          <p className="TextHolderLatestStory">Latest Stories</p>
          <hr className="LineInBlog mb-3" />
          <div className="col-md-7">
            <Link to={"/blog-details"}>
              <img
                src="/assets/images/blogDetails1.png"
                className="w-100 h-100 rounded"
                alt="blogDetails1"
              />
            </Link>
          </div>
          <div className="col-md-5">
            <Link to={"/blog-details"}>
              <img
                src="/assets/images/blogDetails2.png"
                className="w-100 h-100 rounded"
                alt="blogDetails1"
              />
            </Link>
          </div>
          <div className="col-md-5">
            <Link to={"/blog-details"}>
              <img
                src="/assets/images/blogDetails3.png"
                className="w-100 h-100 rounded"
                alt="blogDetails3"
              />
            </Link>
          </div>
          <div className="col-md-7">
            <Link to={"/blog-details"}>
              <img
                src="/assets/images/blogDetails4.png"
                className="w-100 h-100 rounded"
                alt="blogDetails4"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
