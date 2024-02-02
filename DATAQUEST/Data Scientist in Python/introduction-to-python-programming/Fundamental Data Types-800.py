## 1. Introduction ##

compensation = [124267, 236889, 74321, 62593, 36288]

## 2. Creating a List ##

years_experience = [ 6.1, 1.4,2.2,2.7,1.2]

num_entries = len(years_experience)
print(num_entries)

## 3. Numerical Data ##

years_experience = [6.1, 12.3, 2.2, 2.7, 1.2]

type_years_experienceyears_experience = type(6.1)
rounded_years_experience = round(6.1)

## 4. Text Data ##

most_used_library = ["Scikit-learn","Scikit-learn", "None", "None","Scikit-learn"]

## 5. Boolean Data ##

python_user = True
salary_larger_than_75000 = False

python_user_column = ["True","True","True", "False","False"]
majority_python = True

## 6. Text to Numerical Casting ##

starting_salary = 75000
current_salary = "124627"
years_experience = "6.1"

salary_change =  int(current_salary) - starting_salary
print( salary_change)

average_annual_increase = salary_change / float(years_experience)

## 7. Numerical to Text Casting and String Concatenation ##

salary = 36288
years = 1.2
salary_message = "After " + str(years) + " years, one data professional earns $" + str(salary) +"."
print (salary_message)

## 8. Escaping Special Characters ##

# Python won't recognize what comes after 'professional'
advice = 'One data professional\'s advice is: "read Scikit-learn\'s documentation".'
print(advice)

## 9. Multi-line Strings ##

advice = '''One data professional's advice is: "always comment your code".
Another data professional's advice is: "read Scikit-learn's documentation".'''
print(advice)

## 10. Missing Data ##

salary = 75000
type_none = type(None)
print(type_none)
adding_error = salary + None