def ma_fonction(x=2):
    return x**2


3()

8 //3

8%3

10%3
10//3

5-3-2

2 ** (2 ** 3)

2 + 3 * 4 ** 5

-8 % 3

8 % -3

# Quiz : question 1 
int(7*3/4)

# Quiz : question 2 Pour faire de la mousse pour 7 personnes, combien de grammes de chocolat vous faut-il ? On donnera la valeur tronquée à l'unité. 
int(7*100/4)

#Quiz : question 3 Pour faire de la mousse pour 7 personnes, combien de sachets de sucre vanillé vous faut-il ? On donnera la valeur tronquée à l'unité. 
int(7*1/4)

type('bonjour2.')
'hola' + '   robe'

# Quiz sur la fonction len() - question 1 
len("C'est facile de compter") 
len('123' * 20) 
len('' * 20) 

# 2.4.1. Les variables

x=3
x

y = 4*3
y

x+ y 

r =8/3
r 
type(r)
type(x)


#Question 3

a = 20
b = 5
c = a / b
type(c)

""" 
Roberto Perez
Date : mars 2024
but du programme

"""

#2.5.1. Manipuler des scripts avec PyCharm
#lecture du rayon 
rayon = float(input("Veuillez donner le rayon : "))  # lecture du rayon de mon disque
circ = 2 * 3.14  * rayon                    # calcul de la circonférence
aire = 3.14 * rayon **  2                   # calcul de l'aire
# Affichage des résultats
print("Circonférence : ", circ)
print("Aire          : ", aire)







"""Auteur: Thierry Massart
   Date : 5 décembre 2017
   But du programme : calcule les ingrédients nécessaires
   pour préparer de la mousse au chocolat pour n personnes
   Entrée: n (nombre de personnes)
   Sorties: nombre d'oeufs,
            quantité en gramme de chocolat,
            nombre de sachets de sucre vanillé
"""
n = int(input(5))     # entrée: nombre de personnes
print("nombre d'oeufs : ", int(3 * n / 4)) # calcule et affiche les résultats
print("quantité de chocolat en grammes : ", int(100 * n / 4))
print("quantité de sucre_vanillé : ", max(int(n / 4), 1))























