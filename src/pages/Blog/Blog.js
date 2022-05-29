import React from "react";
import { TextMedium } from "../../components/design/Text/Text";
import { H1, H2 } from "../../components/design/Title/Title";

const Blog = () => {
  const blogs = [
    {
      _id: 1,
      title: "Difference between `javascript` and `nodejs`",
      content:
        "JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.",
    },
    {
      _id: 2,
      title: "When should you use `nodejs` and when should you use `mongodb`",
      content:
        "Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind. And MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.",
    },
    {
      _id: 3,
      title: "Differences between `sql` and `nosql` databases.",
      content:
        "SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.",
    },
    {
      _id: 4,
      title: "What is the purpose of `jwt` and how does it work",
      content:
        "JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.",
    },
  ];

  return (
    <div className="container mx-auto mb-12">
      <H1>Blogs</H1>
      {blogs.map((blog) => (
        <div key={blog._id} className="">
          <div class="divider"></div>
          <H2>{blog.title}</H2>
          <TextMedium className="py-3">{blog.content}</TextMedium>
        </div>
      ))}
    </div>
  );
};

export default Blog;
