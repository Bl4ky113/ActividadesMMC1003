# Made By Bl4ky113

a = float(input("Ingrese la Aceleración:  "))
dia = float(input("Ingrese el día de contagios:  "))
v_inicial = float(input("Ingrese la velocidad inicial de los contagios:  "))
c_i = float(input("Ingrese los Contagios Iniciales:  "))

contagios = ((0.5 * a) * (dia ** 2)) + (v_inicial * dia) + c_i

print("Los Contagios del Día", dia, "son de:  ", contagios)
