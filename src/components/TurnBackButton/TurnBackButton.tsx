"use client";

import { useRouter } from "next/navigation";
import React from "react";

const TurnBackButton = () => {
  const router = useRouter();

  return <button onClick={() => router.back()}>← Back</button>;
};

export default TurnBackButton;
