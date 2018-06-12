#include <stdio.h>
#include <assert.h>
#include <stdlib.h>
#include <errno.h>
#include <string.h>

// The "define" keyword allows you to define macros -> this allows 
// you to define constant variables that can be used throughout 
// your code 
#define MAX_DATA 512 
#define MAX_ROWS 100

struct Address {
    int id; 
    int set; 
    char name[MAX_DATA]; 
    char email[MAX_DATA];
};

struct Database {
    struct Address rows[MAX_ROWS];
};

// You can use the fopen() function to create a new file to open an existing file 
// This call will initialize an object of the type FILE, which 
// contains all the information necessary to control the stream 
struct Connection {
    FILE *file, 

}