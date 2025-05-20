# Initialize counters
length = 0
word_count = 0
vowel_count = 0

# Define vowels
vowels = "aeiouAEIOU"

print("Enter a sentence that ends with a period (.)")

# Read the sentence character by character
in_word = False

while True:
    ch = input()

    if len(ch) != 1:
        print("Please enter one character at a time.")
        continue

    length += 1

    if ch in vowels:
        vowel_count += 1

    if ch == " ":
        in_word = False
    elif ch == ".":
        if in_word:
            word_count += 1
        break
    else:
        if not in_word:
            in_word = True

# Output the results
print("Length of the sentence (characters):", length)
print("Number of words:", word_count)
print("Number of vowels:", vowel_count)
