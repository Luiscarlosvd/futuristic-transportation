class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :vehicle

  validates :city, presence: true
  validates :event_date, presence: true
end
