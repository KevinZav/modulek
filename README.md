## Bienvenido a mi ModuleK

Este modulo tiene como objetivo almacenar logica de negocios de cualquier tipo de proyecto y retornarla por medio de cualquier tipo de medio (clases, funciones, tipos, etc).

### Instalación

1. Agrega este submodule al proyecto principal

```bash
git submodule add git@github.com:KevinZav/modulek.git
```

2. Agrega el submodule en el package.json del proyecto principal

```json
{
  "dependencies": {
    "modulek": "file:./modulek"
  }
}
```

3. Instala dependencias

```bash
npm install
```