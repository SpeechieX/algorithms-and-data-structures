# Uses python3
import sys
import math 
INFINITY = math.inf

def get_change(m):
    denoms = [1,3,4]
    # Initialize table to all INFINITY
    table = [ INFINITY for i in range(0,m+1)]
    table[0] = 0
    
    # Table generation
    for denom in denoms:
        for idx in range(denom, len(table)):
            item = table[idx]
            if (idx >= denom):
                table[idx] = min(item, (table[idx-denom] + 1))
    
    # Return last element
    return table[m]

if __name__ == '__main__':
    m = int(input())
    print(get_change(m))