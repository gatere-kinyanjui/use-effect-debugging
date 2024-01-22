import { useNavigate } from "react-router-dom";
import { IResult } from "./lib/interfaces";

interface IUser {
  data: IResult;
}

const User: React.FC<IUser> = ({ data }) => {
  const navigate = useNavigate();

  const { name, email, picture, location } = data;

  return (
    <div className="render-wrapper" key={email}>
      <img src={picture.large} alt={email} />
      <p>
        <span className="name">
          {name.first} {name.last}
        </span>
      </p>
      <p>{`${location.city}, ${location.state}`}</p>
      <p>{email}</p>
      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
};

export default User;
