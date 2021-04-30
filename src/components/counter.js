import React from "react";
import useStore from "../useStore";
import {useObserver} from 'mobx-react'

const Counter = () => {
  const {counter} = useStore();

  const increase = () => {
    counter.increase();
  };

  const decrease = () => {
    counter.decrease();
  };

  return useObserver(() => (
    <div>
      <h1>{counter.number}</h1>
      <button onClick={decrease}>-1</button>
      <button onClick={increase}>+1</button>
    </div>
  ));
};

export default Counter;
