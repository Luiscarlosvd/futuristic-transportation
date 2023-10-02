require 'swagger_helper'

RSpec.describe 'Users API', type: :request do
  before(:each) do
    @user = User.create(
      name: 'Test User',
      password: '111111',
      email: 'test@example.com'
    )
  end

  path '/api/v1/users' do
    get 'Get a list of all users' do
      tags 'Users'
      produces 'application/json'

      response '200', 'Users found' do
        schema type: :array,
               items: {
                 type: :object,
                 properties: {
                   id: { type: :integer },
                   email: { type: :string },
                   name: { type: :string },
                   password_digest: { type: :string },
                   created_at: { type: :string },
                   updated_at: { type: :string }
                 },
                 required: %w[id name email password_digest]
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


      response '404', 'No Users Found' do
        run_test!
      end
    end

    post 'Creates a user' do
      tags 'Users'
      consumes 'application/json'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          user: {
            type: :object,
            properties: {
              name: { type: :string },
              password: { type: :string },
              email: { type: :string }
            },
            required: %w[name email password]
          }
        }
      }

      response '201', 'User created' do
        let(:user1) do
          User.create(
            name: 'Test User 3',
            password: '11111122333',
            email: 'test3@example.com'
          )
        end
        run_test!
      end

      response '422', 'Invalid Request' do
        let(:testUser) do
          User.create(
            name: 'Test User 3',
            password: '',
            email: 'test.com'
          )
        end
        run_test!
      end
    end
  end

  path '/api/v1/users/{id}' do
    delete 'Delete a user' do
      tags 'Users'
      produces 'application/json'
      parameter name: :id, in: :path, type: :string

      response '200', 'User deleted' do
        run_test!
      end

      response '404', 'Invalid Request' do
        run_test!
      end
    end
  end
end
