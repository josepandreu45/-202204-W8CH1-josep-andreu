import { IStarShipTotal } from "../../types/TypeStarShipClass";

const StarShipTotal = ({ number }: IStarShipTotal): JSX.Element => {
  return (
    <>
      <p>{number}</p>
    </>
  );
};

export default StarShipTotal;
