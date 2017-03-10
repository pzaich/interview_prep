require 'spec_helper'

RSpec.describe "#rsum" do
  let(:arr) { [0,0,3,-1,-2] }
  let(:non_zero_arr) { [0,2,3,1,3] }

  it 'returns true if a sum of 3 ints equal to zero is present' do
    expect(arr.rsum).to eq(true)
  end

  it 'returns false if a sum of 3 ints equal to zero is not present' do
    expect(non_zero_arr.rsum).to eq(false)
  end
end