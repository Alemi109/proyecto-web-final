$(document).ready(function () {
    $.ajax({
        url: "data_2_json/encabezado.json",
        method: "GET",
        dataType: "json",
        success: function (data) {
            $("#institucion").text(data.institucion);
            $("#practica").text(data.practica);
            $("#estudiante").text(data.estudiante);
            $("#ud").text(data.ud);
        }
    });

    $.ajax({
        url: "data_2_json/alumnos.json",
        method: "GET",
        dataType: "json",
        success: function (data) {
            const alumnos = data.alumnos;

            alumnos.forEach(function (alumno) {
                const fila = `
                    <tr>
                        <td>${alumno.dni}</td>
                        <td>${alumno.nombre}</td>
                        <td>${alumno.apellido}</td>
                        <td>${alumno.edad}</td>
                    </tr>`;
                $("#alumnos tbody").append(fila);
            });
        }
    });

    $.ajax({
        url: "data_2_json/cursos.json",
        method: "GET",
        dataType: "json",
        success: function (data) {
            const cursos = data.cursos;

            cursos.forEach(function (curso) {
                const fila = `
                    <tr>
                        <td>${curso.id_curso}</td>
                        <td>${curso.nombre_curso}</td>
                        <td>${curso.n_horas}</td>
                    </tr>`;
                $("#cursos tbody").append(fila);
            });
        }
    });

    $.ajax({
        url: "data_2_json/docentes.json",
        method: "GET",
        dataType: "json",
        success: function (data) {
            const docentes = data.docentes;

            docentes.forEach(function (docente) {
                const fila = `
                    <tr>
                        <td>${docente.dni}</td>
                        <td>${docente.nombre}</td>
                        <td>${docente.apellido}</td>
                        <td>${docente.curso}</td>
                    </tr>`;
                $("#docentes tbody").append(fila);
            });
        }
    });
});





