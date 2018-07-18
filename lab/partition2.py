def partition2(a, l, r):
    x = a[l]
    j = l
    for i in range(l + 1, r + 1):
        if a[i] <= x:
            j += 1
            a[i], a[j] = a[j], a[i]
    a[l], a[j] = a[j], a[l]
    print(a)
    return j

arr = [4,5,2,3,1,1,5,2,7,8,9]

l = partition2(arr, 0, 10)

print(l)