/*Realizar el algoritmo que permita ingresar los datos de los alumnos
 de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota
*/
function mostrar()
{
	var nombre;
	var tipoCursada;
	var cantidadMaterias;
	var sexo;
	var nota;
	var edad;
	var mejorPromedio;
	var nombreMejorPromedio;
	var flag=0;
	var flagDos=0;
	var flagTres=0;
	var nombreJoven;
	var joven;
	var masMaterias;
	var edadMasMaterias;
	var nombreMasMaterias;
	var notaMasculino=0;
	var notaFemenino=0;
	var notaNobinario=0;
	var contMasculino=0;
	var contFemenino=0;
	var contNobinario=0;
	var promedioMasculino;
	var promedioFemenino;
	var promedioNobinario;

	do
	{
		nombre= prompt("Ingrese el nombre.");
		nombre= nombre.toLowerCase();
		while(!(isNaN(nombre)) || nombre =="" )
		{
			nombre= prompt("Dato incorrecto. Ingrese el nombre.");
			nombre= nombre.toLowerCase();
		}
		tipoCursada= prompt("Tipo de curasada(libre,precencial,remota).");
		tipoCursada= tipoCursada.toLowerCase();
		while(!(tipoCursada=="libre"||tipoCursada=="precencial"||tipoCursada=="remota"))
		{
			tipoCursada= prompt("Tipo de curasada(libre,precencial,remota).");
			tipoCursada= tipoCursada.toLowerCase();
		}
		cantidadMaterias= parseInt(prompt("Ingrese la cantidad de materias."));
		while(isNaN(cantidadMaterias)||cantidadMaterias<1||cantidadMaterias>7)
		{
			cantidadMaterias= parseInt(prompt("Dato incorrecto. Ingrese la cantidad de materias."));
		}
		sexo= prompt("Ingrese un sexo (femenino , masculino , nobinario).");
		sexo= sexo.toLowerCase();
		while( !(sexo == "femenino"||sexo == "masculino"||sexo=="nobinario"))
		{
			sexo= prompt("Dato incorrecto. Ingrese un sexo (femenino , masculino , nobinario).");
			sexo= sexo.toLowerCase();
		}
		nota= parseInt(prompt("Ingrese la nota."));
		while(isNaN(nota)||nota<1||nota>11)
		{
			nota= parseInt(prompt("Dato incorrecto. Ingrese la nota."));
		}
		edad= parseInt(prompt("Ingrese la edad."));
		while(isNaN(edad)||edad<18)
		{
			edad= parseInt(prompt("Dato incorrecto. Ingrese la edad."));
		}

		if(sexo!="masculino")
		{
			if(flag==0||nota>mejorPromedio)
			{
				mejorPromedio= nota;
				nombreMejorPromedio= nombre;
				flag=1;
			}
		}
		if(tipoCursada=="libre")
		{
			if(flagDos==0||edad<joven)
			{
				joven= edad;
				nombreJoven= nombre;
				flagDos=1;
			}
		}
		if(tipoCursada!="remota")
		{
			if(flagTres==0||cantidadMaterias>masMaterias)
			{
				masMaterias= cantidadMaterias;
				edadMasMaterias= edad;
				nombreMasMaterias= nombre;
				flagTres=1;
			}
		}
		switch(sexo)
		{
			case"masculino":
				notaMasculino= notaMasculino+nota;
				contMasculino++;
				break;
			case"femenino":
				notaFemenino= notaFemenino+nota;
				contFemenino++;
				break;
			case"nobinario":
				notaNobinario= notaNobinario+nota;
				contNobinario++;
				break;
		}

		seguir= prompt("¿Desea continuar?(si/no)");

	}while(seguir=="si");

	promedioMasculino= notaMasculino / contMasculino;
	promedioFemenino= notaFemenino / contFemenino;
	promedioNobinario= notaNobinario / contNobinario;

			
	document.write("El mejor promedio no masculino: "+nombreMejorPromedio+"<br>"+
					"El mas jobren de los que dan libre: "+nombreJoven+"<br>"+
					"Promedio masculino: "+promedioMasculino+"<br>"+
					"Promedio femenino: "+promedioFemenino+"<br>"+
					"Promedio nobinario: "+promedioNobinario+"<br>"+
					"Nombre del que cursa mas materias: "+nombreMasMaterias+"<br>"+
					"Edad del mismo: "+edadMasMaterias);
  
}
