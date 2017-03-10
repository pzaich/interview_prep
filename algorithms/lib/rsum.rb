class Array
  def rsum(sum=0)
    sorted = self.sort

    match = nil

    for i in 0..(self.length - 2) do
      break if match

      a = sorted[i]
      first = i + 1
      last = self.length - 1

      while first < last || !match do
        b = sorted[first]
        c = sorted[last]

        puts 'while'

        if a + b + c == sum
          match = [a,b,c]
        elsif a + b + c > sum
          first -= 1
        else
          last += 1e
        end
      end
    end

    match
  end
end