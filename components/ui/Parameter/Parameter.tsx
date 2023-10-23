import React from "react";
import { Card, CardContent, CardFooter } from "../card";

import parameterData from "../constant/ParameterData";

const Parameter = () => (
  <div>
    {parameterData.map((parameter, index) => (
      <Card
        key={index}
        className="flex bg-[#171a21] shadow-xl text-white justify-items-start items-center border-b-[0.15px] border-gray-700"
      >
        <CardContent className="flex gap-2 w-[30%]">
          <h3>{parameter.title}</h3>
          <h3 className="text-green-500">{parameter.value}</h3>
        </CardContent>
        <CardContent className="w-[70%] flex items-start">
          {parameter.description}
        </CardContent>
      </Card>
    ))}
  </div>
);

export default Parameter;
