#include <stdio.h>
/*

	Take from here: http://www.zentut.com/c-tutorial/c-linked-list

*/
// data stores the information 
// next pointer holds the address of the next node 

typedef struct node {
	int data;
	struct node* next;
}

node* create(int data, node* next) 
{
	node* new_node = (node*)malloc(sizeof(node));

	if (new_node == NULL) 
	{
		printf("Error creating a new node.\n");
		exit(0);
	}
	
	new_node->data = data;
	new_node
	
}

int main() 
{
}
