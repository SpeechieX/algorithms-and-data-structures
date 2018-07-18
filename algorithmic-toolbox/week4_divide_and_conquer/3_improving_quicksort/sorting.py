# Uses python3
import sys
import random

def partition(a, l, r):
    # Pivot
    x = a[l]

    # a[i] = x, q < i < l
    # less than j then you are less than x
    j = l

    for i in range(l + 1, r+1):
        if a[i] > x:
            j += 1
            a[i], a[j] = a[j], a[i]

        # elif a[i] == x:
        #     print(a[q])
        #     print(q)
        #     q += 1
        a[i], a[q] = a[q], a[i]
   

            
    # At the very end place the pivot at the end of the smallest portion
    a[l], a[j] = a[j], a[l]
    
    # print(a)
    return [j,q]

print(partition([3,4,5,3],0,3))

# def randomized_quick_sort(a, l, r):
#     if l >= r:
#         return
    
#     # Randomly select pivot 
#     k = random.randint(l, r)
#     a[l], a[k] = a[k], a[l]
#     #use partition3
#     [m1, m2] = partition(a, l, r)
    
#     randomized_quick_sort(a, l, m1 - 1)
#     randomized_quick_sort(a, m2 + 1, r)


# if __name__ == '__main__':
#     input = sys.stdin.read()
#     n, *a = list(map(int, input.split()))
#     randomized_quick_sort(a, 0, n - 1)
#     for x in a:
#         print(x, end=' ')
