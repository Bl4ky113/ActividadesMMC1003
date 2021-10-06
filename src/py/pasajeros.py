# Made By Bl4ky113

num_pasajeros = 290

const_kid = 3
const_men = 15
const_wom = 20

count = {
	'kid': 0,
	'men': 0,
	'wom': 0,
	'total': 0
}
while count["total"] < 290:
	if count["total"] > 290:
		break

	count["kid"] += const_kid
	count["men"] += const_men
	count["wom"] += const_wom
	count["total"] = count["kid"] + count["men"] + count["wom"]
	print(count)
