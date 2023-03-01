import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Map } from "../component/map";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <div className=" h-25">
        <Map />
      </div>
    </div>
  );
};
