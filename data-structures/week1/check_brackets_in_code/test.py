from os import listdir
from os.path import isfile, join

# Provide relative path below
mypath = "./tests"

onlyfiles = sorted([f for f in listdir(mypath) if isfile(join(mypath, f))])

for i in range(0, len(onlyfiles) - 1, 2): 
    input_file = open("./tests/" + onlyfiles[i], "r")
    output_file = open("./tests/" + onlyfiles[i+1], "r")



