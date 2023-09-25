class InitializeUsers < ActiveRecord::Migration[7.0]
  def up
    5.times do |i|
      User.create(name: "User #{i + 1}", email: "email#{i + 1}@m.com")
    end
  end

  def down
    User.delete_all
  end
end
