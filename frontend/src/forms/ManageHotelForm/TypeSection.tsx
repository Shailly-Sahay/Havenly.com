import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const TypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  const typeWatch = watch("type");

  return (
    <div className="flex flex-col gap-4">
      <h3 className=" mb-3">Type</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {hotelTypes.map((type) => (
          <label
            className={`cursor-pointer rounded-full px-4 py-4 text-label border bg-white transition-all ${
              typeWatch === type ? " bg-[var(--secondary-color)] " : ""
            }`}
          >
            <input
              type="radio"
              value={type}
              {...register("type", { required: "This field is required" })}
              className="hidden"
            />

            <span>{type}</span>
          </label>
        ))}
      </div>
      {errors.type && <span className="font-error">{errors.type.message}</span>}
    </div>
  );
};

export default TypeSection;
