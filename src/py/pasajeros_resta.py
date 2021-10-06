# Made By Bl4ky113

num_pasajeros = 290

const_kid = 3
const_men = 15
const_wom = 20

count = {
	"kid": 0,
	"men": 0,
	"wom": 0
}

while num_pasajeros > 0:
	print(f"{num_pasajeros}, {count}")

	num_pasajeros -= const_kid
	count["kid"] += const_kid
	print(f"{num_pasajeros}, {count['kid']}")

	num_pasajeros -= const_men
	count["men"] += const_men
	print(f"{num_pasajeros}, {count['men']}")

	num_pasajeros -= const_wom
	count["wom"] += const_wom
	print(f"{num_pasajeros}, {count['wom']}")
