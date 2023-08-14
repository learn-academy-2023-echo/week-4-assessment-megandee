# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code: 
# input: integers
# output: a string
# process: A conditional to test, 
# 'num % 2 == 0' means number is even
# string interpolation in the implicit return, 


# def even_or_odd num 
#     if num % 2 == 0
#       "#{num} is even"
#     else 
#       "#{num} is odd" 
#     end 
# end 
# p even_or_odd(reposts1)
# # "7 is odd"
# p even_or_odd(reposts2)
# # "42 is even"
# p even_or_odd(reposts3)
# "221 is odd"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# Pseudo code:
# input: a string
# output: string minus the vowels
# process: .delete will return the string with characters in the intersection deleted
# CRUD and hashes comes to mind
# 

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'


# # def remove_vowels str
# #     if str == str.delete("aeiou")
# #         'str'
# #     else
# #         'str'
# #     end
# # end
# p beatles_album1(remove_vowels)
# undefined local variable or method `remove_vowels' for main:Object (NameError)
# p beatles_album1(remove_vowels)
#                  ^^^^^^^^^^^^^
# perhaps I overthought this one.


# p beatles_album1.delete("aieou")
# "Rbbr Sl"
# p beatles_album2.delete("aeiou")
# "Sgt Pppr"
# p beatles_album3.delete("aeiou")
# "Abby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.
# Pseudo code:
# input: a string
# output: the same string but backwards and a boolean value
# process: will need to uppercase all letters with .upcase, 
    ## i cannot seem to figure out the appropriate placement for .upcase to work as designed. Tried after .reverse on line 92 first, then after is_palin on line 91.
# then .reverse() to test, 
#a conditional to perform the test

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
palindrome_test_case4 = 'racecar' #added to test if method would work with already lowercased letters, it did.

# def is_palin str
#     if str == str.reverse 
#         "#{str} is a palindrome"
#     else
#         "#{str} is not a palindrome"
#     end
# end


# p is_palin(palindrome_test_case2)
# palindrome_test_case2 = 'LEARN'
# p is_palin(palindrome_test_case4)
# "racecar is a palindrome"