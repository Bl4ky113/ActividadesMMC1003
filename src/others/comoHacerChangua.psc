Algoritmo ComoHacerChangua
	Escribir 'Escribe cuantas tazas de leche tienes'
	Leer tazaLeche
	Escribir 'Escrbe cuantas tazas de agua tienes'
	Leer tazaAgua
	Escribir 'Escribe cuantos huevos tienes'
	Leer huevos
	Si tazaLeche>=4 Y tazaAgua>=2 Y huevos>=4 Entonces
		Escribir 'Tienes cebolla larga? Escribe si o no'
		Leer cebollaLarga
		Escribir 'Tienes cilantro? Escribe si o no'
		Leer cilantro
		Escribir 'Tienes sal? Escribe si o no'
		Leer sal
		Escribir 'Tienes pimienta?  Escribe si o no'
		Leer pimienta
		Escribir 'Tienes pan?  Escribe si o no'
		Leer pan
		Escribir 'Tienes mantequilla?  Escribe si o no'
		Leer mantequilla
		Escribir 'Listo vamos a Cocinar !!!'
		Escribir 'Pon la Leche y el agua en una olla para cocinarlas.'
		Si cebollaLarga='si' O cilantro='si' Entonces
			Escribir 'Picamos la cebolla & el cilantro mientras tanto'
		FinSi
		Si sal='si' O pimienta='si' Entonces
			Escribir 'Agregamos la Sal y la Pimienta que queramos a nuestra Changua'
		FinSi
		Escribir 'Mientras se termina de hervir la base de la changua, le agregamos los huevos, sin romperlos'
		Escribir 'Despues de que herver la base de la changua, le retiramos las cascaras a los huevos'
		Si cebollaLarga='si' O cilantro='si' Entonces
			Escribir 'Le agregamos la cantidad deseada de Cebolla larga & cilantro'
		FinSi
		Si pan='si' Entonces
			Escribir 'Le puedes hechar diferentes tipos de pan a la changua'
			Si mantequilla='si' Entonces
				Escribir 'O le puedes hechar un poco de mantequilla, para acompañarla'
			FinSi
		FinSi
		Escribir 'Listo!!! Despues de retirarle la cascara a los huevos, tenemos lista nuestra rica changua'
	SiNo
		Escribir 'Necesitas más ingredientes para hacer este receta.'
	FinSi
FinAlgoritmo
