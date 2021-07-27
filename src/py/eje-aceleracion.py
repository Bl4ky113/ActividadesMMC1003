# Made By Bl4ky113

aceleration = float(input("Ingrese una aceleración Constante:  "))
days = int(input("Ingrese una cantidad de días:  "))

for i in range(days + 1):
  velocity = aceleration * i
  print("La Velocidad en el día ", i, " es de:  ", velocity)
