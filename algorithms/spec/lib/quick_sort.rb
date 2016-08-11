require 'spec_helper'

RSpec.describe "#quick_sort" do
  let(:sorted) { quick_sort(array) }

  it_behaves_like "sorts array"
end