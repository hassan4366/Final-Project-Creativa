import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import App from "./App";
import Properatie from "./Properiets/Properatie";
import Alldeatail from "./Deatials/Alldeatail";
import Allcontact from "./Contact/Allcontact";
import Allapi from "./DataApi/Allapi";
import { Apidata } from "./Data/Apidata";
import Allshop from "./Shop/Allshop";
import Allcart from "./Cart/Allcart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "properatie",
    element: <Properatie />,
  },
  {
    path: "Alldeatail",
    element: <Alldeatail />,
  },
  {
    path: "Allcontact",
    element: <Allcontact />,
  },
  {
    path: "DataApi",
    element: <Allapi />,
  },
  {
    path: "Allshop",
    element: <Allshop />,
  },
  {
    path: "Allcart",
    element: <Allcart />,
  }
]);

createRoot(document.getElementById("root")).render(
  <Apidata>
    <RouterProvider router={router} />
    <ScrollToTop
      smooth
      style={{ borderRadius: "50%", width: "40px", backgroundColor: "#f35525" }}
    />
  </Apidata>,
);

//============================= JSX Notes =============================//

// rfce      اختصار ل React Functional Component Exported

// اي تاجه موجوده في ملف jsx لازم يبقي closing tag ليها
//============> Example <=============//
// يعني لو فتحنا تاجه <div> لازم نقفله </div>
// لو التاجه ملهاش closing tag زي img , input , br  بنستخدم self-closing tag
// يعني بنكتبها كده <img /> , <input /> , <br />

// يفضل نكتب اسم  class  ب className

//============================= End of JSX Notes =============================//

// =========start React Router Setup========//

// React Router Setup

//createbrowserRouter --> to create the router object
// RouterProvider --> to provide the router to the app

// =========end React Router Setup========//
