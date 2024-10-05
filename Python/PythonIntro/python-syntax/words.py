def print_upper_words(words, must_start_with):
    """
    Print each word on a seperate line. if it meets the condition of
    must_start_with. 
    """

    for word in words:
    # Check if the first letter of the word (lowercase is in must_start_with)
        if word[0].lower() in must_start_with:
            print(word.upper())
        

# this should print "HELLO", "HEY", "YO", and "YES"

print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                   must_start_with={"h", "y"})


