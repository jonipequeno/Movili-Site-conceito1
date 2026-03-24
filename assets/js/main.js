const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
}

const form = document.querySelector('#lead-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nome = data.get('nome');
    const empresa = data.get('empresa');
    const servico = data.get('servico');
    const objetivo = data.get('objetivo');
    const desafio = data.get('desafio');
    const telefone = '5561998019941';
    const msg = `Olá, Movili!%0A%0ANome: ${encodeURIComponent(nome)}%0AEmpresa: ${encodeURIComponent(empresa)}%0AServiço de interesse: ${encodeURIComponent(servico)}%0AObjetivo: ${encodeURIComponent(objetivo)}%0ADesafio: ${encodeURIComponent(desafio)}%0A%0AGostaria de receber um diagnóstico.`;
    window.open(`https://wa.me/${telefone}?text=${msg}`, '_blank');
  });
}
