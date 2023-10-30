import React from "react";

const Blog = () => {
  return (
    <div className="mb-5">
      <div className="container-fluid">
        <div className="row">
          <p className="text-center my-5 headingInBookProfessional">Blog</p>
          <p className="TextHolderLatestStory">Latest Stories</p>
          <hr className="LineInBlog mb-3" />
          <div className="col-md-6 ">
            <div>
              <img
                src="/assets/images/BlogImage1.svg"
                className="w-100 rounded h-100"
                alt="BlogImage1"
              />
            </div>

            <p className="my-2 HeadingInBlog">
              Case Study: HappyX app & brand identity
            </p>
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
              <img
                src="/assets/images/BlogImage5.svg"
                className="w-100 rounded h-100"
                alt="BlogImage1"
              />
            </div>

            <p className="my-2 HeadingInBlog">
              Case Study: HappyX app & brand identity
            </p>
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
            <img
              src="/assets/images/BlogImage3.svg"
              className="w-100 rounded"
              alt="BlogImage1"
            />
            <p className="my-2 HeadingInBlog">
              Case Study: HappyX app & brand identity
            </p>
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
            <img
              src="/assets/images/BlogImage4.svg"
              className="w-100 rounded"
              alt="BlogImage1"
            />
            <p className="my-2 HeadingInBlog">
              Case Study: HappyX app & brand identity
            </p>
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
            <img
              src="/assets/images/BlogImage2.svg"
              className="w-100 rounded"
              alt="BlogImage1"
            />
            <p className="my-2 HeadingInBlog">
              Case Study: HappyX app & brand identity
            </p>
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
          <p className="TextHolderLatestStory">Latest Stories</p>
          <hr className="LineInBlog mb-3" />
          <div className="col-md-9">
            <img src="/assets/images/blogDetails1.png" className="w-100 rounded" alt="blogDetails1" />
          </div>
          <div className="col-md-3">
          <img src="/assets/images/blogDetails2.png" className="w-100 rounded" alt="blogDetails1" />
          </div>
          <div className="col-md-3">
            <img src="/assets/images/blogDetails1.png" className="w-100 rounded" alt="blogDetails3" />
          </div>
          <div className="col-md-9">
          <img src="/assets/images/blogDetails2.png" className="w-100 rounded" alt="blogDetails4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
