# Made By Bl4ky113

valor = int(input("Ingrese el valor de su inversion:  "))
tasa = int(input("Ingrese la tasa de su inversion:  "))
num_per = int(input("Ingrese el número de periodos de su inversion:  "))

valor_extra = valor * (1 + num_per * (tasa / 100))

print("Valor final es de:  ", valor_extra)
print("Ganancia de:  ", valor_extra - valor)
