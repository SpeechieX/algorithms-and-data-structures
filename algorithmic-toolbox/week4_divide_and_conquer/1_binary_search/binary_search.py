# Uses python3
import sys

def binary_search(list, target):

    midpoint = len(list)//2

    if (list[midpoint] == target): 
        return True
    elif (list[midpoint] < target): 
        return binary_search(list[midpoint+1: len(list)], target)
    else:
        return binary_search(list[0: midpoint], target) 

print(binary_search([2,5,7,8,9,12,15,20], 2))
print(binary_search([2,5,7,8,9,12,15,20], 5))
print(binary_search([2,5,7,8,9,12,15,20], 7))
print(binary_search([2,5,7,8,9,12,15,20], 8))
print(binary_search([2,5,7,8,9,12,15,20], 9))
print(binary_search([2,5,7,8,9,12,15,20], 12))
print(binary_search([2,5,7,8,9,12,15,20], 15))
print(binary_search([2,5,7,8,9,12,15,20], 20))


# if __name__ == '__main__':
#     input = sys.stdin.read()
#     data = list(map(int, input.split()))
#     n = data[0]
#     m = data[n + 1]
#     a = data[1 : n + 1]
#     for x in data[n + 2:]:
#         # replace with the call to binary_search when implemented
#         print(linear_search(a, x), end = ' ')
