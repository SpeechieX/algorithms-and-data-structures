# Uses python3
import sys

def get_optimal_value(capacity, weights, values):
    value = 0.
    inventory = []
    capacity_left = capacity

    # Construct inventory array that contains info about each item
    for idx in range(0, len(weights)):
      
        inventory.append({ 
            "weight": weights[idx],
            "value": values[idx],
            "$/kg": values[idx]/weights[idx]
        })

    # Sort items by decreasing value
    items = sorted(inventory, key=lambda k: k["$/kg"], reverse=True)
    
    # Greedily consume items
    for item in items:
        if capacity_left == 0: 
            return value

        curr_weight = item["weight"]
        curr_weight_per_dollar = item["$/kg"]
        curr_value = item["value"]

        if capacity_left >= curr_weight: 
            capacity_left -= curr_weight
            value += curr_weight * curr_weight_per_dollar
        else: 
            value += capacity_left * curr_weight_per_dollar
            return value
    
    return value

if __name__ == "__main__":
    data = list(map(int, sys.stdin.read().split()))
    n, capacity = data[0:2]
    values = data[2:(2 * n + 2):2]
    weights = data[3:(2 * n + 2):2]
    opt_value = get_optimal_value(capacity, weights, values)
    print("{:.10f}".format(opt_value))
