---
layout: default
title: "¡Gracias por tu pago! ✅ Verifica tu Transacción"
permalink: /formatos/experiencia-laboral-independiente/thanks/
noindex: true
---

<section class="hero">
  <h1>¡Todo listo! Solo un último paso</h1>
  <p>Gracias por adquirir tu formato. Para garantizar la seguridad del proceso, ingresa el <strong>ID de transacción</strong> (enviado al correo electrónico que registraste en el pago de Wompi) para habilitar la descarga inmediata.</p>
</section>

<section id="verification-panel">
  <div class="verification-card">
    <div class="card-header">
      <span class="icon">💳</span>
      <h2>Verificar Transacción</h2>
    </div>
    <div class="card-body">
      <label for="transaction-id">ID de Transacción Wompi:</label>
      <input type="text" id="transaction-id" placeholder="Ej: 12345-67890-ABCDE" autocomplete="off">
      <p class="helper-text">Lo encuentras en el correo de confirmación de Wompi o en la pantalla final de pago.</p>
      
      <button id="btn-verify" class="btn-verify">
        <span id="btn-text">Verificar Pago</span>
        <span id="spinner" class="spinner hidden"></span>
      </button>

      <div id="status-message" class="status-message hidden"></div>
    </div>
  </div>
</section>

<section id="download-section" class="hidden">
  <div class="success-box">
    <span class="success-icon">✅</span>
    <h3>¡Pago Verificado con Éxito!</h3>
    <p>Ya puedes descargar tus archivos de forma individual. Haz clic en cada botón para obtener el material correspondiente:</p>
    
    <div class="download-list">
      <div class="download-item">
        <p><strong>1. Plantilla Editable (Word)</strong></p>
        <div class="btn-download-container" style="margin: 0.5rem 0 1.5rem 0;">
          <a href="/assets/archivos/formatos-experiencia-laboral-independiente-thanks/EDITABLE - EXPERIENCIA LABORAL INDEPENDIENTE.docx" class="btn-download" download>
            <span class="icon">📝</span> Descargar Editable (.docx)
          </a>
        </div>
      </div>

      <div class="download-item">
        <p><strong>2. Guía Paso a Paso (Tutorial)</strong></p>
        <div class="btn-download-container" style="margin: 0.5rem 0 1.5rem 0;">
          <a href="/assets/archivos/formatos-experiencia-laboral-independiente-thanks/CÓMO LLENAR LA CERTIFICACIÓN PASO A PASO.pdf" class="btn-download" download>
            <span class="icon">📘</span> Descargar Guía (.pdf)
          </a>
        </div>
      </div>

      <div class="download-item">
        <p><strong>3. 5 Ejemplos Prácticos</strong></p>
        <div class="btn-download-container" style="margin: 0.5rem 0 1.5rem 0;">
          <a href="/assets/archivos/formatos-experiencia-laboral-independiente-thanks/5 EJEMPLOS - EXPERIENCIA LABORAL COMO TRABAJADOR INDEPENDIENTE.docx" class="btn-download" download>
            <span class="icon">💡</span> Descargar Ejemplos (.docx)
          </a>
        </div>
      </div>
    </div>

    <!-- Disclaimer -->
    <div style="background: #fff5f5; border: 1px solid #feb2b2; border-radius: 12px; padding: 1.2rem; text-align: center; max-width: 100%; margin-top: 2rem; box-shadow: 0 4px 10px rgba(229, 62, 62, 0.03);">
      <p style="color: #9b2c2c; margin-bottom: 0; font-size: 0.85rem; text-align: center; line-height: 1.5;">
        <strong>⚠️ Aviso:</strong> La información presentada en esta sección y el uso de nuestra plantilla no implican que la experiencia laboral independiente será considerada en su totalidad dentro del proceso de evaluación. Sin embargo, este tipo de experiencia puede ser tenida en cuenta de manera parcial o total, dependiendo de los criterios establecidos por la entidad o el contexto específico de evaluación.
      </p>
    </div>
  </div>
</section>

<style>
/* Estilos específicos para la página de verificación */
.verification-card {
  max-width: 500px;
  margin: 0 auto;
  background: #f8fbff;
  border: 1px solid #d0e1f9;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 64, 128, 0.05);
}

.card-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.card-header .icon {
  font-size: 2.5rem;
  display: block;
}

.card-header h2 {
  margin-top: 0.5rem;
  border-bottom: none;
}

.card-body label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #004080;
}

.card-body input {
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1.1rem;
  border: 2px solid #b3d1ff;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  transition: border-color 0.3s;
}

.card-body input:focus {
  outline: none;
  border-color: #007bff;
}

.helper-text {
  font-size: 0.85rem;
  color: #666;
  text-align: left;
  margin-bottom: 1.5rem;
}

.btn-verify {
  width: 100%;
  padding: 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: background 0.3s, transform 0.2s;
}

.btn-verify:hover {
  background: #0056b3;
}

.btn-verify:active {
  transform: scale(0.98);
}

.status-message {
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 6px;
  font-size: 0.95rem;
  text-align: center;
}

.status-message.error {
  background: #fff0f0;
  color: #d00;
  border: 1px solid #ffcccc;
}

.status-message.pending {
  background: #fff9e6;
  color: #856404;
  border: 1px solid #ffeeba;
}

.success-box {
  background: #f0fff4;
  border: 2px solid #c6f6d5;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  animation: fadeIn 0.5s ease-out;
}

.success-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}

.hidden {
  display: none !important;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255,255,255,0.3);
  border-top: 3px solid #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const btnVerify = document.getElementById('btn-verify');
  const inputId = document.getElementById('transaction-id');
  const statusMsg = document.getElementById('status-message');
  const spinner = document.getElementById('spinner');
  const btnText = document.getElementById('btn-text');
  const downloadSection = document.getElementById('download-section');
  const verificationPanel = document.getElementById('verification-panel');

  const PUBLIC_KEY = 'pub_prod_LvAY0vB8YKlQYSbHOCgYiFJ39XuvTWQ4';

  async function checkTransaction() {
    const id = inputId.value.trim();
    if (!id) {
      showError('Por favor ingresa un ID válido.');
      return;
    }

    // Reset status
    statusMsg.classList.add('hidden');
    btnVerify.disabled = true;
    spinner.classList.remove('hidden');
    btnText.textContent = 'Verificando...';

    try {
      // Nota: Usamos la API pública de Wompi. Algunos navegadores podrían tener bloqueos de CORS, 
      // pero usualmente las APIs de pago permiten estas consultas públicas por ID.
      const response = await fetch(`https://production.wompi.co/v1/transactions/${id}`);
      const result = await response.json();

      if (result && result.data) {
        const transaction = result.data;
        
        switch (transaction.status) {
          case 'APPROVED':
            handleSuccess();
            break;
          case 'PENDING':
            showStatus('El pago aún está en proceso de validación. Por favor espera unos minutos y vuelve a intentarlo.', 'pending');
            break;
          case 'DECLINED':
            showError('El pago fue rechazado. Si crees que es un error, contacta con tu entidad bancaria.');
            break;
          case 'VOIDED':
            showError('La transacción fue anulada.');
            break;
          default:
            showError('No se pudo verificar el estado de la transacción. Verifica el ID ingresado.');
        }
      } else {
        showError('No se encontró información para este ID de transacción.');
      }
    } catch (error) {
      console.error('Error verificando pago:', error);
      showError('Error de conexión. Inténtalo de nuevo en unos momentos.');
    } finally {
      if (btnText.textContent === 'Verificando...') {
        resetButton();
      }
    }
  }

  function handleSuccess() {
    verificationPanel.classList.add('hidden');
    downloadSection.classList.remove('hidden');
  }

  function showStatus(msg, type) {
    statusMsg.textContent = msg;
    statusMsg.className = 'status-message ' + type;
    statusMsg.classList.remove('hidden');
  }

  function showError(msg) {
    showStatus(msg, 'error');
  }

  function resetButton() {
    btnVerify.disabled = false;
    spinner.classList.add('hidden');
    btnText.textContent = 'Verificar Pago';
  }

  btnVerify.addEventListener('click', checkTransaction);
  
  // Enter key support
  inputId.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkTransaction();
  });
});
</script>
