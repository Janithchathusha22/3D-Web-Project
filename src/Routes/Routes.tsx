import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/views/Home";
import Blogs from "@/views/Blogs";
import BlogOne from "@/views/Blogs/BlogOne";
import BlogTwo from "@/views/Blogs/BlogTwo";
import ContactUs from "@/views/ContactUs";
import Careers from "@/views/Careers";
import BlogThree from "@/views/Blogs/BlogThree";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home/> },
      { path: "blogs", element: <Blogs /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "careers", element: <Careers /> },
      { path: "the-untold-power-of-your-value-proposition", element: <BlogOne /> },
      { path: "unveiling-your-brand-s-soul", element: <BlogTwo /> },
      { path: "website-analytics", element: <BlogThree /> },
      
    ],
  },
]);