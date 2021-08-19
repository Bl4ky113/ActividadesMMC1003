# Made By Bl4ky113

a = int(input("Ingrese la Aceleración:  "))
dia = int(input("Ingrese el día de contagios:  "))
v_inicial = int(input("Ingrese la velocidad inicial de los contagios:  "))

contagios = ((0.5 * a) * (dia ** 2)) + (v_inicial * dia)

print("Los Contagios del Día", dia, "son de:  ", contagios)
