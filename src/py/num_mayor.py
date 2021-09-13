# Made By Bl4ky113

CANTIDAD_NUMEROS = 3

arr_num = []

while len(arr_num) < CANTIDAD_NUMEROS:
	while True:
		try:
			num_input = float(input("Ingresa un Número:  "))
			arr_num.append(num_input)
			break
		except:
			print("Ingresa un Número Valido")

num_mayor = arr_num[0]

for num in arr_num:
	if num > num_mayor:
		num_mayor = num

print(f"El Número mayor entre: {arr_num} es: {num_mayor}")
