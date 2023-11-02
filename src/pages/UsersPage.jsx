import { Link } from "react-router-dom";

const UsersPage = () => {
  return (
    <div>
      <h1>List Users</h1>
      <br />
      <ul>
        <li>
          <Link to="/user/10">User 10</Link>
        </li>
        <li>
          <Link to="/user/20">User 20</Link>
        </li>
        <li>
          <Link to="/user/30">User 30</Link>
        </li>
      </ul>
    </div>
  );
};

export default UsersPage;
