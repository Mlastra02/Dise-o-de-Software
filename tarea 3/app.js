// Componente principal
function App() {
    return (
        <div>
            <div className="container mx-auto p-4">
                <ComponentOne />
            </div>
        </div>
    );
}

// Primer componente
function ComponentOne() {
    return (
    <div id="seccion4" class="p-6 rounded-lg shadow-lg bg-card-custom">
        <h2 class="text-4xl font-extrabold mb-6 text-teal-700 font-sans">
            Testimonios
        </h2>
        <div class="space-y-8">
            <blockquote class="text-xl italic leading-relaxed">
                <p class="mb-4 text-teal-600">“La mejor experiencia que hemos tenido con una empresa de tecnología. Altamente recomendados.”</p>
                <footer class="text-right text-teal-700 font-semibold">- Juan Pérez, CEO de Empresa X</footer>
            </blockquote>
            <blockquote class="text-xl italic leading-relaxed">
                <p class="mb-4 text-teal-600">“Su equipo es muy profesional y entregan resultados de alta calidad en poco tiempo.”</p>
                <footer class="text-right text-teal-700 font-semibold">- María Gómez, Directora de Proyectos en Empresa Y</footer>
            </blockquote>
        </div>
    </div>
    );
}

// Segundo componente
function ComponentTwo() {
    return (
        <div className="bg-card-custom p-4 mb-4 rounded shadow">
            <h3 className="text-xl font-semibold">Componente Dos</h3>
            <p>Este es el segundo componente.</p>
        </div>
    );
}

// Renderizar la aplicación
ReactDOM.render(<App />, document.getElementById('root'));
