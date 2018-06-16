# Uses python3

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

if __name__ == '__main__':
    n = int(input())
    print(calc_fib(n))
