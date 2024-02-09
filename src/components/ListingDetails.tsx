import { useParams } from "react-router-dom";
import { Listing } from "../models/listingModel";
import Loader from "./LoadingSpinner";

interface Props {
  listings: Listing[];
  isLoading: boolean;
}

function ListingDetails({ listings, isLoading }: Props) {
  const routeId = useParams();
  const idparam = Number(routeId.id);

  let item: Listing = listings.filter((item) => item.id == idparam)[0];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container mt-5" style={{ display: "flex" }}>
          <div>
            <h1>Listing Details </h1>
            <img
              src="../src/assets/car_sample.jpg"
              width={600}
              height={400}
            ></img>
          </div>
          <div className="row mt-5 px-3">
            <h5>Owned by: {item?.name}</h5>
            <h5>Brand: {item?.brand}</h5>
            <h5>Year: {item?.year}</h5>
            <h5>Price: {item?.price}</h5>
            <h5>Kilometers Driven: {item?.kiloMetersDriven}</h5>
          </div>
        </div>
      )}
    </>
  );
}

export default ListingDetails;
