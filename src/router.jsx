import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages";
import SignIn from "./pages/signIn";
import User from "./pages/user";

export default function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="sign-in" element={<SignIn/>} />
            <Route path="/user" element={<User/>} />
         </Routes>
      </BrowserRouter>
   );
}