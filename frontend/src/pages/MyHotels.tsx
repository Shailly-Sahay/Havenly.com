import { Button } from "../components/ui";
import { useQuery } from "react-query";
import * as apiClient from "../api/apiClient";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {},
    }
  );

  return (
    <div className="space-y-5">
      <span className="flex justify-between">
        <h2>My Hotels</h2>
        <Button type="secondary" text="Add Hotel" href="/add-hotel" />
      </span>

      {hotelData ? (
        <div className="grid grid-cols-1 gap-8">
          {hotelData.map((hotel) => (
            <div
              key={hotel._id}
              className="flex flex-col justify-between border rounded-lg p-8 gap-5"
            >
              <h3>{hotel.name}</h3>
              <div className="whitespace-pre-line">
                <p>{hotel.description}</p>
              </div>
              <div className="grid grid-cols-5 gap-2">
                <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                  <BsMap className="mr-1" />
                  {hotel.city}, {hotel.country}
                </div>
                <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                  <BsBuilding className="mr-1" />
                  {hotel.type}
                </div>
                <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                  <BiMoney className="mr-1" />${hotel.pricePerNight} per night
                </div>
                <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                  <BiHotel className="mr-1" />
                  {hotel.adultCount} {hotel.adultCount > 1 ? "adults" : "adult"}
                  , {hotel.childCount}{" "}
                  {hotel.childCount > 1 ? "children" : "child"}
                </div>
                <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                  <BiStar className="mr-1" />
                  {hotel.starRating} Star Rating
                </div>
              </div>
              <span className="flex justify-end">
                <Button href={`/edit-hotel/${hotel._id}`} text="View Details" />
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p>No hotels found</p>
      )}
    </div>
  );
};

export default MyHotels;
