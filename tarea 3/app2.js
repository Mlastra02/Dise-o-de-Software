// app2.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App2() {
    return (
        <div>
            <div>
                <ContactForm/>
            </div>
        </div>
    );
}
function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || message === '') {
            setError('Todos los campos son obligatorios');
            setSuccess('');  // Limpiar el mensaje de éxito si hay un error
        } else {
            setError('');
            // Aquí podrías hacer la lógica para enviar el formulario, por ejemplo, una llamada a una API
            // Para este ejemplo, simularemos un envío exitoso:
            setTimeout(() => {
                setSuccess('¡Mensaje enviado exitosamente!');
                setName('');  // Limpiar los campos después del envío exitoso
                setEmail('');
                setMessage('');
            }, 1000); // Simula un retraso de 1 segundo para el envío
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-lg bg-card-custom text-soft-dark">
            <h2 class="text-4xl font-extrabold mb-6 text-teal-700 font-sans">
                    Contáctanos
            </h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-teal-700 mb-2">Nombre</label>
                <input 
                    type="text" 
                    id="name"
                    placeholder="Nombre" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="max-w-md mx-auto w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-teal-700 mb-2">Email</label>
                <input 
                    type="email" 
                    id="email"
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="max-w-md mx-auto w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-teal-700 mb-2">Mensaje</label>
                <textarea 
                    id="message"
                    placeholder="Mensaje" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    className="max-w-md mx-auto w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                    rows="4"
                />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <button 
                type="submit" 
                className="max-w-md mx-auto w-full py-2 bg-gradient-custom text-white font-semibold rounded hover:bg-pink-600"
            >
                Enviar
            </button>
        </form>
    );
}
// Montar la aplicación en el div con id "root2"
ReactDOM.render(<App2 />, document.getElementById('root2'));
