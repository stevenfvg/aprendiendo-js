export default function hero() {
    return `
        <div id="hero">
            <div class="container">
                <div class="row">
                    <div class="six columns">
                        <div class="contenido-hero">
                            <h2>Aprende algo nuevo</h2>
                            <p>Todos los cursos a $15</p>
                            <form action="#" id="busqueda" method="post" class="formulario">
                                <input class="u-full-width" type="text" placeholder="¿Que te gustaría Aprender?" id="buscador">
                                <input type="submit" id="submit-buscador" class="submit-buscador">
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    `;
}
