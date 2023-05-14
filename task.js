class Tarea {
    constructor(desc, status){
        this.desc = desc
        this.status = status
    }

    html(pos){
        return`
        <div class="tarea">
        <p>${this.desc}</p>
        <button onclick="actualizarTarea(${pos})">Avanzar</button></div>
        <button onclick="eliminarTarea(${pos})">Eliminar</button>
        <button onclick="retroceder(${pos})">Retroceder</button>
        `
    }}

