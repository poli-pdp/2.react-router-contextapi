import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const UserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handler = () => {
    navigate("/", { replace: true });
  };

  const { message, user, changeName } = useContext(GlobalContext);

  const handlerChangeName = () => {
    changeName("Ana");
  };

  return (
    <div>
      <h1>Info User</h1>
      <br />
      <h3>User Id: {id}</h3>
      <br />
      <h5>Name User: {user.name}</h5>
      <button onClick={handlerChangeName}>Change name</button>
      <br />
      <h5>Message: {message}</h5>
      <br />
      <button onClick={handler}>Home</button>
    </div>
  );
};

export default UserPage;
