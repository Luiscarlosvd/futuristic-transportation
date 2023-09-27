import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newVehicle } from "../../redux/vehicleSlice";
import { toast } from "react-hot-toast";

const AddVehicle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    dispatch(newVehicle(data)).then(() => {
      // When vehicle added successfully, reset form fields
      reset();
      // Show toast message
      toast.success("Vehicle added successfully!");
      toast.error("Incorrect field added")
      // Redirect to "/vehicles"
      navigate("/vehicles");
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
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
          <div className="inputCont inputCont2">
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
