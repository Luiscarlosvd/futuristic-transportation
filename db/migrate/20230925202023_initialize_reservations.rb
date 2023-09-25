class InitializeReservations < ActiveRecord::Migration[7.0]
  def up
    user1 = User.find(1)
    user2 = User.find(2)
    user3 = User.find(3)
    user4 = User.find(4)
    user5 = User.find(5)

    vehicle1 = Vehicle.find(1)
    vehicle2 = Vehicle.find(2)
    vehicle3 = Vehicle.find(3)


    Reservation.create(city: "Ciudad 1", event_date: Time.now, user: user1, vehicle: vehicle1)
    Reservation.create(city: "Ciudad 2", event_date: Time.now, user: user2, vehicle: vehicle2)
    Reservation.create(city: "Ciudad 3", event_date: Time.now, user: user3, vehicle: vehicle3)
    Reservation.create(city: "Ciudad 4", event_date: Time.now, user: user4, vehicle: vehicle1)
    Reservation.create(city: "Ciudad 5", event_date: Time.now, user: user5, vehicle: vehicle3)
  end

  def down
    Reservation.delete_all
  end
end
