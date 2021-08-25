# Made By Bl4ky113

NUM_LADOS_CUBO = 6

while True:
	try:
		lados = int(input("Ingrese la medida de los Lados del Cubo:  "))
		if lados < 0:
			print("Ingrese una medida mayor a 0")
		else:
			break
	except:
		print("Ingrese un valor númerico por favor")

volumen = lados ** 3
area = NUM_LADOS_CUBO * lados**2
diagonal_espacio = lados ** (1 / 3)
diagonal_sencilla = lados ** (1 / 2)

printArr = [
	f"El Volumen del Cubo es:  {volumen} \n",
	f"El Area del Cubo es: {area} \n",
	f"El Diagonal de Espacio es: {diagonal_espacio} \n",
	f"El Diagonal Sencilla es: {diagonal_sencilla} \n"
]

print("".join(printArr))
