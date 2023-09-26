require 'rails_helper'

RSpec.describe Reservation, type: :model do
  let(:user) { User.create(name: 'John') }

  let(:vehicle) { Vehicle.new(
    name: 'Super Duper Vehicle',
    description: 'An confident an futuristic version of all terrain pickup',
    price: 20_000.00,
    photo: 'https://lh3.googleusercontent.com/u/2/drive-viewer/AK7aPaBZu9r6FDBzFsC-K13-wIdpBV3ncfnI35pQJfcRzpkOO0MOq_16QER_pHSAf7RZvXnTZYJ_SnasIVS8mUjoq06_-bWpbQ=w1868-h903',
    photo_back: 'https://example.com/images/toyota_corolla_back.jpg',
    photo_left: 'https://example.com/images/toyota_corolla_left.jpg',
    photo_right: 'https://example.com/images/toyota_corolla_right.jpg'
  ) }

  # subject { Reservation.new(city: 'Apple', event_date: '10/10/2023', :user, :vehicle) }

  context 'Validation' do
    it 'is valid with valid attributes' do
      reservation = Reservation.new(city: 'Apple', event_date: '10/10/2023', user: user, vehicle: vehicle)
      expect(reservation).to be_valid
    end

    it 'is not valid without a city' do
      reservation = Reservation.new(event_date: '10/10/2023', user: user, vehicle: vehicle)
      expect(reservation).to_not be_valid
    end

    it 'is not valid without an event_date' do
      reservation = Reservation.new(city: 'Apple', user: user, vehicle: vehicle)
      expect(reservation).to_not be_valid
    end

    it 'is not valid without a user' do
      reservation = Reservation.new(city: 'Apple', event_date: '10/10/2023', vehicle: vehicle)
      expect(reservation).to_not be_valid
    end

    it 'is not valid without a vehicle' do
      reservation = Reservation.new(city: 'Apple', event_date: '10/10/2023', user: user)
      expect(reservation).to_not be_valid
    end
  end
end
