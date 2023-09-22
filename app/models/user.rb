class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :reservations, dependant: :destroy

  validates :name, presence: true, uniqueness: true, length: { maximum: 100 }  
end
