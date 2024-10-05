age = 19
isBirthday = True

if age >= 21:
    print("YOU CAN DRINK!")
    if isBirthday:
        print("HAPPY BIRTHDAY, HERE IS A FREE COSMO!")
elif age >= 18:
    print("YOU CAN COME IN BUT NO DRINKING!")
    if isBirthday:
        print("HAPPY BIRTHDAY, HERE IS A FREE CHOCOLATE MILK!")
else:
    print("SORRY GO HOME LOSER KID!")


