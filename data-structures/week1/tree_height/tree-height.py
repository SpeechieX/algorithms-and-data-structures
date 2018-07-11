# python3

import sys, threading
sys.setrecursionlimit(10**7) # max depth of recursion
threading.stack_size(2**27)  # new thread will get stack of such size

# Use this to construct tree
class TreeNode: 
    def __init__(self, value, parent):
        self.value = value
        self.children = []
        self.parent = parent

    def add_child(self, node): 
        self.children.append(node)
    
    def get_children(self): 
        return self.children 
    
    def get_parent(self): 
        return self.parent

class TreeHeight:
    def read(self):
        self.n = int(sys.stdin.readline())
        self.parent = list(map(int, sys.stdin.readline().split()))

    def compute_height(self):
        # Replace this code with a faster implementation
        maxHeight = 0
        for vertex in range(self.n):
            height = 0
            i = vertex
            while i != -1:
                height += 1
                print('Currently on vertex', vertex)
                print(i)
                i = self.parent[i]
            maxHeight = max(maxHeight, height)
        return maxHeight

def main():
    tree = TreeHeight()
    tree.read()
    print(tree.compute_height())


threading.Thread(target=main).start()
