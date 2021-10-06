# Made By Bl4ky113

import sympy as sym

i = sym.Symbol("i")

z = 3 + (2 * i)
y = -2 + i
x = (3 / 2) - (2 * i)

ecuations = {
	1: z + x + y,
	2: z * y,
	3: z - x - y,
	4: x / y,
	5: x * z / y
}

for num, ecuation in ecuations.items():
	print(f"Ecuation {num}: {ecuation}")
