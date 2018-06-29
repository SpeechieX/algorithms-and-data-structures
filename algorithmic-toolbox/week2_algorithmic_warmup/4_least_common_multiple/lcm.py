# Uses python3

def gcd(a, b):
    while (b!=0):
         remainder = a%b 
         tmp = b
         b = remainder
         a = tmp 

    return a

def lcm(a, b):
    c = a * b
    return c/gcd(a,b)

if __name__ == '__main__':
    a, b = map(int, input().split())
    print(lcm(a, b))

