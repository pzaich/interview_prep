require 'spec_helper'

RSpec.describe "#bubble_sort" do
  let(:sorted) { array.bubble_sort }

  it_behaves_like "sorts array"
end