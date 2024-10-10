vegan_no_nos = ['eggs', 'meat', 'milk', 'fish', 'figs']

pie_ingredients = ['flour', 'apple', 'sugar', 'eggs', 'salt']

for food in pie_ingredients:
    if food in vegan_no_nos:
        print(f"OH NO, CANNOT EAT {food}! IT'S NOT VEGAN!")
    else:
        print(f"YUM, I LOVE {food}!")

alpha = ['a', 'b', 'c', 'd', 'e']

def any7(nums):
    """Are any of these numbers 7"""
    for num in nums:
        if num == 7:
            return True
    return False

def print_upper_words(words, must_start_with):
    """Print each word on seperate line, uppercased"""

    for word in words:
        for letter in must_start_with:
            if word.startswith(letter):
                print(word.upper())

def sum_nums(nums):
    """Given list of numbers, return sum of those numbers"""
    total = 0

    for num in nums:
        total = total + num
    return total

def count_up(start, stop):
    """Print all numbers from start up to and including stop."""

    while start <= stop:
        print(start)
        start = start + 1

count_up(2, 10)

def in_range(nums, lowest, highest):
    """Print numbers inside range
    -numbs: list of numbers
    -lowest: lowest number to print
    -highest:  highest number to print
    """
    for num in nums:
        if num >= lowest and num <= highest:
            print(f"{num} fits")


in_range([10, 20, 30, 40, 50], 15, 30)            


# string methods
# count() method
msg = 'hcehlilcok!e!n'

msg.count('h')
#output: 2

msg.count('H')
#output 0, case sensitive 


# startswith and ends with method
msg.endswith('!n')
# True

person = "Mr.Jones"

person.startswith('Mr.')
#True

msg.find('!')
#10

msg.find('!e!')
#10

person.find('Mr.')
#0

person.find('?')
#-1 not found

#join method
".".join('LOL')
#return  L.O.L

#lower method

chickens.lower()

#replace
things = 'apples-tomatoes-pickles'

things.replace('-', '=')
#output 'apples=tomatoes=pickles'

