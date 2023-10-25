import React from "react";
import { Card, CardContent, CardFooter } from "../card";

import parameterData from "../constant/ParameterData";

const Parameter = () => (
  <div>
    {parameterData.map((parameter, index) => (
      <Card
        key={index}
        className="flex bg-[#171a21] shadow-xl text-white text-sm justify-items-start items-center border-b-[0.15px] border-gray-700"
      >
        <CardContent className="flex gap-2 w-[30%] overflow-auto">
          {parameter.title}
          <p className="text-green-500">{parameter.value}</p>
        </CardContent>
        <CardContent className="w-[70%] flex">
          {parameter.description}
        </CardContent>
      </Card>
    ))}
  </div>
);

export default Parameter;
