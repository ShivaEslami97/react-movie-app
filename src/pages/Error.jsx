import { Link } from "react-router-dom";
import Section from "../components/Section";

const Error = () => {
  return (
    <Section className="text-white">
      <h2>404</h2>
      <p>Page not found</p>
      <Link className="text-main" to="/">
        Back Home
      </Link>
    </Section>
  );
};
export default Error;
