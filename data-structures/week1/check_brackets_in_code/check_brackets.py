# python3

import sys

class Bracket:
    def __init__(self, bracket_type, position):
        self.bracket_type = bracket_type
        self.position = position

    def Match(self, c):
        if self.bracket_type == '[' and c == ']':
            return True
        if self.bracket_type == '{' and c == '}':
            return True
        if self.bracket_type == '(' and c == ')':
            return True
        return False

class Stack: 
    def __init__(self): 
        self.stack = []
    
    def push(self, item, idx): 
        self.stack.append([item, idx])

    def pop(self):
        if len(self.stack) > 0: 
            return self.stack.pop()
        else: 
            return False
    
    def empty(self): 
        if len(self.stack) == 0: 
            return True 
        return False

def isBalanced(text): 
    stack = Stack()
    valid = True
    for i, next in enumerate(text):

        if next == '(' or next == '[' or next == '{':
            stack.push(next, i)
            pass

        if next == ')' or next == ']' or next == '}':
            # Caring top of stack and current character
            top_stack = stack.pop()
            curr_bracket = Bracket(top_stack[0], i)

            if top_stack == False: 
                return i

            if not curr_bracket.Match(next):
                return top_stack[1]
            
            pass
    
    return "Success"

#-----------Testing below

from os import listdir
from os.path import isfile, join

# Provide relative path below
mypath = "./tests"

onlyfiles = sorted([f for f in listdir(mypath) if isfile(join(mypath, f))])

for i in range(0, len(onlyfiles) - 1, 2): 
    input_file = open("./tests/" + onlyfiles[i], "r")
    output_file = open("./tests/" + onlyfiles[i+1], "r")
    print('Input: ', input_file.read())
    print(isBalanced(input_file.read()))

# if valid: 
#     print("Success")

# if __name__ == "__main__":
#     text = input()
#     stack = Stack()
#     valid = True
    
#     for i, next in enumerate(text):
        
#         if next == '(' or next == '[' or next == '{':
#             stack.push(next, i)
#             pass

#         if next == ')' or next == ']' or next == '}':
#             # Caring top of stack and current character
#             top_stack = stack.pop()
#             curr_bracket = Bracket(top_stack[0], i)
        
#             # if top_stack == False: 
#             #     print()
            
#             if not curr_bracket.Match(next):
#                 valid = False
#                 print(top_stack[1])
#                 break
#             pass

# if valid: 
#     print("Success")
