class Array
  # following Hoare's quick sort algorithm
  def quick_sort(lo = 0,hi=nil)
    hi = self.length - 1

    pivot = self[lo]

    min = lo
    max = hi

    free = min

    while min < max
      if free == min

      elsif free == max

      else
        raise
      end
    end
  end
end