const dbName = 'OscarDB';
const storeName = 'peliculas';

let db;

const openRequest = indexedDB.open(dbName, 1);

openRequest.onupgradeneeded = (event) => {
    db = event.target.result;
    if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
    }
};

openRequest.onsuccess = (event) => {
    db = event.target.result;
    // Aquí puedes inicializar eventos de la interfaz de usuario y cargar datos iniciales
};

openRequest.onerror = (event) => {
    console.error('Error al abrir la base de datos', event);
};

function addPelicula(pelicula) {
    const transaction = db.transaction(storeName, 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.add(pelicula);
    request.onsuccess = () => {
        console.log('Película agregada correctamente');
    };
    request.onerror = () => {
        console.error('Error al agregar la película', request.error);
    };
}

function getPeliculas(callback) {
    const transaction = db.transaction(storeName, 'readonly');
    const store = transaction.objectStore(storeName);
    const request = store.openCursor();
    const peliculas = [];
    request.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
            peliculas.push(cursor.value);
            cursor.continue();
        } else {
            callback(peliculas);
        }
    };
    request.onerror = () => {
        console.error('Error al recuperar las películas', request.error);
    };
}

function deletePelicula(id, callback) {
    const transaction = db.transaction(storeName, 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.delete(id);
    request.onsuccess = () => {
        console.log('Película eliminada correctamente');
        if (callback) {
            callback();
        }
    };
    request.onerror = () => {
        console.error('Error al eliminar la película', request.error);
    };
}
