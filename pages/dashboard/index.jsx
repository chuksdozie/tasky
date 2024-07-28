import { resetAccount } from "@/store/slices/account.slice";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard/taskboard");
  }, [router]);
  return (
    <div>
      index - dashboard{" "}
      <button onClick={() => dispatch(resetAccount())}>Log out</button>
    </div>
  );
};

export default Index;
