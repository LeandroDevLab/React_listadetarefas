# React + Vite

Comando para criar o projeto

`npm create vite@latest meu-app-vite -- --template react`

npm i react-icons

### componentDidMount()

```
//Executado imediatamente após a atualização (renderização)
  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas"));

    if (!tarefas) return; // (se não tiver para aqui) seria tipo o vanila setar tarefas se houver || ''

    this.setState({ tarefas });
  }
```

### componentDidUptade(prevProps, prevState)

```
  //Assiste atualização do componente em tempo real
  componentDidUpdate(prevProps, prevState) {
    //console.log(prevState.novaTarefa); // teste só com esse console e comente o restante abaixo
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return; // ESSENCIAL para evitar loop infinito (dependendo do código)

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
