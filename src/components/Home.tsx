import { User } from "../models/userModel";
import Loader from "./LoadingSpinner";
import { Listing } from "../models/listingModel";

interface Props {
  user: User;
  listings: Listing[];
  isLoading: boolean;
}

function Home({ user, listings, isLoading }: Props) {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container mt-5">
          <h1 style={{ textAlign: "center" }}>Search for used cars.</h1>
          <div className="row mt-5">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">User's Profile</h3>
                  <ul className="list-group list-group-flush">
                    <li className="row list-group-item">
                      <h5>First name: {user.first_name}</h5>
                    </li>
                    <li className="row list-group-item">
                      <h5>Last name: {user.last_name} </h5>
                    </li>
                    <li className="row list-group-item">
                      <h5>Username: {user.user_name} </h5>
                    </li>
                    <li className="row list-group-item">
                      <h5>Email: {user.email} </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">
                    Number of listings: {listings.length}
                  </h3>
                  <br />
                  <br />
                  <br />
                  <br />
                  <h5 className="card-text">
                    See all the listings available here.
                  </h5>
                  <br />
                  <a href="/listings" className="btn btn-primary">
                    Show listings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
