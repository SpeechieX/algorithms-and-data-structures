def merge(a, b): 
    i = 0
    j = 0
    sorted = []
    inversions = a[1] + b[1]
    a = a[0]
    b = b[0]
    while (i < len(a) and j < len(b)): 
        
        if a[i] < b[j]: 
            sorted.append(a[i])
            i+=1
        elif a[i] == b[j]: 
            sorted.append(a[i])
            sorted.append(b[j])
            i += 1
            j += 1
        else:
            inversions += 1 
            sorted.append(b[j])
            j+=1            

    if i <= len(a) - 1: 
        sorted = sorted + a[i:] 
    elif j <= len(b) - 1: 
        sorted = sorted + b[j:] 

    return [sorted, inversions]

def merge_sort(arr, left, right): 
    if left == right-1: 
        return [arr[left:right], 0]
    
    midpoint = (right-left)//2 + left 

    return merge(merge_sort(arr, left, midpoint), merge_sort(arr, midpoint, right))
