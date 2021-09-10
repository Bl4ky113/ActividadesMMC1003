# Made By Bl4ky113

NUM_NOTAS = 3
PERC_NOTAS = 0.45
PERC_EXAMEN = 0.25
PERC_TRABAJO = 0.30

arr_notas = []
nota_normales = 0
nota_examen = 0
nota_trabajo_final = 0

while True:
	try:
		if len(arr_notas) == NUM_NOTAS:
			nota_examen = int(input("Ingrese la nota de su examen:  "))
			nota_trabajo_final = int(input("Ingrese la nota de su trabajo final:  "))
			break

		input_nota = int(input("Ingrese sus nota:  "))
		arr_notas.append(input_nota)
	except:
		print("Ingrese una nota valida")


for nota in arr_notas:
	nota_normales += nota

nota_normales /= NUM_NOTAS
nota_final = (nota_normales * PERC_NOTAS) + (nota_examen * PERC_EXAMEN) + (nota_trabajo_final * PERC_TRABAJO)
print(f"La Nota final es de:  {nota_final}")
