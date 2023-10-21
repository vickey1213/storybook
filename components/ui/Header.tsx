import React from 'react';
import { Card, CardContent, CardFooter } from './card';

const Header: React.FC = () => {
  return (
    <Card className='bg-#171a21'>
      <CardContent>
        <h3 className='text-white  '><span className='font'>pandas.DataFrame</span> <span className='text-green-700'>class</span> pandas.core.frame.DataFrame(data=None, index: 'Axes |
         <br/> None' = None, columns: 'Axes | None' = None, dtype: 'Dtype | None' = None, 
         <br/> copy: 'bool | None' = None) - 'None'
        </h3>
      </CardContent>
    </Card>
  );
};

export default Header;
