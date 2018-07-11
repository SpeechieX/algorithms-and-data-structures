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
        if not self.empty(): 
            return self.stack.pop()
        else: 
            return False
    
    def empty(self): 
        if len(self.stack) == 0: 
            return True 
        return False

def isBalanced(text):
    stack = Stack()
    
    for i, next in enumerate(text):

        if next == '(' or next == '[' or next == '{':
            stack.push(next, i)
            pass

        if next == ')' or next == ']' or next == '}':
            
            if stack.empty(): 
                return i + 1
            
            # Caring top of stack and current character
            top_stack = stack.pop()
            
            curr_bracket = Bracket(top_stack[0], i)

            if not curr_bracket.Match(next):
                return i + 1
            
            pass
    
    if not stack.empty():
        return stack.pop()[1] + 1

    return "Success"


if __name__ == "__main__":
    print(isBalanced(input()))
