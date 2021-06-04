
A=[1,2,2]
B=[2,2,2]

C=[(A[i],B[i]) for (i) in range(len(A)) ]
count=0;
for i in range(len(C)-1):
    if C[i]!=C[i+1]:
        count =count+1;
    else:
        count = count;
print(count)
