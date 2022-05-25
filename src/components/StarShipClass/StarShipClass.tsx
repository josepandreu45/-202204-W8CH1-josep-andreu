import { IStarShipClass } from "../../types/TypeStarShipClass";

const StarShipClass = ({ name, numbers }: IStarShipClass): JSX.Element => {
  return (
    <p>
      {name}: {numbers}
    </p>
  );
};

export default StarShipClass;
