# Made By Bl4ky113

paga_horas = int(input("Costo de Hora de trabajo:  "))
trabajo_horas = int(input("Horas trabajadas:  "))

paga_total = 0

for i in range(trabajo_horas):
	paga_total += paga_horas

print("Su paga total es de:  ", paga_total)
