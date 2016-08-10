class Array
  def merge_sort
    # return if array is empty or 1 element
    if self.length <= 1
      return self
    end

    center = self.length / 2

    left = self.slice(0,center).merge_sort
    right = self[center..-1].merge_sort

    result = []
    offset_left = 0
    offset_right = 0

    # merge values from left and right arrays
    # another way to do might be to pop off or "peel" back arrays left and right and check
    # for emptiness
    while offset_left < left.length && offset_right < right.length
      left_val = left[offset_left]
      right_val = right[offset_right]

      if left_val <= right_val
        result << left_val
        offset_left += 1
      else
        result << right_val
        offset_right += 1
      end
    end

    # get remaining elements that have not been appended by left or right
    remaining_els = left.slice(offset_left..-1) || right.slice(offset_right, -1)

    result.concat(remaining_els)
  end
end