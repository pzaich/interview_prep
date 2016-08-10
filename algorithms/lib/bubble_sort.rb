class Array
  def bubble_sort
    loop do
      swapped = false

      self.each.with_index do |num, index|
        next_num = self[index+1]

        next if next_num.nil?

        if (num > next_num)
          self[index+1] = num
          self[index] = next_num
          swapped = true
        end
      end

      break if !swapped
    end

    self
  end
end