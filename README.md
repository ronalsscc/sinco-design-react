<img src="src/assets/Header.png" alt="Header Image" style="width: 100%; height: 100%; object-fit:cover;"/>

# SINCO DESIGN REACT

Este proyecto es el encargado de gestionar los componentes comunes que se usan en todos los equipos de trabajo de SincoSoft. Construido con React + Vite.

## Publicación

## Librerías en uso :book:

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [MUI](https://mui.com/)

### Estandares de desarrollo :eyes:

Para la correcta codificación en este proyecto es primordial tener el cuenta los siguientes estadares de desarrollo:

#### Generales

- Todo lo que sea general puede estar en una carpeta a nivel del src que se llame "Generales".
- El nombre de las carpetas inicia en minúscula.
- El nombre de los componentes empieza por Mayúscula.
- No dejar código en desuso

#### Interfaces

- El nombre empieza por mayúsculas
- Tiene que terminar en “Props“ cuando sea la interfaz de entrada de un componente.
- Para los types se debe agregar el sufijo “Type” al final
- Son de extensión .ts
- Las interfaces de tipo “Props“ deben estar en el mismo archivo que el componente.
- Cuando un componente requiere más de una interfaz se aloja en la carpeta de “Interfaces” esquematizando las carpetas según la funcionalidad.
- El nombre de las propiedades empieza por minúscula.
- Se puede dejar un archivo para una interface que tenga nidos

#### Componentes

- Seguir principios SOLID
- Debe iniciar por mayuscula.
- No debe tener referencias que no se estén usando.

#### Estilos

- Se debe crear un StyledComponent cuando sea un componente personalizado del modulo y se use en varias vistas. De lo contrario se debe manejar con las propiedades de este o con sx.
- El style va en el componente no en un archivo CCs (Ha no ser que sea muy extenso)
- NO SE USA PIXELES (Se usa la medida del tema y de lo contrario REM, cada REM equivale a 16px)

#### Test

- Se debe hacer un archivo para todos los test de un flujo
- Toda funcionalidad debe estar testeada.
- Los nombre de los test y desc deben ser descriptivos
- La data mockeada debe estar independiente en un archivo al mismo nivel del test.

### Pautas de calidad para desarrollos :exclamation:

Los siguientes puntos determinan si un desarrollo se finalizó correctamente y se puede realizar un pull request.

- Debe compilar el proyecto correctamente
- Todo debe estar testeado y los test tienen que funcionar en su totalidad.
- No deben haber referencias que no se usen.
- No pueden existir debuggers o console.log

### Licencia

Todo el codigo expuesto en este repositorio pertenece a [SincoSoft](https://www.sinco.co/). Todos los derechos reservados.
