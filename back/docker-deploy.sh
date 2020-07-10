# LOCAL
# pasos para subir a docker hub:
# 1) hacer docker build en la carpeta donde se encuentra el dockerfile y ponerle un nombre al repo
    docker build -t registro_pago_back .
# 2) crearle la etiqueta (tag)
    docker tag registro_pago_back isacnd/registro_pago_back
# 3) subirla al repo de docker hub
    docker push isacnd/registro_pago_back