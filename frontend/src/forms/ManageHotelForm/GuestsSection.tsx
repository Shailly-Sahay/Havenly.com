import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h3 className="mb-3">Guests</h3>
      <div className="grid grid-cols-2 p-6 gap-5 bg-gray-300">
        <label className="text-label">
          Adults
          <input
            type="number"
            className="text-input"
            min={1}
            {...register("adultCount", {
              required: true,
            })}
          />
          {errors.adultCount?.message && (
            <span className="font-error">{errors.adultCount?.message}</span>
          )}
        </label>

        <label className="text-label">
          Children
          <input
            type="number"
            className="text-input"
            min={0}
            {...register("childCount", {
              required: true,
            })}
          />
          {errors.childCount?.message && (
            <span className="font-error">{errors.childCount?.message}</span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestsSection;
