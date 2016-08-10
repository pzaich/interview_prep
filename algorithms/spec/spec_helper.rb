require 'bundler/setup'
require_relative '../lib/algorithms'

Bundler.setup

RSpec.configure do |config|
  # some (optional) config here
end

RSpec.shared_examples_for "sorts array" do
  let(:array) { 10.times.map {|i| i }.shuffle }
  let(:bubble_sorted) { array.bubble_sort }

  it 'sorts elements from smallest to largest' do
    expect(bubble_sorted[0]).to eq(bubble_sorted.min)
    expect(bubble_sorted[-1]).to eq(bubble_sorted.max)
  end
end