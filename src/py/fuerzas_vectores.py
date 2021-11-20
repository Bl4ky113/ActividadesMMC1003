# Made By Bl4ky113

import math

arr_vectors = []
num_vectors = 0

total_force = {
    "x": 0,
    "y": 0
}

while True:
    try:
        if num_vectors == 0:
            num_vectors = int(input("Ingrese el Número de Vectores a Calcular:  "))
        for i in range(num_vectors):
            x_operator = 1
            y_operator = 1

            data_vector = {
                "angle": float(input(f"Ingrese el Ángulo (deg) del Vector N°{i + 1}:  ")),
                "force": float(input(f"Ingrese la Fuerza del Vector N°{i + 1}:  ")), 
                "axis": [ 
                    bool(int(input(f"El Axis X del Vector N°{i + 1} es positivo? (Sí = 1 / No = 0):  "))),
                    bool(int(input(f"El Axis Y del Vector N°{i + 1} es positivo? (Sí = 1 / No = 0):  ")))
                ]
            }

            if data_vector["axis"][0] == False:
                x_operator = -1
            
            if data_vector["axis"][1] == False:
                y_operator = -1

            data_vector["force_on_axis"] = {
                "x": x_operator * (round(math.cos(math.radians(data_vector["angle"])), 4) * data_vector["force"]),
                "y": y_operator * (round(math.sin(math.radians(data_vector["angle"])), 4) * data_vector["force"])
            }

            total_force["x"] += data_vector["force_on_axis"]["x"]
            total_force["y"] += data_vector["force_on_axis"]["y"]

            print(f"Vector N°{i + 1}".center(20, "-"))
            print(f"Fuerza en el Eje X: {data_vector['force_on_axis']['x']}")
            print(f"Fuerza en el Eje Y: {data_vector['force_on_axis']['y']}\n")
            print(f"Fuerza Total en el Eje X: {total_force['x']}")
            print(f"Fuerza Total en el Eje Y: {total_force['y']}\n")

            arr_vectors.append(data_vector)
        break
    except:
        print("Ingrese un Número valido")

print("".center(30, "="))
print("Fuerza Total: ")
print(f"Eje X: {total_force['x']}")
print(f"Eje Y: {total_force['y']}")
print("".center(30, "="))