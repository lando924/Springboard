# person = {'first':'henry'}

# chicken = {'name':'butters', 'age': '6 months', 'breed':'Silkie'}
# #{'name': 'butters', 'age': '6 months', 'breed': 'Silkie'}

# stuff = {True: 34, 100:'AWESOME'}
# #{True: 34, 100: 'AWESOME'}


chicken = {
    'name': 'Lady Gray',
    'breed': 'Silkie',
    'total_egg_count': 12,
    'egg_chart': {
        'M': True,
        'T': True,
        'W': True,
        'H': False,
        'F': True,
    },
    'coop_mates': ['Butters', 'Stevie', 'Henry']
}

# for key in chicken.keys():
#     print(key)

# for value in chicken.values():
#     print(value)

# for pair in chicken.items():
#     print(pair)

for (k, v) in chicken.items():
    print(k, '---->', v)

# Set Operations

lemon = {'sour', 'yellow', 'fruit', 'rough'}

banana = {'fruit', 'sweet', 'smooth', 'yellow'}

orange = ['fruit', 'bumpy', 'orange', 'sweet']


# for adj in banana | lemon | set(orange):
#     print(adj)


