import React from "react";
import { HotelFormData } from "./ManageHotelForm";
import { useFormContext } from "react-hook-form";
import { Button } from "../../components/ui";

const ImagesSection = () => {
  const {
    register,
    watch,
    formState: { errors },
    setValue,
  } = useFormContext<HotelFormData>();

  const existingImageUrls = watch("imageUrls");

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imageUrl: string
  ) => {
    event.preventDefault();
    setValue(
      "imageUrls",
      existingImageUrls.filter((url) => url !== imageUrl)
    );
  };

  return (
    <div>
      <h3 className="mb-3">Images</h3>
      <div className="border rounded p-4 flex flex-col gap-4">
        {existingImageUrls && (
          <div className="grid grid-cols-6 gap-6">
            {existingImageUrls.map((url) => (
              <div className="relative group">
                <img src={url} className="min-h-full object-cover" />
                <Button
                  type="secondary"
                  text="Delete"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group:hover:opacity-100 text-white"
                  onClick={(e) => handleDelete(e, url)}
                />
              </div>
            ))}
          </div>
        )}
        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full text-input text-gray-700"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              const totalLength =
                imageFiles.length + (existingImageUrls?.length || 0);

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
