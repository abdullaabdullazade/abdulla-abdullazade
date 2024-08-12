for i in range(1000, 1100):
    reversed_sum = str(i)[::-1]
    multiply = eval('*'.join(str(i)))
    print(multiply)
    if multiply == int(reversed_sum):
        print(i)
