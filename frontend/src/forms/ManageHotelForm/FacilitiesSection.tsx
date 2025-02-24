import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="">
      <h3 className="mb-3">Facilites</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
        {hotelFacilities.map((facility) => (
          <label className="flex gap-1 text-label">
            <input
              type="checkbox"
              value={facility}
              {...(register("facilities"),
              {
                validate: (facility) => {
                  if (facility && facility.length > 0) {
                    return true;
                  } else {
                    return "At least one facility is required";
                  }
                },
              })}
            />
            {facility}
          </label>
        ))}
      </div>
      {errors.facilities && (
        <span className="font-error">{errors.facilities.message}</span>
      )}
    </div>
  );
};

export default FacilitiesSection;
