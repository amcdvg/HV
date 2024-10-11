// Simula el inicio de sesión y la redirección al formulario
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí iría la lógica de autenticación (puede ser una llamada a una API)
    if (username === "idmjipc" && password === "hojadevidaPc*") {
        //alert('Inicio de sesión exitoso');
        document.getElementById('login-card').style.display = 'none';
        document.getElementById('enrollment-card').style.display = 'block';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

// Función para manejar el cierre de sesión
function handleLogout() {
    // Ocultar la sección de inscripción y mostrar el formulario de inicio de sesión
    document.getElementById('enrollment-card').style.display = 'none';
    document.getElementById('login-card').style.display = 'block';

    // Limpiar los campos del formulario de login
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    
}


// Función que maneja el cambio de selección en el campo "¿Ha participado en el instituto bíblico?"
function handleBibleSchoolChange(event) {
    const bibleSchoolValue = event.target.value;
    const bibleSchoolDetails = document.getElementById('bible-school-details');

    if (bibleSchoolValue === 'Sí') {
        bibleSchoolDetails.style.display = 'block'; // Mostrar campos adicionales
    } else {
        bibleSchoolDetails.style.display = 'none';  // Ocultar campos adicionales
        // Limpiar los valores de los campos si se ocultan
        document.getElementById('bible-school-format').value = '';
        document.getElementById('bible-school-times').value = '';
    }
}

document.getElementById('baptism-holy-spirit').addEventListener('change', function() {
    var baptismDateContainer = document.getElementById('baptism-date-container');
    if (this.value === 'No') {
        baptismDateContainer.style.display = 'none'; // Oculta el campo de fecha
    } else {
        baptismDateContainer.style.display = 'block'; // Muestra el campo de fecha
    }
});

// Inicialmente ocultar el campo de fecha si no está seleccionado
document.getElementById('baptism-date-container').style.display = 'none';

document.getElementById('prophecy-gift').addEventListener('change', function() {
    var baptismDateContainer = document.getElementById('prophecy-date-container');
    if (this.value === 'No') {
        baptismDateContainer.style.display = 'none'; // Oculta el campo de fecha
    } else {
        baptismDateContainer.style.display = 'block'; // Muestra el campo de fecha
    }
});

// Inicialmente ocultar el campo de fecha si no está seleccionado
document.getElementById('prophecy-date-container').style.display = 'none';


// Función que agrega un nuevo campo de labor y fecha
function addLaborItem() {
    const container = document.getElementById('labor-material-container');

    // Crear un nuevo div para una nueva labor y fecha
    const newLaborItem = document.createElement('div');
    newLaborItem.classList.add('labor-item');

    // HTML para los nuevos campos de labor y fecha
    newLaborItem.innerHTML = `
        <label for="labor">Labor</label>
        <select name="Labor" required>
            <option value="" disabled selected>Selecciona una labor</option>
            <option value="Casilleros">Casilleros</option>
            <option value="Video">Video</option>
            <option value="Enfermería">Enfermería</option>
            <option value="Acomodación">Acomodación</option>
            <option value="Ofrenda">Ofrenda</option>
            <option value="Biblias">Biblias</option>
            <option value="Llaves de la iglesia">Llaves de la iglesia</option>
            <option value="Aseo">Aseo</option>
            <option value="Logística (vigilancia)">Logística (vigilancia)</option>
            <option value="Sonido">Sonido</option>
            <option value="Baños">Baños</option>
            <option value="Protocolo de matrimonios">Protocolo de matrimonios</option>
            <option value="Interpretación (LDS o Idiomas)">Interpretación (LDS o Idiomas)</option>
        </select>

        <label for="labor-start-date">Fecha en que inició la labor</label>
        <input type="month" name="Fecha en que inició la labor" required>
    `;

    // Añadir el nuevo div al contenedor de labores
    container.appendChild(newLaborItem);
}

function clearLaborItems() {
    const container = document.getElementById('labor-material-container');
    
    // Selecciona todos los elementos con la clase 'labor-item' y los elimina
    const laborItems = container.querySelectorAll('.labor-item');
    laborItems.forEach(item => container.removeChild(item));
}

function previewImage(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    const previewBox = document.getElementById('file-preview');
    const previewImg = document.getElementById('preview-img');
    const previewIcon = document.getElementById('preview-icon');
    const fileContent = document.getElementById('file-upload-content');
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            // Ocultar contenido original y mostrar la vista previa
            previewIcon.style.display = 'none';
            fileContent.querySelector('p').style.display = 'none';
            fileContent.querySelector('small').style.display = 'none';

            // Mostrar la imagen seleccionada
            previewImg.src = e.target.result;
            previewBox.style.display = 'block';
        }
        reader.readAsDataURL(file);
    } else {
        // Si no hay archivo seleccionado, restaurar el estado original
        previewIcon.style.display = 'block';
        fileContent.querySelector('p').style.display = 'block';
        fileContent.querySelector('small').style.display = 'block';
        previewBox.style.display = 'none';
    }
}

// Captura los elementos del DOM que corresponden al HTML
const form = document.getElementById('enrollment-form');  // Asegúrate que sea el ID correcto del formulario
const fileInput = document.getElementById('file-upload');
const previewImg = document.getElementById('preview-img');
const filePreview = document.getElementById('file-preview');
const fileUploadContent = document.getElementById('file-upload-content');
const enrollmentCard = document.getElementById('enrollment-card');

// Función para mostrar vista previa de la imagen cargada
function previewImage(event) {
    const reader = new FileReader();
    const file = event.target.files[0];  // Obtiene el archivo seleccionado

    if (file) {
        reader.onload = function() {
            previewImg.src = reader.result;  // Muestra la imagen seleccionada
            filePreview.style.display = "block";  // Muestra la vista previa
            fileUploadContent.style.display = "none";  // Oculta la sección de subir imagen
        };
        reader.readAsDataURL(file);
    }
}

// Agrega el listener al input de archivo para ejecutar la vista previa
fileInput.addEventListener('change', previewImage);

//const scriptURL = 'https://script.google.com/macros/s/AKfycbwwxn8mFGNehoTVVL5YWutPjLLBC5UGFYJDPx0TbpfSr71qlqC5WaJwIplHxTNhMhM/exec';
// 5:00 pm
//https://script.google.com/macros/s/AKfycbxGhysinAOOvFhjYEgrIavHb8Erc5rTToRlyXUruKizrVTDdn31V50YcUNSMGW_Ytg/exec

//7:00 pm
//https://script.google.com/macros/s/AKfycbxljTFB-DsHGxtCvJJnpf9WEFxYToQ4QWDw0es7_FriK3-mVN09jsEdtAq5qixXLkponw/exec

//7:00 am
// https://script.google.com/macros/s/AKfycbzuu888WEyzuEI4YspA3TChJu8TjI7ddezLbOa7cHwdNM7KJ3pyR8AR_4dR5ng3GjlH4A/exec


// Manejador para el envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Evita el envío normal del formulario
    const formData1 = {};
    const labors = []; // Arreglo para almacenar las labores y sus fechas

    for (let field of form.elements) {
        if (field.name) {
            // Si el campo es un array (nombre con corchetes como labor[]), lo manejamos como array
            if (field.name.endsWith('[]')) {
                const baseName = field.name.slice(0, -2); // Eliminar los corchetes '[]'
                // Si aún no existe la clave en formData, inicializamos como array
                if (!formData1[baseName]) {
                    formData1[baseName] = [];
                }
                // Agregar el valor al array
                formData1[baseName].push(field.value);
            } else {
                // Si no es un array, simplemente añadimos el valor
                formData1[field.name] = field.value;
            }
            // Si el campo es una "Labor" o una "Fecha en que inició la labor", lo procesamos
            if (field.name.includes('Labor')) {
                labors.push({ labor: field.value, fecha: '' }); // Iniciar la labor sin fecha por ahora
            } else if (field.name.includes('Fecha en que inició la labor')) {
                // Asociar la fecha con la última labor ingresada
                if (labors.length > 0) {
                    labors[labors.length - 1].fecha = field.value;
                }
            }
        }
    }

    // Ahora, asignamos las labores y las fechas con los números correspondientes
    for (let i = 0; i < 13; i++) {
        const laborKey = `Labor ${i + 1}`;
        const fechaKey = `Fecha en que inició la labor ${i + 1}`;

        if (labors[i]) {
            formData1[laborKey] = labors[i].labor;
            formData1[fechaKey] = labors[i].fecha;
        } else {
            // Si no hay suficiente información, rellenamos con valores vacíos
            formData1[laborKey] = '';
            formData1[fechaKey] = '';
        }
    }

    console.log("Final formData:", formData1);
    let scriptURL
    // ------- upload file --------//
    if(formData1['Horario de Congregación Actual'] === "7:00 am"){
        scriptURL = 'https://script.google.com/macros/s/AKfycbzuu888WEyzuEI4YspA3TChJu8TjI7ddezLbOa7cHwdNM7KJ3pyR8AR_4dR5ng3GjlH4A/exec';
    }else if(formData1['Horario de Congregación Actual']==="5:00 pm"){
        scriptURL = 'https://script.google.com/macros/s/AKfycbxGhysinAOOvFhjYEgrIavHb8Erc5rTToRlyXUruKizrVTDdn31V50YcUNSMGW_Ytg/exec';
    }else{
        scriptURL = 'https://script.google.com/macros/s/AKfycbxljTFB-DsHGxtCvJJnpf9WEFxYToQ4QWDw0es7_FriK3-mVN09jsEdtAq5qixXLkponw/exec';
    }
    const file = form.file.files[0];
    const fr = new FileReader();
    console.log(file.type)
    const extension = file.name.split('.').pop();
    let name = `${formData1['Primer Nombre']} ${formData1['Segundo Nombre']} ${formData1['Primer Apellido']} ${formData1['Segundo Apellido']}.${extension}`
    fr.readAsArrayBuffer(file);
    fr.onload = (f) => {
        let url 
        if(formData1['Horario de Congregación Actual'] === "7:00 am"){
            url  = 'https://script.google.com/macros/s/AKfycbzuu888WEyzuEI4YspA3TChJu8TjI7ddezLbOa7cHwdNM7KJ3pyR8AR_4dR5ng3GjlH4A/exec';
        }else if(formData1['Horario de Congregación Actual']==="5:00 pm"){
            url  = 'https://script.google.com/macros/s/AKfycbxGhysinAOOvFhjYEgrIavHb8Erc5rTToRlyXUruKizrVTDdn31V50YcUNSMGW_Ytg/exec';
        }else{
            url  = 'https://script.google.com/macros/s/AKfycbxljTFB-DsHGxtCvJJnpf9WEFxYToQ4QWDw0es7_FriK3-mVN09jsEdtAq5qixXLkponw/exec';
        }
      //const url = "https://script.google.com/macros/s/AKfycbwwxn8mFGNehoTVVL5YWutPjLLBC5UGFYJDPx0TbpfSr71qlqC5WaJwIplHxTNhMhM/exec"; // Please set the URL of Web Apps.

      const qs = new URLSearchParams({
        filename: name,//file.name,
        mimeType: file.type,
      });
      fetch(`${url}?${qs}`, {
        method: "POST",
        body: JSON.stringify([...new Int8Array(f.target.result)]),
      })
        .then((res) => res.json())
        .then(console.log)
        .catch(console.log);
    };
    // ------- upload file --------//

    // Envío del formulario usando fetch con 'no-cors' para evitar problemas de CORS
    fetch(scriptURL, { 
        method: 'POST',
        //headers: { 'Content-Type': 'application/json' },  // Asegúrate de especificar el tipo de contenido
        body: JSON.stringify(formData1),  // Convierte el objeto a JSON
        mode: "no-cors"
        
    })
    .then(() => {
        
        
        form.reset();  // Limpia todos los campos del formulario
        previewImg.src = "#";  // Restablece la imagen a un valor predeterminado
        filePreview.style.display = "none";  // Oculta la vista previa de la imagen
        fileUploadContent.style.display = "block";  // Muestra la sección de subida de archivo
        enrollmentCard.style.display = 'block';  // Muestra nuevamente la tarjeta de inscripción (u otro contenido)
        clearLaborItems();
        // Mensaje de confirmación opcional
        alert('El formulario ha sido enviado');
    })
    .catch(error => console.error('Error!', error.message));

    
});
