"use client";

import React, { useState } from "react";
import rocket from "@/app/Assets/rocket.png";
import Image from "next/image";
import axios from "axios";
import { useGlobalContext } from "@/app/context/globalContext";
import { chatTypes, reducerTypes } from "@/app/reducers/globalReducer";

type Props = {};

export default function Search({}: Props) {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { state: globalState, dispatch: globalDispatch } = useGlobalContext();

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      globalDispatch({
        type: reducerTypes.ADD_CHAT,
        payloadGlobal: {
          text: searchText,
          type: chatTypes.Question,
        },
      });
      const url = process.env.NEXT_PUBLIC_API_KEY;
      const response = await axios.get(`${url}${searchText}`);
      if (response.status === 200) {
        globalDispatch({
          type: reducerTypes.ADD_CHAT,
          payloadGlobal: {
            text: response.data,
            type: chatTypes.Answer,
          },
        });
      }
    } catch (error) {
      console.log(error, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="w-full h-full flex flex-shrink-0 gap-2">
      <input
        type="text"
        value={searchText}
        onChange={handleOnChange}
        className="content min-h-full w-full bg-transparent border-none outline-none text-base text-[#343333eb] px-4"
      />
      <button type="button" onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? (
          <span className="loading loading-dots loading-lg "></span>
        ) : (
          <Image
            src={rocket}
            alt="button"
            width={50}
            height={50}
            className="button p-1"
          />
        )}
      </button>
    </div>
  );
}