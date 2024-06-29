import { AppDispatch, RootState } from "./redux/store";
import { decrement, increment } from "./redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="h-full w-full">
      <div className=" flex flex-col justify-center items-center">
        <p className="text-3xl text-center">Count is {count}</p>
        <button
          className="m-2 border-2 w-28 h-10 rounded-lg active:bg-slate-400"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="m-2 border-2 w-28 h-10 rounded-lg active:bg-slate-400"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
