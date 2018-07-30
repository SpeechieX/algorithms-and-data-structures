# Uses python3
import sys

def merge(arr, left, midpoint, right):
    inversions = 0 
    i, j = left, midpoint
    sorted = []
    
    while i < midpoint and j < right: 
        
        if arr[i] <= arr[j]: 
            sorted.append(arr[i])
            i+=1
        else:
            sorted.append(arr[j])
            inversions += (midpoint - i)
            j+=1            

    if j == right: 
        sorted.extend(arr[i:midpoint])

    arr[left:left+len(sorted)] = sorted

    return inversions


def get_number_of_inversions(arr, left, right):

    if right < left + 2:
        return 0
   
    midpoint = (right-left)//2 + left
    
    inversion_count = get_number_of_inversions(arr, left, midpoint)
    inversion_count += get_number_of_inversions(arr, midpoint, right)
    inversion_count += merge(arr, left, midpoint, right)
    
    return inversion_count

if __name__ == '__main__':
    input = sys.stdin.read()
    n, *a = list(map(int, input.split()))
    print(get_number_of_inversions(a, 0, len(a)))
