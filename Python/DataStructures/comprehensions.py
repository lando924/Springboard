nums = [1,2,3,4,5,6,7,8,9,10,11,12,13]

# evens = []
# for num in nums:
#     if num % 2 == 0:
#         evens.append(num)

# print(evens)

# evenss = [num for num in nums if num % 2 == 0]

# print(evenss)

[num * 2 for num in nums]
['HIIIII' for num in nums]

# [what_to_append for thing in list]

# [ n * n for n in [2,4,6,8]]

[char.upper() + '.' for char in 'lmfao']

[num * 2 for num in range(10,20)]


def gen_board(size, initial_val=None):
    return [[initial_val for x in range(size)] for y in range(size)]

chickens = [
    {"name": 'Henry', "sex": 'Rooster'},
    {"name": 'Lady Gray', "sex": 'Hen'},
    {"name": 'Junior', "sex": 'Rooster'},
    {"name": 'Stevie Chicks', "sex": 'Hen'},
    {"name": 'Rocket', "sex": 'Hen'},
    {"name": 'Butters', "sex": 'Rooster'},
]

hens = [bird["name"] for bird in chickens if bird["sex"] == 'Hen']

scores = [55, 89, 99, 87, 60, 70, 76, 90, 50, 92]
# grades = ['PASS' for score in scores if score >= 70]
grades = ['PASS' if score >= 70 else "FAIL" for score in scores]
# [do_this if something else do this for thing in things]

