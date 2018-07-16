# python3

import sys, threading
sys.setrecursionlimit(10**7) # max depth of recursion
threading.stack_size(2**27)  # new thread will get stack of such size

# Use this to construct tree
class TreeNode: 
    def __init__(self, value):
        self.value = value
        self.children = None

    def add_child(self, node):
        if self.children == None: 
            self.children = [node]
        else: 
            self.children.append(node)
    
    def get_children(self): 
        return self.children 

class TreeHeight:
    def read(self):
        self.n = int(sys.stdin.readline())
        self.parent = list(map(int, sys.stdin.readline().split()))
        self.rootNode = None
        self.nodes = [TreeNode(i) for i in range(self.n)] 
    
    def construct_tree(self): 
        for idx, value in enumerate(self.parent):
            if value == -1: 
                self.rootNode = self.nodes[idx]
            
            self.nodes[value].add_child(self.nodes[idx])

    def compute_height(self):
        nodes = [self.rootNode]    
        while nodes.children != None: 
            print()


def main():
    tree = TreeHeight()
    tree.read()
    # print(tree.compute_height())
    tree.compute_height()


threading.Thread(target=main).start()
