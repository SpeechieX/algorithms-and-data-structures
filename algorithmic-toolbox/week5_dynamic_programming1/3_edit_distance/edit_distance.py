# Uses python3

import math

def construct_table(s, t):
    table = []
    
    for i in range(0,len(s)):
        row = [] 
        for j in range(0, len(t)):
            row.append(math.inf)
        table.append(row) 
    
    for x in range(0, len(table[0])):
        table[0][x] = x

    for k in range(0, len(table)):
        table[k][0] = k
    
    return table    

def edit_distance(s,t):
    s = " " + s
    t = " " + t
    table =  construct_table(s,t)

    for i in range(1, len(s)): 
        for j in range(1, len(t)):
            dij_1 = table[i][j-1] + 1
            di_1j = table[i-1][j] + 1
            i_1j_1 = math.inf 

            if (s[i] == t[j]): 
                i_1j_1 = table[i-1][j-1] 
            
            if (s[i] != t[j]): 
                i_1j_1 = table[i-1][j-1] + 1
           
            table[i][j] = min(dij_1, di_1j, i_1j_1)
    
    return table[-1][-1]

if __name__ == "__main__":
    print(edit_distance(input(), input()))

