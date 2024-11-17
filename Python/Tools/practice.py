# grades = {
#     'A': 12,
#     'B': 19,
#     'C': 30
# }

# for (k, v) in grades.items():
#     print(k, v)

# def get_days_alive(person):
#     try:
#         days = person['age'] * 365
#         print(f'{person["name"]} has been alive for {days} days')
#     except KeyError as exc:
#         print(f"Missing key: {exc}")
#     except TypeError:
#         print("Expected person to be a dict")

# LBYL Look Before You Leap
# EAFP Easy to Ask For Permission than forgiveneess
        
    
def bounded_avg(nums):
    """
    Return avg of list of nums (makes sure nums are 1-100)

    >>> bounded_avg([2,4,6])
    4.0
    
    >>> bounded_avg([10,20,30,40,50])
    30


    """

    for n in nums:
        if n < 1 or n> 100:
            raise ValueError("Outside bounds of 1-100")
        
    return sum(nums) / len(nums)

# def handle_data():
#     """Process data from database"""

#     ages = [10,40,50,99,104,2,9]

#     try:
#         avg = bounded_avg(ages)
#         print("average was", avg)

#     except ValueError as exc:
#         # exc is exception object -- you can examine it!
#         print("invalid age in list of ages")

