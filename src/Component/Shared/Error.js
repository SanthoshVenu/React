import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <li>{err.error.message}</li>
      <li>
        {err.status}- {err.statusText}
      </li>
    </div>
  );
};

export default Error;
