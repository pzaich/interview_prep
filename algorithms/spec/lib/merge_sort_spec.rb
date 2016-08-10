require 'spec_helper'

RSpec.describe "#merge_sort" do
  let(:sorted) { array.merge_sort }

  it_behaves_like "sorts array"
end