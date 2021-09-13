# Made By Bl4ky113

PAGO_ESTANDAR = 4500
PAGO_EXTRA = 5500
PAGO_HORAS_EXTRAS = 7000
HORAS_ESTANDAR = 40

horas_trabajadas = 0
paga = 0

while True:
	try:
		horas_trabajadas = int(input("Ingrese cuantas Horas ha Trabajado:  "))
		break
	except:
		print("Ingrese un Número Valido de Horas de Trabajo")

if horas_trabajadas <= HORAS_ESTANDAR:
	paga = horas_trabajadas * PAGO_ESTANDAR
else:
	paga = (40 * PAGO_EXTRA) + ((horas_trabajadas - HORAS_ESTANDAR) * PAGO_HORAS_EXTRAS)

print(f"Su paga va a ser de:  ${paga} COP")
