require 'rails_helper'

RSpec.describe Vehicle, type: :model do
  let(:vehicle) do
    Vehicle.new(
      name: 'Super Duper Vehicle',
      description: 'An confident an futuristic version of all terrain pickup',
      price: 20_000.00,
      photo: 'https://lh3.googleusercontent.com/u/2/drive-viewer/AK7aPaBZu9r6FDBzFsC-K13-wIdpBV3ncfnI35pQJfcRzpkOO0MOq_16QER_pHSAf7RZvXnTZYJ_SnasIVS8mUjoq06_-bWpbQ=w1868-h903',
      photo_back: 'https://example.com/images/toyota_corolla_back.jpg',
      photo_left: 'https://example.com/images/toyota_corolla_left.jpg',
      photo_right: 'https://example.com/images/toyota_corolla_right.jpg'
    )
  end

  it 'is valid with valid attributes' do
    expect(vehicle).to be_valid
  end

  it 'is not valid without a description' do
    vehicle.description = nil
    expect(vehicle).not_to be_valid
  end

  it 'is not valid without a price' do
    vehicle.price = nil
    expect(vehicle).not_to be_valid
  end

  it 'is not valid without a photo' do
    vehicle.photo = nil
    expect(vehicle).not_to be_valid
  end

  it 'is not valid with a description that is too long' do
    vehicle.description = 'a' * 10_001
    expect(vehicle).not_to be_valid
  end
end
