"use client";
import React from "react";

export default function Loading() {
  return (
    <main className="flex h-dvh max-h-dvh w-full flex-col items-center justify-center bg-gradient-midnight text-white before:fixed before:bottom-0 before:left-0 before:z-0 before:h-9/10 before:w-3/2 before:overflow-hidden before:bg-star before:bg-cover before:bg-left before:bg-no-repeat before:opacity-40 before:content-[''] after:fixed after:right-0 after:top-0 after:z-0 after:h-3/4 after:w-6/5 after:bg-star after:bg-cover after:bg-left after:bg-no-repeat after:opacity-40 after:content-['']">
      <p className="text-base leading-6">loading...</p>
    </main>
  );
}
