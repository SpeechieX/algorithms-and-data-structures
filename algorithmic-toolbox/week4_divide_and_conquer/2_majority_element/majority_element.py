# Uses python3
import sys

def get_majority_element(a, left, right):

    if left == right:
        return -1
    if left + 1 == right:
        return a[left]
    
    # Mid-point of list 
    middle = (right-left)//2 + left
    
    left_maj = majority(get_majority_element(a, left, middle), a, left, middle) 
    right_maj = majority(get_majority_element(a, middle, right), a, middle, right)
    
    if (left_maj == -1 and left_maj == right_maj):
        return -1
    
    if (left_maj == right_maj): 
        return left_maj 

    if (left_maj != right_maj): 
        return max( majority(left_maj, a, left, right), majority(right_maj, a, left, right))

# Created majority utility function
def majority(elem, a, left, right):

    if (a[left:right].count(elem) > (right-left)//2): 
        return elem

    return -1

if __name__ == '__main__':
    input = sys.stdin.read()
    n, *a = list(map(int, input.split()))
    if get_majority_element(a, 0, n) != -1:
        print(1)
    else:
        print(0)
