#include <stdio.h>

/*

    Definition of greatest common divisor: For integers a and b their greatest common divisor is the largest integer, d, such that d divides both a and b.
*/

int gcd(int a, int b) {
    if (b == 0) {
        return a;
    }
    int remainder = a%b;
    gcd(b, remainder);
}

void main(int argc, char *argv[]) {
    printf("gcd(3918848, 1653264) == %d\n", gcd(3918848, 1653264));
}