document.addEventListener("DOMContentLoaded", function () {
    fetch("cursos.json")
      .then(response => response.json())
      .then(categorias => {
        const contenedor = document.getElementById("contenedor-categorias");
  
        categorias.forEach((categoria, index) => {
          let cursosHtml = categoria.cursos.map((curso, i) => `
            <li class="list-group-item curso-item" data-curso="${curso}">
              ${curso}
            </li>
          `).join("");
  
          let cardHtml = `
            <div class="col-md-4 mb-3">
              <div class="card shadow-lg">
                <div class="card-body">
                  <h5 class="card-title">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#0D6EFD">
                      <path d="${categoria.icono}"/>
                    </svg>
                    <br><b>${categoria.categoria}</b>
                  </h5>
                  <div class="accordion" id="accordion-${index}">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${index}">
                          Ver Cursos
                        </button>
                      </h2>
                      <div id="collapse-${index}" class="accordion-collapse collapse" data-bs-parent="#accordion-${index}">
                        <div class="accordion-body">
                          <ul class="list-group">
                            ${cursosHtml}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
  
          contenedor.innerHTML += cardHtml;
        });
  
        // Agregar eventos de clic a los cursos
        document.querySelectorAll(".curso-item").forEach(item => {
          item.addEventListener("click", function () {
            let curso = this.getAttribute("data-curso");
            let mensaje = `Hola, me interesa tomar clases de ${curso}. ¿Podrían darme más información?`;
            let url = `https://wa.me/56951702824?text=${encodeURIComponent(mensaje)}`;
            window.open(url, "_blank");
          });
        });
      });
  });
  
  