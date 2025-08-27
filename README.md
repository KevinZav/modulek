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

### Uso

Este modulo se puede usar en cualquier framework y posiblemente en el futuro se implementen funcionalidades exclusivas para React, Angular o Vue.

Para usar una funcion o clase basta con importar y dar uso:

#### Angular

```ts
import { greeting } from 'modulek';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly saludo = signal(greeting('Kevin'));
}
```

```html
<h4>{{saludo()}}</h4>
```