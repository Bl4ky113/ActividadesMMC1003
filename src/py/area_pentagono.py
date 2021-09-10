# Made By Bl4ky113

while True:
	try:
		lado_pentagono = int(input("Ingrese la medida del lado del Pentágono:  "))
		apotema_pentagono = int(input("Ingrese la medida de la Apotema del Pentágono:  "))
		if (lado_pentagono > 0 and apotema_pentagono > 0):
			break
		else:
			print("Ingresa un Valor Positivo")
	except:
		print("Ingresa un Valor Valido")

perimetro_pentagono = 5 * lado_pentagono
area_pentagono = (perimetro_pentagono * apotema_pentagono) / 2

print(f"El Área del Pentágono es: {area_pentagono}M^2")
