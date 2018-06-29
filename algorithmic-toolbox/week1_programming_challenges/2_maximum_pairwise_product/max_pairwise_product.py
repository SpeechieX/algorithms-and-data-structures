#python3

def max_pairwise_product(numbers):
    largest_idx = 0 if numbers[0] == max(numbers[0], numbers[1]) else 1
    sec_largest_idx = 1 if numbers[1] == min(numbers[0], numbers[1]) else 0   
    n = len(numbers)

    if (n > 2):
        for idx in range(2,n):
            
            num = numbers[idx]
            
            if (num > numbers[largest_idx]):
                # If num is larger than previous max reset largest and second_largest
                tmp = largest_idx
                largest_idx = idx
                sec_largest_idx = tmp

            elif (num > numbers[sec_largest_idx] and num <= numbers[largest_idx]): 
                sec_largest_idx = idx

    return numbers[largest_idx] * numbers[sec_largest_idx]


if __name__ == '__main__':
    input_n = int(input())
    input_numbers = [int(x) for x in input().split()]
    print(max_pairwise_product(input_numbers))
