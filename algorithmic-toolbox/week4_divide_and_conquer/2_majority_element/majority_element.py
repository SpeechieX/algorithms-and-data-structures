# Uses python3
import sys

def get_majority_element(a, left, right):

    if left == right:
        return -1
    if left + 1 == right:
        return a[left]
    
    # Mid-point of list 
    middle = (right-left)//2 + left
    
    return majority(a[left:middle], a[middle:right])

# Created majority utility function
def majority(arr1, arr2):
    
    maj1, maj2 = None, None
    mergedList = arr1 + arr2

    # Add any majority in half of array to maj1
    for elem1 in arr1: 
        if (arr1.count(elem1) > len(arr1)//2):
            maj1 = elem1
            break 

    for elem2 in arr2: 
        if (arr2.count(elem2) > len(arr2)//2):
            maj2 = elem2 
            break

    if ( maj1 == None and maj1 == maj2 ):
        return -1

    if (maj1 != None and mergedList.count(maj1) > len(mergedList)//2):
        return maj1
    
    if (maj2 != None and mergedList.count(maj2) > len(mergedList)//2):
        return maj2

    return -1

if __name__ == '__main__':
    input = input()
    print(input)
    n, *a = list(map(int, input.split()))
    if get_majority_element(a, 0, n) != -1:
        print(1)
    else:
        print(0)
