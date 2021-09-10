# Made By Bl4ky113

while True:
	try:
		celcius = int(input("Ingresa una temperatura en Grados Celcius:  "))
		break
	except:
		print("Ingresa una temperatura valida")

farenheit = celcius * ( 9 / 5 ) + 32

print(f"La Temperatura en Grados Celcius: {celcius}°C. Es {farenheit}°F en Grados Farenheit.")

