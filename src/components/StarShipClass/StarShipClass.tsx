import { IStarShipClass } from "../../types/TypeStarShipClass";

const StarShipClass = ({ name, numbers }: IStarShipClass): JSX.Element => {
  return (
    <>
      <p>{name} :</p> <span>{numbers}</span>
    </>
  );
};

export default StarShipClass;
