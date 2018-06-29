# Uses python3

def gcd(a, b):
    while (b!=0):
         remainder = a%b 
         tmp = b
         b = remainder
         a = tmp 

    return a

if __name__ == '__main__':
    a, b = map(int, input().split())
    print(gcd(a, b))