let preLoader = document.getElementById('pre-loader')
window.addEventListener('load', () => {
    setTimeout(() => {
        preLoader.style.opacity = '0'
        
        body.classList.remove('no-scroll')
        setTimeout(() => {
            
            preLoader.style.display='none'
        }, 500);
    }, 5000);
})

let body = document.querySelector('body')
function refreshPage() {
    location.reload();
}