# Uses python3
# TODO: Fix broken code 

def get_pisano_period(m):
    prev, curr = 0, 1
    period = False
    count = 0

    while not period:
        prev, curr = curr, prev + curr
        if (prev % m == 0 and curr % m == 1):
            count += 1
            return count
        else: 
            count+=1

def calc_fib(n):
    f0 = 0
    f1 = 1
    i = 2
    if n < 2:
        return n
    while i < n+1:
        tmp = f0
        f0 = f1
        f1 = f0 + tmp
        i+=1
    
    return f1

def fibonacci_huge(n, m):
    pisano_period = get_pisano_period(m)
    new_n = n % pisano_period
    return calc_fib(new_n) % m


if __name__ == '__main__':
    n, m = map(int, input().split())
    print(fibonacci_huge(n, m))