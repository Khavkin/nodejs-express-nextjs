import { NextPageContext } from "next";
const page404 = ({ statusCode }) => {
  return (
    <p>
      <h1>404</h1>
    </p>
  );
};
page404.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
export default page404;