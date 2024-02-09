import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ListingDetails from "./components/ListingDetails";
import Listings from "./components/Listings";
import { useEffect, useState } from "react";
import { User } from "./models/userModel";
import { Listing } from "./models/listingModel";

function App() {
  const [userDetails, SetUserDetails] = useState<User>({
    first_name: "",
    last_name: "",
    user_name: "",
    email: "",
  });
  const [carListings, SetCarListings] = useState<Listing[]>([]);
  const [showSpinner, SetShowSpinner] = useState(false);

  useEffect(() => {
    SetShowSpinner(true);
    fetch("http://localhost:5173/src/user.json")
      .then((resp) => resp.json())
      .then((jsonResp) => {
        setTimeout(() => {
          SetUserDetails(jsonResp);
          SetShowSpinner(false);
        }, 5000);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    SetShowSpinner(true);
    fetch("http://localhost:5173/src/listings.json")
      .then((resp) => resp.json())
      .then((jsonResp) => {
        setTimeout(() => {
          SetCarListings(jsonResp);
          SetShowSpinner(false);
        }, 5000);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Home
              isLoading={showSpinner}
              user={userDetails}
              listings={carListings}
            />
          }
        />
        <Route
          path="/listing/:id"
          element={
            <ListingDetails isLoading={showSpinner} listings={carListings} />
          }
        />
        <Route
          path="/listings"
          element={<Listings isLoading={showSpinner} listings={carListings} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
