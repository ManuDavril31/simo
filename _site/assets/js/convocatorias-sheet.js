// Script para extraer datos públicos de Google Sheets y mostrarlos en la sección de Convocatorias recientes
// Asegúrate de que la hoja esté publicada como "Cualquiera con el enlace puede ver"

const SHEET_ID = "1461l_RUxWxwP5Dny_88dac809YTkW04FZW4LeQlIvuk";
const GID = "0"; // Primer hoja
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=${GID}`;

function renderConvocatoriasTabla(datos) {
  const container = document.getElementById("convocatorias-dinamicas");
  if (!container) return;
  let html = "<table><thead><tr>";
  // Solo un encabezado: Convocatoria
  html += `<th>${datos.cols[0].label}</th>`;
  html += "</tr></thead><tbody>";
  // Filas
  datos.rows.forEach((row) => {
    const nombre = row.c[0] && row.c[0].v ? row.c[0].v : "";
    const enlace = row.c[1] && row.c[1].v ? row.c[1].v : "";
    if (nombre.toLowerCase() === "convocatoria") return; // Omitir la fila de encabezado
    html += "<tr>";
    if (nombre && enlace) {
      html += `<td><a href="${enlace}" target="_blank" rel="noopener">${nombre}</a></td>`;
    } else if (nombre) {
      html += `<td>${nombre}</td>`;
    } else {
      html += "<td></td>";
    }
    html += "</tr>";
  });
  html += "</tbody></table>";
  container.innerHTML = html;
}

function cargarConvocatoriasDesdeSheet() {
  fetch(SHEET_URL)
    .then((res) => res.text())
    .then((text) => {
      // El JSON viene envuelto en una función, hay que limpiarlo
      const json = JSON.parse(text.substring(47, text.length - 2));
      renderConvocatoriasTabla(json.table);
    })
    .catch((err) => {
      document.getElementById("convocatorias-dinamicas").innerHTML =
        "<p>No se pudo cargar la información.</p>";
    });
}

document.addEventListener("DOMContentLoaded", cargarConvocatoriasDesdeSheet);
