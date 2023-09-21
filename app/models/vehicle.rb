class Vehicle < ApplicationRecord
  has_many :reservations

  validates :city, presence: true
  validates :event_date, presence: true

end
