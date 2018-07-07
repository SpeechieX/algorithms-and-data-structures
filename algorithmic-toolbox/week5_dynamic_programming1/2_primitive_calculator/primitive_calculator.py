# Uses python3
import sys
import math 

# Utitlity functions 

mult2 = lambda x: 2 * x
mult3 = lambda x: 3 * x
add1 = lambda x: x + 1

# =============================================

def optimal_sequence(n):
    
    ops = { 
        "add1": add1, 
        "mult3": mult3, 
        "mult2": mult2 
    }

    opsCount = [ math.inf if i != 0 else 0 for i in range(0, n) ]

    for i in range(0, len(opsCount)):

        a = opsCount[i-1] + 1
        b = i/3 if i % 3 == 0 else math.inf
        c = i/2 if i % 2 == 0 else math.inf

        if b != math.inf: 
            b = opsCount[int(b)] + 1
        
        if c != math.inf: 
            c = opsCount[int(c)] + 1
        
        opsCount[i] =  min(a, b, c)
    
    return opsCount

# if __name__ == '__main__':
#     n = int(input)
#     sequence = list(optimal_sequence(n))
#     print(len(sequence) - 1)
#     for x in sequence:
#         print(x, end=' ')

print(optimal_sequence(5))