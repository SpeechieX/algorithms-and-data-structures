# Uses python3
import sys
import math 

def optimal_sequence(n):
    
    # [value, min number of ops, prev index to get here]
    ops_count = [ [i+1,math.inf, 1] if i != 0 else [1,0, 0] for i in range(0, n) ]

    for i in range(1, len(ops_count)):
        cur_val = ops_count[i][0]
        cur_min = ops_count[i][1]
        a,b,c = math.inf, math.inf, math.inf

        prev_val1 = ops_count[i-1][1]
        a = min( prev_val1 + 1, cur_min )

        if (cur_val % 2 == 0): 
            prev_val2 = ops_count[(int(cur_val/2) - 1)][1]
            b = min( prev_val2 + 1, cur_min )
        
        if (cur_val % 3 == 0):
            prev_val3 = ops_count[(int(cur_val/3) - 1)][1]
            c = min( prev_val3 + 1, cur_min )

        ops_count[i][1] = min(cur_val, a, b, c)

        # Need to dynamically generate path 
        if (a == min(cur_val, a, b, c)):
            ops_count[i][2] = i-1
        elif (b == min(cur_val, a, b, c)):
            ops_count[i][2] = (int(cur_val/2) - 1)
        elif (c == min(cur_val, a, b, c)):
            ops_count[i][2] = (int(cur_val/3) - 1)

    cur_idx = len(ops_count) - 1
    path = []

    while cur_idx != 0: 
        path.append(ops_count[cur_idx][0])
        cur_idx = ops_count[cur_idx][2]

    path.append(1)
    path.reverse()
    return path

if __name__ == '__main__':
    n = int(input())
    sequence = list(optimal_sequence(n))
    print(len(sequence) - 1)
    for x in sequence:
        print(x, end=' ')