import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="flex flex-col gap-4">
      <h3 className=" mb-3">Add Hotel</h3>
      <label className="text-label flex-1">
        Name
        <input
          type="text"
          className="text-input"
          {...register("name", { required: "This field is required" })}
        />
        {errors.name && (
          <span className="text-muted text-red-500">{errors.name.message}</span>
        )}
      </label>

      <div className="flex flex-col sm:flex-row gap-4">
        <label className="text-label flex-1">
          City
          <input
            type="text"
            className="text-input"
            {...register("city", { required: "This field is required" })}
          />
          {errors.city && (
            <span className="text-muted text-red-500">
              {errors.city.message}
            </span>
          )}
        </label>
        <label className="text-label flex-1">
          Country
          <input
            type="text"
            className="text-input"
            {...register("country", { required: "This field is required" })}
          />
          {errors.country && (
            <span className="text-muted text-red-500">
              {errors.country.message}
            </span>
          )}
        </label>
      </div>

      <label className="text-label flex-1">
        Description
        <textarea
          rows={10}
          className="text-input"
          {...register("description", { required: "This field is required" })}
        ></textarea>
        {errors.description && (
          <span className="text-muted text-red-500">
            {errors.description.message}
          </span>
        )}
      </label>

      <div className="flex flex-col sm:flex-row gap-4">
        <label className="text-label flex-1">
          Price Per Night
          <input
            type="number"
            min={1}
            className="text-input"
            {...register("pricePerNight", {
              required: "This field is required",
            })}
          />
          {errors.pricePerNight && (
            <span className="text-muted text-red-500">
              {errors.pricePerNight.message}
            </span>
          )}
        </label>

        <label className="text-label flex-1">
          Star Rating
          <select
            {...register("starRating", {
              required: "This field is required",
            })}
            className="border rounded w-full p-2 text-gray-700 bg-white font-normal"
          >
            <option value="" className="text-sm font-bold">
              Select a rating
            </option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option value={num}>{num}</option>
            ))}
          </select>
          {errors.starRating && (
            <span className="text-muted text-red-500">
              {errors.starRating.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default DetailsSection;
