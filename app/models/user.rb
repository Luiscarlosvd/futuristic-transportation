class User < ApplicationRecord
  has_many :reservations, dependant: :destroy

  validates :name, presence: true, length: { maximum: 100 }
  validates :description, presence: true, length: { maximum: 10000 }
  validates :price, presence: true
  validates :photo, presence: true
  
end
