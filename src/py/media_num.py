# Made By Bl4ky113

NUM_INPUT = 4

arr_num = []
sum_num = 0

while True:
	try:
		input_num = int(input("Ingrese un Número:  "))
		arr_num.append(input_num)

		if len(arr_num) == NUM_INPUT:
			break
	except:
		print("Ingrese un Valor valido")

for num in arr_num:
	sum_num += num

med_num = sum_num / len(arr_num)

print(f"La Media de los números es: {med_num}")
