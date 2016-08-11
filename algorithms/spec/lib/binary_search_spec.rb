require 'spec_helper'

RSpec.describe "#binary_search" do
  let(:sorted) { 100.times.map(&:to_i).sort }
  let(:search) { sorted.binary_search(target) }

  context 'match' do
    let(:target) { sorted[0] }

    it "returns true if a matching integer is present" do
      expect(search).to eq(true)
    end
  end

  context 'miss' do
    let(:target) { -1 } # number outside default array range

    it 'returns false if a matching intger is not present' do
      expect(search).to eq(false)
    end
  end
end