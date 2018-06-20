# Uses python3
import sys

def get_optimal_value(capacity, weights, values):
    value = 0.
    unit_values = []
    for idx in range(0, len(weights)):
      
        unit_values.append({ 
            "weight": weights[idx],
            "value": values[idx],
            "kg/$": weights[idx]/values[idx]
        })
    

    sorted(unit_values, key=lambda k: k["kg/$"], reverse=True)

    return value

print(get_optimal_value(50, [20, 50, 30], [60, 100, 120]))

# if __name__ == "__main__":
#     data = list(map(int, sys.stdin.readlines().split()))
#     n, capacity = data[0:2]
#     values = data[2:(2 * n + 2):2]
#     weights = data[3:(2 * n + 2):2]
#     opt_value = get_optimal_value(capacity, weights, values)
#     print("{:.10f}".format(opt_value))
