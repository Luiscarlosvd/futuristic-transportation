class User < ApplicationRecord
  has_many :reservations, dependant: :destroy

  validates :name, presence: true, uniqueness: true, length: { maximum: 100 }
end
