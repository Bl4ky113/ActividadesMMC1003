# Made by Bl4ky113

notas = []
nota_input = 0
nota_promedio = 0

NUM_NOTAS = 3

for i in range(NUM_NOTAS):
	while True:
		try:
			if len(notas) == NUM_NOTAS:
				break

			nota_input = int(input("Ingrese su Nota:  "))

			if not nota_input > 50 and not nota_input < 0:
				notas.append(nota_input)
			else:
				print("Ingresa una Nota entre 50 y 0")
		except:
			print("Ingresa un Número Valido")

for nota in notas:
	nota_promedio += nota

nota_promedio /= NUM_NOTAS
print("Nota promedio es de:  ", nota_promedio)

if nota_promedio >= 0 and nota_promedio <= 34:
	print("Debes mejorar para pasar")
elif nota_promedio >= 35 and nota_promedio <= 45:
	print("Pasaste, pero deberias considerar mejorar")
elif nota_promedio >= 46 and nota_promedio <= 50:
	print("Felicidades has pasado de la mejor forma!!!")
else:
	raise ValueError("Nota Promedio fuera del rango")
