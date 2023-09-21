class Vehicle < ApplicationRecord
  has_many :reservations

  validates :city, presence: true
end
