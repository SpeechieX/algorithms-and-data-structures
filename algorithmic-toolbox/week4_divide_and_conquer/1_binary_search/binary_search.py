# Uses python3
import sys

def binary_search(list, left, right, target):

    midpoint = left + (right-left)//2

    if (left+1 == right and list[midpoint] != target):
        return -1

    elif (list[midpoint] == target): 
        return midpoint
    
    elif (list[midpoint] < target): 
        return binary_search(list, midpoint, right, target)
    
    else:
        return binary_search(list, left, midpoint, target) 


if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n = data[0]
    m = data[n + 1]
    a = data[1 : n + 1]

    for x in data[n + 2:]:
        print(binary_search(a, 0, n, x))
