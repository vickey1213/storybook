import React from 'react';
import { Card, CardContent, CardFooter,  } from '../card';

import parameterData from '../constant/ParameterData'

const Parameter = () => (
  <div className=''>
  {parameterData.map((parameter, index) => (
    <div  key={index} className="flex  #171a21 bg-[#171a21] shadow-xl text-white justify-evenly items-center border-b border-dotted pt-6">
      <CardContent className="flex  items-center space-x-2 ">
        <h3>{parameter.title}</h3>
        <h3 className='text-green-500'>{parameter.value}</h3>
      </CardContent>
      <CardFooter >{parameter.description}</CardFooter>

    </div>
  ))}
</div>

);

export default Parameter;

