# Made By Bl4ky113

from math import sqrt

a = float(input("Valor de A: "))
b = float(input("Valor de B: "))
sum_a = float(input("Incremento de A: "))
sum_b = float(input("Incremento de B: "))

num_intentos = 0
max_intentos = int(input("Num de Intentos (<100): "))

for num_intentos in range(max_intentos):
	condition = sqrt(a) - sqrt(b) < sqrt(a + b) < sqrt(a) + sqrt(b)
	if condition == True:
		print(f"Num {num_intentos + 1}: Nada Roto {condition}, a = {a}, b = {b}")

		if num_intentos > max_intentos:
			break
	else:
		print(f"Roto con: a = {a}, b = {b} en el intento {num_intentos + 1}" )
		break

	a += sum_a
	b += sum_b
