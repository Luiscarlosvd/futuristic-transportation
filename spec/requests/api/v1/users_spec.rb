require 'swagger_helper'

describe 'Users API' do
  path '/api/v1/users' do
    get 'Get a list of all users' do
      tags 'Users'
      produces 'application/json'

      response '200', 'Users found' do
        schema type: :object, properties: {
          success: { type: :boolean },
          users: {
            type: :array,
            items: {
              type: :object,
              properties: {
                id: { type: :integer },
                email: { type: :string },
                name: { type: :string },
                password_digest: { type: :string },
                created_at: { type: :string },
                updated_at: { type: :string },
                isAdmin: { type: :boolean }
              },
              required: %w[id name email password_digest]
            }
          }
        }
        let!(:user) do
          User.create(
            name: 'Test User 2',
            password: '11111122',
            email: 'test2@example.com'
          )
        end
        run_test!
      end  
    end
  end
end
