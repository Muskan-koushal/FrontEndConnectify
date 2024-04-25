import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Api from "./WebApi";
import "../sign.css";

function BusinessCard() {
  const [formData, setFormData] = useState({
    businessName: "",
    businessEmail: "",
    businessType: "",
    businessAddress: "",
    businessContact: "",
    businessOptionNumber: "",
    businesslandlineNumber: "",
    businessEstablishYear: "",
    businessWebsiteUrl: "",
    businessGstNo: "",
    businessAbout: "",
    businessInstagramLink: "",
    businessFacebookLink: "",
    businessTwitterLink: "",
    businessLinkedInLink: "",
    businessLogo: "",
    businessPhoto: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBusinessCard = async (e) => {
    e.preventDefault();
    try {
      // Send formData to backend using axios
      console.log(formData);
      // let response = await axios.post(Api.signup, formData);
      // console.log(response);
      toast.success("Sign up success! Please sign in.");
    } catch (error) {
      toast.error("Oops! Something went wrong.");
    }
  };

  return (
    <>
      <ToastContainer />
      <form id="businessForm">
    <input type="text" name="businessName" placeholder="Business Name" required>
    <input type="email" name="businessEmail" placeholder="Business Email" required>
    <input type="text" name="businessType" placeholder="Business Type">
    <input type="text" name="businessAddress" placeholder="Business Address" required>
    <input type="text" name="businessContact" placeholder="Business Contact" required>
    <input type="number" name="businessOptionNumber" placeholder="Business Option Number">
    <input type="number" name="businesslandlineNumber" placeholder="Business Landline Number">
    <input type="number" name="businessEstablishYear" placeholder="Business Establishment Year" required>
    <input type="text" name="businessWebsiteUrl" placeholder="Business Website URL">
    <input type="number" name="businessGstNo" placeholder="Business GST Number">
    <textarea name="businessAbout" placeholder="Business About"></textarea>
    <input type="text" name="businessInstagramLink" placeholder="Business Instagram Link">
    <input type="text" name="businessFacebookLink" placeholder="Business Facebook Link">
    <input type="text" name="businessTwitterLink" placeholder="Business Twitter Link">
    <input type="text" name="businessLinkedInLink" placeholder="Business LinkedIn Link">
    <input type="text" name="businessLogo" placeholder="Business Logo URL">
    <input type="text" name="businessPhoto" placeholder="Business Photo URL">
    <button type="submit">Submit</button>
</form>


    </>
  );
}

export default BusinessCard;
