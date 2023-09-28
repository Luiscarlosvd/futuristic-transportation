class InitializeUsers < ActiveRecord::Migration[7.0]
  def up
    User.create!(name: "User1", email: "email1@m.com", password: '111111')
    User.create!(name: "User2", email: "email2@m.com", password: '111111')
    User.create!(name: "User3", email: "email3@m.com", password: '111111')
    User.create!(name: "User4", email: "email4@m.com", password: '111111')
    User.create!(name: "User5", email: "email5@m.com", password: '111111')
  end

  def down
    User.delete_all
  end
end
