# Made By Bl4ky113

DESCUENTO = 0.2

while True:
	try:
		compra = int(input("Ingrese el valor de la Compra:  "))

		if compra > 0:
			break
		else:
			print("Si me cobra el descuento, antes yo le doy plata")
	except:
		print("Ingrese un valor Valido")

compra_final = compra - (compra * DESCUENTO)

print(f"La Compra final es de: {compra_final}")
