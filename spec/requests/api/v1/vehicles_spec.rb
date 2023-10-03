require 'swagger_helper'

describe 'Vehicles API' do
  path '/api/v1/vehicles' do
    get 'Get a list of all vehicles' do
      tags 'Vehicles'
      produces 'application/json'

      response '200', 'Users found' do
        schema type: :object,
               properties: {
                 success: { type: :boolean },
                 vehicles: {
                   type: :array,
                   items: {
                     type: :object,
                     properties: {
                       id: { type: :integer },
                       name: { type: :string },
                       description: { type: :string },
                       price: { type: :string },
                       photo: { type: :string },
                       photo_back: { type: :string },
                       photo_left: { type: :string },
                       photo_right: { type: :string },
                       created_at: { type: :string },
                       updated_at: { type: :string }
                     },
                     required: %w[id name description price photo photo_back photo_left photo_right]
                   }
                 },
                 message: { type: :string }
               }
        run_test!
      end

      response '200', 'No Vehicles Found' do
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
        let(:id) { 2 }
        run_test!
      end

      response '200', 'Invalid Request' do
        let(:id) { 4000 }
        run_test!

        it 'returns the correct error message' do
          expected_response = {
            success: false,
            notice: "Couldn't find Vehicle with 'id'=4000"
          }.to_json
      
          expect(response.body).to eq(expected_response)
        end
      end
    end
  end
end
