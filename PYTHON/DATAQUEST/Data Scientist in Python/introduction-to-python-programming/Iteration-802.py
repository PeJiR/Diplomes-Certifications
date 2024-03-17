## 1. Introduction ##

import csv

with open('kaggle2021-short.csv') as f:
    reader = csv.reader(f, delimiter=",")
    kaggle_data = list(reader)
    
column_names = kaggle_data[0]
survey_responses = kaggle_data[1:]

del f
del reader

print(column_names)

kaggle_data_head = kaggle_data [:5]
print(kaggle_data_head)

## 2. The Problem of Repetition ##

survey_responses[0][0] = float(survey_responses[0][0])
survey_responses[1][0] = float(survey_responses[1][0])
survey_responses[2][0] = float(survey_responses[2][0])
survey_responses[3][0] = float(survey_responses[3][0])
survey_responses[4][0] = float(survey_responses[4][0])

survey_responses = int (survey_responses [0][5])

## 3. The For Loop ##

compensation = [124267, 236889, 74321, 62593, 36288]

for salary in compensation:
    print (salary/12)

## 4. The For Loop with List of Lists ##

for index in range (5):
    survey_responses[index][5] = int(survey_responses [index][5])

## 5. Iterating Over Items ##

for row in survey_responses:
    row[5] = int(row[5])
    
print(survey_responses[:3])                      
                 

## 6. Opening a CSV File ##

from csv import reader

with open('kaggle-snippet.csv') as f:
    read_file = reader(f, delimiter=",")
    snippet = list(read_file)
    
    snippet_column_names = snippet[0]
    snippet_survey_responses = snippet[1:]
          
num_survey_responses = len(snippet_survey_responses)

## 7. Cleaning the Data ##

from csv import reader

with open('kaggle2021-short.csv') as f:
    read_file = reader(f, delimiter=",")
    kaggle_data = list(read_file)
    
    column_names = kaggle_data[0]
    survey_responses = kaggle_data[1:]
    
    experience_coding_column = []
    compensation_column = [] 
    
    for row in survey_responses:
        experience_coding_column.append(float(row[0]))
        compensation_column.append(int(row[5]))
                                        
    