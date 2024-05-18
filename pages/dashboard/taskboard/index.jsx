import { useCounterQuery } from "@/hooks/counter/counter.hook";
import React from "react";

const Index = () => {
  const { data } = useCounterQuery();
  return <div>index - TaskBoard</div>;
};

export default Index;
