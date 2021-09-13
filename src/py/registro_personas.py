# Made By Bl4ky113

EDAD_MAYOR = 18

class Persona ():
	def __init__ (self):
		self.nombre = input("Nombre:  ")
		self.edad = int(input("Edad:  "))
		self.sexo = input("Sexo (f/m):  ")

while True:
	sujeto = Persona()

	if sujeto.edad >= 18 and sujeto.sexo == 'f':
		print("===".center(len(sujeto.nombre) + 23, "-"))
		print("\n")
		print(f"Bienvenida {sujeto.nombre}")
		print("\n")
		print("===".center(len(sujeto.nombre) + 23, "-"))

	if input("Seguir Registrando Gente?: ").lower() == "no":
		break
