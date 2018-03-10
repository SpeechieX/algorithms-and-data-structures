#include <stdio.h>
#include <stdlib.h>

/* 

    Node has two properties: 
        1. data 
        2. pointer to next node or NULL
*/

typedef struct Node {
	int data;
	struct Node *next;
};

int main() {

    struct Node* head = NULL;
    struct Node* second = NULL;
    struct Node* third = NULL;

    head = (struct Node*)malloc(sizeof(struct Node));
    second = (struct Node*)malloc(sizeof(struct Node));
    third = (struct Node*)malloc(sizeof(struct Node));

    head->data = 1;
    head->next = second;

    second->data = 2;
    second->next = third;

    third->data = 3;
    third->next = NULL;

    printf("The value of third is %d\n", third->data);
    return 0;
}
