import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { newVehicle } from "../../redux/vehicleSlice";

const AddVehicle = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit} = useForm();

  return (
    <>
      <div className="h-full w-full bg-new-reservation">
        <div className="bg-image-new-reservation w-full h-screen p-5 grid grid-cols-1 place-content-center">
          <section className="form-new-reservation-bg flex flex-col justify-center items-center overflow-y-scroll p-3 sm:max-w-full sm:w-full lg:px-6">
            <h2 className="font-ace text-2xl text-white text-shadow-title text-center">New Vehicle</h2>
            <div className="bg-white h-1px w-5/6 max-w-xs my-5" />
            <form className="flex flex-col gap-7 items-center mt-5 w-full lg:flex-row" onSubmit={handleSubmit((data) => dispatch(newVehicle(data)))}>
            <div className="w-11/12 flex flex-col items-center gap-8">
              <input
                className="font-roboto shadow-md border-white rounded-full bg-transparent text-white py-4 w-full placeholder-white"
                type="text"
                name="name"
                placeholder="Model name"
                {...register("name", { required: 'This field is required.' })}
              />

              <textarea
                className="font-roboto shadow-md border-white rounded-full bg-transparent text-white py-4 w-full placeholder-white"
                name="description"
                placeholder="Description"
                {...register("description", { required: 'This field is required.' })}
              />
  
              <input
                className="font-roboto shadow-md border-white rounded-full bg-transparent text-white py-4 w-full placeholder-white"
                type="number"
                name="price"
                placeholder="Price"
                {...register("price", { required: 'This field is required.' })}
              />
              </div>

              <div className="w-11/12 flex flex-col items-center gap-2">
              <input
                className="font-roboto shadow-md border-white rounded-full bg-transparent text-white py-4 w-full placeholder-white"
                type="text"
                name="photo"
                placeholder="Main photo URL"
                {...register("photo", { required: 'This field is required.' })}
              />

              <input
                className="font-roboto shadow-md border-white rounded-full bg-transparent text-white py-4 w-full placeholder-white"
                type="text"
                name="photo_back"
                placeholder="Back side URL"
                {...register("photo_back", { required: 'This field is required.' })}
              />

              <input
                className="font-roboto shadow-md border-white rounded-full bg-transparent text-white py-4 w-full placeholder-white"
                type="text"
                name="photo_left"
                placeholder="Left side URL"
                {...register("photo_left", { required: 'This field is required.' })}
              />

              <input
                className="font-roboto shadow-md border-white rounded-full bg-transparent text-white py-4 w-full placeholder-white"
                type="text"
                name="photo_right"
                placeholder="Right side URL"
                {...register("photo_right", { required: 'This field is required.' })}
              />
              </div>              
              <button type="submit" className="font-roboto font-medium w-4/5 max-w-xs transition-scale text-primaryGreen
                bg-white border-white py-4 px-8 rounded-full md:w-80">Add Vehicle</button>
            </form>
          </section>
        </div>
      </div>
  </>
  );
}

export default AddVehicle;
