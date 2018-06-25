# Uses python3
import sys

def binary_search(a, x):
    # TODO: FINISH IMPLEMENTATION
    # left, right = 0, len(a)
    # midpoint = len(a)//2
    # if (a[midpoint] == x): 
    #     return midpoint
    # elif (a[midpoint] > x): 
    #     return binary_search(a[midpoint+1: len], x)
    # else:
    #     return binary_search(a[0: midpoint], x) 



def linear_search(a, x):
    for i in range(len(a)):
        if a[i] == x:
            return i
    return -1

if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n = data[0]
    m = data[n + 1]
    a = data[1 : n + 1]
    for x in data[n + 2:]:
        # replace with the call to binary_search when implemented
        print(linear_search(a, x), end = ' ')
