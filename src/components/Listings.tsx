import { Listing } from "../models/listingModel.ts";
import TableView from "./TableView.tsx";

interface Props {
  listings: Listing[];
  isLoading: boolean;
}
function Listings({ listings, isLoading }: Props) {
  return (
    <>
      <TableView isSpinnerLoading={isLoading} data={listings}></TableView>
    </>
  );
}

export default Listings;
