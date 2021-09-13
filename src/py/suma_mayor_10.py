# Made By Bl4ky113

CANTIDAD_NUMEROS = 2

arr_num = []
sum_num = 0

while len(arr_num) < CANTIDAD_NUMEROS:
	while True:
		try:
			numero_input = float(input("Ingresa un número:  "))
			arr_num.append(numero_input)
			break
		except:
			print("Ingresa un Número Valido")


for num in arr_num:
	sum_num += num

if sum_num >= 10:
	print(f"La Suma es:  {sum_num}")
else:
	print("La Suma es menor a 10")
