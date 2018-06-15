#include <stdio.h>

int fibonacci(int n) {
    int f_0=0; 
    int f_1=1;

    if (n < 2) {
        return n;
    }

    for (int i=2; i<=n; i++) {
        int tmp = f_1; 
        f_1 = f_0 + f_1; 
        f_0 = tmp;
    }

    return f_1;
}

void main(int argc, char **argv) {
    printf("The 20th fibonacci number is %d\n", fibonacci(20));
}