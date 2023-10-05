import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { newVehicle } from '../../redux/vehicleSlice';

const AddVehicle = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <>
      <div className="h-full w-full bg-new-reservation">
        <div className="bg-image-new-reservation w-full h-screen p-5 grid grid-cols-1 place-content-center">
          <section className="form-new-reservation-bg flex flex-col items-center overflow-y-scroll p-3 sm:max-w-full sm:w-full lg:px-6">
            <h2 className="font-ace text-2xl text-white text-shadow-title text-center">New Vehicle</h2>
            <div className="bg-white h-1px w-5/6 max-w-xs my-5" />
            <form className="flex flex-col gap-7 items-center mt-5 w-full lg:flex-row" onSubmit={handleSubmit((data) => dispatch(newVehicle(data)))}>
              <div className="w-11/12 flex flex-col items-center gap-8 text-center">
                <div className="w-full">
                  <span className="font-bold text-red-600 mb-3">{errors.name?.message}</span>
                  <input
                    className="font-roboto shadow-md border-white rounded-full bg-transparent text-white py-4 w-full placeholder-white"
                    type="text"
                    name="name"
                    placeholder="Model name"
                    {...register('name', { required: 'This field is required.' })}
                  />
                </div>

                <div className="w-full">
                  <span className="font-bold text-red-600 mb-3">{errors.description?.message}</span>
                  <textarea
                    className="font-roboto resize-none shadow-md border-white rounded-full bg-transparent text-white py-4 w-full placeholder-white"
                    name="description"
                    placeholder="Description"
                    {...register('description', { required: 'This field is required.' })}
                  />
                </div>

                <div className="w-full">
                  <span className="font-bold text-red-600 mb-3">{errors.price?.message}</span>
                  <input
                    className="font-roboto shadow-md border-white rounded-full bg-transparent text-white py-4 w-full placeholder-white"
                    type="number"
                    name="price"
                    placeholder="Price"
                    {...register('price', { required: 'This field is required.' })}
                  />
                </div>
              </div>

              <div className="w-11/12 flex flex-col items-center gap-2 text-center">
                <div className="w-full">
                  <span className="font-bold text-red-600 mb-3">{errors.photo?.message}</span>
                  <input
                    className="font-roboto shadow-md border-white rounded-full bg-transparent text-white py-4 w-full placeholder-white"
                    type="text"
                    name="photo"
                    placeholder="Main photo URL"
                    {...register('photo', { required: 'This field is required.' })}
                  />
                </div>

                <div className="w-full">
                  <span className="font-bold text-red-600 mb-3">{errors.photo_back?.message}</span>
                  <input
                    className="font-roboto shadow-md border-white rounded-full bg-transparent text-white py-4 w-full placeholder-white"
                    type="text"
                    name="photo_back"
                    placeholder="Back side URL"
                    {...register('photo_back', { required: 'This field is required.' })}
                  />
                </div>

                <div className="w-full">
                  <span className="font-bold text-red-600 mb-3">{errors.photo_left?.message}</span>
                  <input
                    className="font-roboto shadow-md border-white rounded-full bg-transparent text-white py-4 w-full placeholder-white"
                    type="text"
                    name="photo_left"
                    placeholder="Left side URL"
                    {...register('photo_left', { required: 'This field is required.' })}
                  />
                </div>

                <div className="w-full">
                  <span className="font-bold text-red-600 mb-3">{errors.photo_right?.message}</span>
                  <input
                    className="font-roboto shadow-md border-white rounded-full bg-transparent text-white py-4 w-full placeholder-white"
                    type="text"
                    name="photo_right"
                    placeholder="Right side URL"
                    {...register('photo_right', { required: 'This field is required.' })}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="font-roboto font-medium w-4/5 max-w-xs transition-scale text-primaryGreen
                bg-white border-white py-4 px-8 rounded-full md:w-80"
              >
                Add Vehicle
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddVehicle;
