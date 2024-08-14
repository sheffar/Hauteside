
'use client'
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const ImageUploader = () => {
  const API_SECRET_KEY = "sk_test_4bc4b4fe0c096711f455a82c7f225e128efbf53b"; //Test Secret Key for Test mode on

  const transactionDetails = {
    email: "customer@email.com",
    amount: 10000,
    metadata: {
      custom_fields: [
        {
          display_name: "Customer's name",
          variable_name: "customer_name",
          value: "John Doe",
        },
      ],
    },
  };

  const router = useRouter()

  const Pay = () => {
  };

  return (
    <button
      onClick={Pay}
      className="border-2 mt-56 h-12 w-28 rounded-md shadow-md duration-300 active:scale-95"
      type="submit"
    >
      Upload
    </button>
  );
};

export default ImageUploader;
