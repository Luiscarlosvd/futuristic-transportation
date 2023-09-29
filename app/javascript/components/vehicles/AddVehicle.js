import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { newVehicle } from "../../redux/vehicleSlice";

const AddVehicle = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit} = useForm();

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <form className="" onSubmit={handleSubmit((data) => dispatch(newVehicle(data)))}>
          <h2 className="">New Vehicle</h2>
          <div className="">
            <div className="">
              <input
                required={true}
                className=""
                type="text"
                name="name"
                placeholder="Model name"
                {...register("name", { required: true })}
              />

              <textarea
                required={true}
                className="carFormArea"
                name="description"
                placeholder="Description"
                {...register("description", { required: true })}
              />

              <input
                required={true}
                className=""
                type="number"
                name="price"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </div>
          </div>
          <div className="">
            <input
              required={true}
              className=""
              type="text"
              name="photo"
              placeholder="Main photo Image URL"
              {...register("photo", { required: true })}
            />

            <input
              required={true}
              className=""
              type="text"
              name="photo_back"
              placeholder="Back side photo URL"
              {...register("photo_back", { required: true })}
            />

            <input
              required={true}
              className=""
              type="text"
              name="photo_left"
              placeholder="Left side photo URL"
              {...register("photo_left", { required: true })}
            />

            <input
              required={true}
              className=""
              type="text"
              name="photo_right"
              placeholder="Right side photo URL"
              {...register("photo_right", { required: true })}
            />
          </div>
          <div className="" />
          <button type="submit">Add Vehicle</button>
        </form>
      </div>
  </>
  );
}

export default AddVehicle;
