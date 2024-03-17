## 1. Introduction ##

experience = [ 6.1, 12.3, 2.2, 2.7,1.2]

## 2. Changing Perspective ##

third_row =  [2.2,	True,	False, 	False,	None,	74321]
num_cols = len(third_row)

## 3. Accessing List Data ##

first_row = [6.1, True, False, True, "Scikit-learn", 124267]
ml_library = first_row [4]  
knows_sql = first_row[3]

## 4. Slicing a List ##

first_row = [6.1, True, False, True, "Scikit-learn", 124267]

filtered_first_row = first_row [4:6]

## 5. Negative Indices ##

first_row = [6.1, True, False, True, "Scikit-learn", 124267]
filtered_first_row =first_row [-2:]

## 6. Adding Data to Lists ##

first_row = [6.1, True, False, True, "Scikit-learn", 124267]

first_row.append(True) 

## 7. Updating Lists ##

fourth_row = [2.7, False, False, True, None, 62593]

fourth_row [4]= "PyTorch"
fourth_row [1:3]= [True, True]

## 8. Removing Data ##

third_row = [2.2, True, False, False, None, 74321, 74321]
del third_row[5]

## 9. A List of Lists ##

first_row = [6.1, True, False, True, "Scikit-learn", 124267]
second_row = [12.3, True, False, True, "Scikit-learn", 236889]

table = [first_row, second_row]

third_row = [2.2, True, False, False, None,74321]
table.append(third_row)
third_row_experience =table[2][0]

## 10. Working With Raw Data ##

#print(kaggle_data)

column_names = kaggle_data[0]
survey_responses = kaggle_data [1:]
total_responses = len(survey_responses)
survey_responses_head = survey_responses [:5]