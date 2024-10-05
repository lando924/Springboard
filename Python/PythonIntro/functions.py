def greet(person):
    print(f"Hello there, {person}")

def divide(a,b):
    if type(a) is int and type(b) is int:
        return a/b
    return 'a and b must be integers!'

def three_things(a,b,c):
    return 'Hi'

def send_email(to_email, from_email, subject, body):
    email = f"""
        to: {to_email}
        from: {from_email}
        subject: {subject}
        ----------------------
        body: {body}
    """
    print(email)



send_email(subject = "DOGGOS", to_email="blue@gmail.com", from_email="katy@golden.com", body="Golden Doodles are so much better than Chihuahuas.")

def power(x, y=2):
    return x ** y

