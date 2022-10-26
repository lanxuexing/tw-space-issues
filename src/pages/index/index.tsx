import { View } from "@tarojs/components";
import classNames from 'classnames';
import React from "react";
import './index.scss';

const Index = () => {

  return (
    <View className='flex justify-center items-center'>
      <View className='flex flex-col mx-5 w-full space-y-3 border border-blue-500'>
        {[...Array(10).keys()].map((x, i) => {
          return (
            <View
              key={x}
              className={classNames(
                'flex flex-1 items-center justify-center h-10 text-lg text-red-500', {
                'bg-green-400': i % 2 === 0,
                'bg-red-400': i % 2 !== 0,
              })}
            >
              {x + 1}
            </View>
          )
        })}
      </View>
    </View>
  );
};

export default Index;
