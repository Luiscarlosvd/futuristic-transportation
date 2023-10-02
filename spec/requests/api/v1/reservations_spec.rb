require 'swagger_helper'

RSpec.describe 'Reservations API', type: :request do
  path '/api/v1/reservations?user_id={user_id}' do
    get 'Get a list of all user Reservations' do
      tags 'Reservations'
      produces 'application/json'
      parameter name: :user_id, in: :path, type: :string

      response '200', 'Reservations Found' do
        schema type: :array,
               items: {
                 type: :object,
                 properties: {
                   id: { type: :integer },
                   city: { type: :string },
                   event_date: { type: :string, format: 'date-time' },
                   user_id: { type: :integer },
                   vehicle_id: { type: :integer },
                   created_at: { type: :string },
                   updated_at: { type: :string },
                   vehicle: {
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
                     }
                   }
                 },
                 required: %w[id city event_date user_id vehicle_id]
               }
        run_test!
      end

      response '422', 'No Reservations Found' do
        run_test!
      end
    end
  end

  path '/api/v1/reservations' do
    post 'Create a Reservation' do
      tags 'Reservations'
      consumes 'application/json'
      parameter name: :reservation, in: :body, schema: {
        type: :object,
        properties: {
          city: { type: :string },
          event_date: { type: :string, format: 'date-time' },
          user_id: { type: :integer },
          vehicle_id: { type: :integer }
        },
        required: %w[city event_date user_id vehicle_id]
      }

      response '200', 'Reservation Created' do
        let(:reservation) do
          Reservation.create(
            city: 'Caracas, Venezuela',
            event_date: Time.now,
            user_id: 1,
            vehicle_id: 1
          )
        end
        run_test!
      end

      response '422', 'Invalid Request' do
        let(:reservation1) do
          Reservation.create(
            city: '',
            event_date: Time.now,
            user_id: '21',
            vehicle_id: 1
          )
        end
        run_test!
      end
    end
  end

  path '/api/v1/reservations/{id}' do
    delete 'Delete a Reservation' do
      tags 'Reservations'
      produces 'application/json'
      parameter name: :id, in: :path, type: :string

      response '200', 'Reservation deleted successfully' do
        run_test!
      end

      response '404', 'Invalid Request' do
        run_test!
      end
    end
  end
end
