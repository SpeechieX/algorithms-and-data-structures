# Uses python3
import sys

def optimal_weight(W, weights):

    n = len(weights)
    values = []
    for _ in range(0, n+1):
        new_row = [] 
        for _ in range(0, W+1): 
            new_row.append(0)
        values.append(new_row) 

    for i in range(1, n+1):
        for w in range(1, W+1):
            cur_weight = weights[i-1]
            val_no_i = values[i-1][w]

            if cur_weight <= w: 
                rem_item_sol = values[i-1][w-cur_weight] + cur_weight
                if rem_item_sol >= val_no_i: 
                    values[i][w] = rem_item_sol
                else: 
                    values[i][w] = val_no_i
            else: 
                values[i][w] = values[i-1][w]

    return values[n][W]

if __name__ == '__main__':
    input = sys.stdin.read()
    W, n, *w = list(map(int, input.split()))
    print(optimal_weight(W, w))
