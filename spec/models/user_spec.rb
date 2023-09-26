require 'rails_helper'

RSpec.describe User, type: :model do
  subject { User.create(name: 'John') }

  before { subject.save }

  context 'Validation' do
    it 'should have the name present' do
      subject.name = nil
      expect(subject).to_not be_valid
    end

    it 'should have a maximum length of 100 characters with a custom error message' do
      subject.name = 'a' * 101
      expect(subject).to_not be_valid
      expect(subject.errors[:name]).to include('100 characters is the maximum allowed')
    end
  end
end
