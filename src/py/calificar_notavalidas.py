# Made By Bl4ky113

notas_validas = [1, 3, 5]
mensajes_disponibles = ["Es Mala", "Puede Mejorar", "Es Excelente"]
mensaje = ""
nota = 0

while True:
	try:
		nota = int(input("Ingresa una nota: "))
		if nota in notas_validas:
			mensaje = mensajes_disponibles[notas_validas.index(nota)]
			break
		else:
			print("Ingresa una Nota Valida")
	except:
		print("Ingresa un Valor Númerico")

print(f"Tu Nota es: {nota} y {mensaje}")
