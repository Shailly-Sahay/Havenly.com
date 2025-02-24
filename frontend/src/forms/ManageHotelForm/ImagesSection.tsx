import React from "react";
import { HotelFormData } from "./ManageHotelForm";
import { useFormContext } from "react-hook-form";

const ImagesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h3 className="mb-3">Images</h3>
      <div className="border rounded p-4 flex flex-col gap-4">
        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full font-normal text-gray-700"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              const totalLength = imageFiles.length;

              if (totalLength === 0)
                return "At least one image should be added";
              if (totalLength > 6)
                return "Total number of images cannot be more than 6";
            },
          })}
        />
      </div>
      {errors.imageFiles?.message && (
        <span className="font-error">{errors.imageFiles.message}</span>
      )}
    </div>
  );
};

export default ImagesSection;
