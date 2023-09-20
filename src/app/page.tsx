"use client";

import Image from "next/image";
import Sidebar from "@/app/components/Sidebar";
import Ask from "./components/Ask";
import Response from "./components/Response";
import Search from "./components/Search";
import { useGlobalContext } from "./context/globalContext";
import { chatTypes } from "./reducers/globalReducer";
import { useSession } from "next-auth/react";
import { Session } from "inspector";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { state: globalState, dispatch: globalDispatch } = useGlobalContext();
  const { data: session } = useSession();

  if (!session?.user) {
    useRouter().push("/auth/login");
  }

  return (
    <main className="grid grid-cols-6 gap-3 w-screen h-screen p-5">
      <div className="glass-side col-span-1  ">
        <Sidebar />
      </div>

      <div className="glass col-span-5 flex flex-col gap-2 p-5 overflow-y-auto">
        <div className="flex flex-col gap-2 overflow-y-auto">
          {globalState.chats.map((chat, index) =>
            chat.type === chatTypes.Question ? (
              <Ask key={index} question={chat.text} />
            ) : (
              <Response key={index} response={chat.text} />
            )
          )}
        </div>
        <div className="mt-auto pt-4 ">
          <Search />
        </div>
      </div>
    </main>
  );
}
