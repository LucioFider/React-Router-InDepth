import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        nobis autem error, iure doloremque optio corporis iusto est voluptatum
        deleniti earum accusantium sed voluptate nemo veritatis, ab cum eius
        fuga.
      </p>
      <p>
        Go to the <Link to="/">HomePage</Link>
      </p>
    </div>
  );
}
