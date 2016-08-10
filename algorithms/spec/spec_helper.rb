require 'bundler/setup'
require_relative '../lib/algorithms'

Bundler.setup

RSpec.configure do |config|
  # some (optional) config here
end

RSpec.shared_examples_for "sorts array" do
  let(:array) { 1_000.times.map {|i| i }.shuffle }

  it 'sorts elements from smallest to largest' do
    expect(sorted[0]).to eq(sorted.min)
    expect(sorted[-1]).to eq(sorted.max)
  end
end