from ast import Lambda

input = "#a sd #asd"

x = input.split()

final_list = list(filter(lambda item: item[0] == "#" and len(item) > 1 and  item[1] != "#", x))

print(final_list)
print(len(final_list))