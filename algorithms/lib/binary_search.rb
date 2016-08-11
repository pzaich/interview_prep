class Array
  def binary_search(target)
    return false if self.length < 1
    center = self.length / 2

    if self[center] == target
      return true
    elsif self[center] < target
      left = center + 1
      right_nums = self[left..-1]

      return right_nums.binary_search(target)
    elsif self[center] > target
      left_nums = self[0...center]

      return left_nums.binary_search(target)
    end
  end
end