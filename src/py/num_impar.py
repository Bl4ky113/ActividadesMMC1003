# Made By Bl4ky113

while True:
	try:
		num = float(input("Ingrese un Número:  "))
		break
	except:
		print("El Número Ingresado no es Valido")

if (num % 2) == 0:
	print(f"El Número {num} es Par")
elif num == 0:
	print(f"El Número {num} es 0")
else:
	print(f"El Número {num} es Impar")
