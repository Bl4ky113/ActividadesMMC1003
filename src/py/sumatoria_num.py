# Made By Bl4ky113

num = 0
num_sumar = 0

while True:
	try:
		num_sumar = int(input("Ingrese un Número: ")) + 1
		break
	except:
		print("Ingrese un número valido")

for i in range(num_sumar):
	num += i

print(num)
