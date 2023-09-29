class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true, uniqueness: true,
                    format: {
                      with: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i,
                      message: :invalid
                    }
  validates :name, presence: true, uniqueness: true,
                   length: { maximum: 100, message: '%<count>s characters is the maximum allowed' },
                   format: {
                     with: /\A[a-z0-9A-Z]+\z/,
                     message: :invalid
                   }
  validates :password, length: { minimum: 6 }, if: :password_digest_changed?

  has_many :reservations, dependent: :destroy

  before_save :downcase_attributes

  private

  def downcase_attributes
    self.name = name.downcase
    self.email = email.downcase
  end
end
