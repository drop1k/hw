low = 1
high = 100
attempts = 0
secret = 73

while low <= high:
    guess = (low + high) // 2
    attempts += 1
    print("попытка", guess)
    if guess == secret:
        print("угадал за", attempts, "попыток")
        break
    elif guess < secret:
        low = guess + 1
    else:
        high = guess - 1

