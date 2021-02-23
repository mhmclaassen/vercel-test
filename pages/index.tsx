import Hello from "../components/Hello";
import useSWR from "swr";
import { fetcher, FetchError } from "../lib/fetcher";
import { Fragment, useState } from "react";
import { IUser } from "./api/hello";

export default function Home() {
  const { data, error } = useSWR<IUser, FetchError>("/api/hello", fetcher);

  const [counter, setCounter] = useState<number>(0);

  const hanleIncrement = () => setCounter((prev) => prev + 1);
  const hanleDecrement = () => setCounter((prev) => prev - 1);

  const hobbies = ["asdas", "asdasd"];
  return (
    <Fragment>
      <h1>Newer and shiny title</h1>
      {!data && !error && <h2>Loading..</h2>}
      {error && <h2>Error: {error.message}</h2>}
      {data && <Hello user={data}></Hello>}
      <div>
        <button onClick={hanleDecrement}>-</button>
        <div>{counter}</div>
        <button onClick={hanleIncrement}>+</button>
      </div>
    </Fragment>
  );
}
