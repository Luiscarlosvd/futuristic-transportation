class Vehicle < ApplicationRecord
  has_many :reservations, dependant: :destroy

  validates :description, presence: true, length: { maximum: 10000 }
  validates :price, presence: true
  validates :photo, presence: true

end
