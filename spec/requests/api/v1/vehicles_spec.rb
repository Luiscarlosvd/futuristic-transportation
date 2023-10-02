require 'swagger_helper'

RSpec.describe 'Vehicles API', type: :request do
  path '/api/v1/vehicles' do
    get 'Get a list of all vehicles' do
      tags 'Vehicles'
      produces 'application/json'

      response '200', 'Users found' do
        schema type: :array,
               items: {
                 type: :object,
                 properties: {
                   id: { type: :integer },
                   name: { type: :string },
                   description: { type: :string },
                   price: { type: :integer },
                   photo: { type: :string },
                   photo_back: { type: :string },
                   photo_left: { type: :string },
                   photo_right: { type: :string },
                   created_at: { type: :string },
                   updated_at: { type: :string }
                 },
                 required: %w[id name description price photo photo_back photo_left photo_right]
               }
        run_test!
      end

      response '422', 'No Vehicles Found' do
        run_test!
      end
    end

    post 'Creates a vehicle' do
      tags 'Vehicles'
      consumes 'application/json'
      parameter name: :vehicle, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          description: { type: :string },
          price: { type: :integer },
          photo: { type: :string },
          photo_back: { type: :string },
          photo_left: { type: :string },
          photo_right: { type: :string }
        },
        required: %w[name description price photo photo_back photo_left photo_right]
      }

      response '201', 'Vehicle Created' do
        let(:vehicle) do
          Vehicle.create(
            name: 'Vehicle name',
            description: 'Vehicle Description',
            price: 2500.78,
            photo: 'photo.png',
            photo_back: 'photo_back.png',
            photo_left: 'photo_left.png',
            photo_right: 'photo_right.png'
          )
        end
        run_test!
      end

      response '422', 'Invalid Request' do
        let(:vehicle) do
          Vehicle.create(
            name: '',
            description: 'Vehicle Description',
            price: 'Invalid',
            photo: '',
            photo_back: 'photo_back.png',
            photo_left: 'photo_left.png',
            photo_right: 'photo_right.png'
          )
        end
        run_test!
      end
    end
  end

  path '/api/v1/vehicles/{id}' do
    delete 'Delete a Vehicle' do
      tags 'Vehicles'
      produces 'application/json'
      parameter name: :id, in: :path, type: :string

      response '200', 'Vehicle deleted successfully' do
        run_test!
      end

      response '404', 'Invalid Request' do
        run_test!
      end
    end
  end
end
