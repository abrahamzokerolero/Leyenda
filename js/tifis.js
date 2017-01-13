var tablero , direccion;

var fondo = {
	imagenURL: "images/fondo.png",
	imagenOK: false
};

var tifis = {
	x: 0,
	y: 0,

	frenteURL: "images/diana-frente.png",
	frenteOK: false,

	atrasURL: "images/diana-atras.png",
	atrasOK: false,

	derURL: "images/diana-der.png",
	derOK: false,

	izqURL: "images/diana-izq.png",
	izqOK: false,

	velocidad: 50

};

var liz = {
	x: 400,
	y: 200,
	lizURL: "images/liz.png",
	lizOK: false
};

var teclas={
	UP:38,
	DOWN:40,
	LEFT:37,
	RIGHT:39
};

function inicio()
{
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;

	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;

	tifis.atras = new Image();
	tifis.atras.src = tifis.atrasURL;
	tifis.atras.onload = confirmarAtras;

	tifis.der = new Image();
	tifis.der.src = tifis.derURL;
	tifis.der.onload = confirmarDer;

	tifis.izq = new Image();
	tifis.izq.src = tifis.izqURL;
	tifis.izq.onload = confirmarIzq;

	liz.imagen = new Image();
	liz.imagen.src = liz.lizURL;
	liz.imagen.onload = confirmarLiz;

	document.addEventListener("keydown", teclado);
		
}

function teclado(datos)
{
	var codigo = datos.keyCode;
	if(codigo == teclas.UP)
	{	
		if(tifis.y<=0){}
		else
		{	
			if(tifis.y==250 && tifis.x<=100){}
			else
			{
				if(tifis.y==400 && tifis.x>=150){}
				else
				{	
					if(tifis.y==250 && tifis.x==200){}
					else
					{
						tifis.y -= tifis.velocidad;
					}
				}
			}
		}		
	}
	if(codigo == teclas.DOWN)
	{
		if(tifis.y>=450){}
		else
		{	
			if(tifis.y==150 && tifis.x<=100){}
			else
			{	
				if(tifis.y==300 && tifis.x>=150){}
				else
				{	
					tifis.y += tifis.velocidad;
				}
			}
		}
	}
	if(codigo == teclas.LEFT)
	{
		if(tifis.x<=0){}
		else
		{	
			if(tifis.y==200 && tifis.x<=150){}
			else
			{	
				if(tifis.y<=200 && tifis.x==250){}
				else
				{	
					tifis.x -= tifis.velocidad;
				}
			}	
		}
	}
	if(codigo == teclas.RIGHT)
	{
		if(tifis.x>=450){}
		else
		{	
			if(tifis.y<=200 && tifis.x==150){}
			else
			{	
				if(tifis.y==350 && tifis.x>=100){}
				else
				{	
					tifis.x += tifis.velocidad;
				}
			}	
		}
	}

	direccion = codigo;

	dibujar();
}

function confirmarFondo()
{
	fondo.imagenOK = true;
	dibujar();
}

function confirmarFrente()
{
	tifis.frenteOK = true;
	dibujar();
}
function confirmarAtras()
{
	tifis.atrasOK = true;
	dibujar();
}
function confirmarDer()
{
	tifis.derOK = true;
	dibujar();
}
function confirmarIzq()
{
	tifis.izqOK = true;
	dibujar();
}

function confirmarLiz()
{
	liz.lizOK = true;
	dibujar();
}

function dibujar()
{

	// Capa: 1

	if(fondo.imagenOK == true)
	{
		tablero.drawImage(fondo.imagen, 0, 0);
	}

	var tifiDibujo = tifis.frente;

	// Capa: 2

	if (tifis.frenteOK  && tifis.atrasOK && tifis.derOK && tifis.izqOK) 
	{
		if (direccion == teclas.UP)
		{
			tifiDibujo = tifis.atras;
		}
		if (direccion == teclas.DOWN)
		{
			tifiDibujo = tifis.frente;
		}
		if (direccion == teclas.RIGHT)
		{
			tifiDibujo = tifis.der;
		}
		if (direccion == teclas.LEFT)
		{
			tifiDibujo = tifis.izq;
		}

		tablero.drawImage(tifiDibujo, tifis.x, tifis.y);
	}

	// como lizOk es una variable booleana no se requiere comparar ya que si llego
	// y se cambio su valor a verdadero se ejecutara el if()
	// Capa : 3

	if (liz.lizOK) 
	{
		tablero.drawImage(liz.imagen, liz.x, liz.y);
	}
}

