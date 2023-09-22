class User < ApplicationRecord
  has_many :reservations, dependant: :destroy

  validates :name, presence: true, uniqueness: true, length: { maximum: 100 }

  def self.authenticate(name)
    user = find_by(name: name)
    return user if user
    nil # Return nil if no user is found
  end
end
