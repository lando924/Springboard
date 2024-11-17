import helpers
# from helpers import get_rand_month, get_rand_year
def make_person(name, favColor):
    return {
        'name': name,
        'favColor': favColor,
        'birth_year': helpers.get_rand_year(),
        'birth_month': helpers.get_rand_month()
    }

