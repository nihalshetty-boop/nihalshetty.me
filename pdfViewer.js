// PDF Viewer logic
function setupPDFViewer() {
    function attachPDFListeners() {
        const pdfOverlay = document.getElementById('pdf-viewer-overlay');
        const pdfMinimize = document.querySelector('.pdf-minimize');
        const pdfClose = document.querySelector('.pdf-close');
        const pdfMaximize = document.querySelector('.pdf-maximize');
        const pdfFrame = document.getElementById('pdf-frame');
        const pdfHeader = pdfOverlay.querySelector('.pdf-viewer-header');

        // Use interact.js for draggable overlay
        interact(pdfOverlay).draggable({
            allowFrom: '.pdf-viewer-header',
            listeners: {
                start (event) {
                    pdfOverlay.style.transition = 'none';
                    // Remove centering transform on drag
                    pdfOverlay.style.transform = '';
                },
                move (event) {
                    const x = (parseFloat(pdfOverlay.getAttribute('data-x')) || 0) + event.dx;
                    const y = (parseFloat(pdfOverlay.getAttribute('data-y')) || 0) + event.dy;
                    pdfOverlay.style.left = x + 'px';
                    pdfOverlay.style.top = y + 'px';
                    pdfOverlay.setAttribute('data-x', x);
                    pdfOverlay.setAttribute('data-y', y);
                },
                end (event) {
                    pdfOverlay.style.transition = 'box-shadow 0.2s, border 0.2s, left 0.15s, top 0.15s';
                }
            }
        });

        // Center overlay each time it opens
        function centerOverlay() {
            pdfOverlay.style.left = '';
            pdfOverlay.style.top = '';
            pdfOverlay.style.transform = 'translateX(-50%)';
            pdfOverlay.removeAttribute('data-x');
            pdfOverlay.removeAttribute('data-y');
            pdfOverlay.style.transition = 'box-shadow 0.2s, border 0.2s, left 0.15s, top 0.15s';
        }

        // Show overlay when resume link is clicked
        document.body.addEventListener('click', function(e) {
            const link = e.target.closest('.info-link');
            if (link && link.href && link.href.endsWith('nihalshettyresume.pdf')) {
                e.preventDefault();
                centerOverlay();
                if (pdfOverlay) pdfOverlay.classList.remove('hidden');
            }
        });

        // Minimize
        pdfMinimize.addEventListener('click', () => {
            pdfOverlay.classList.add('hidden');
        });

        // Close
        pdfClose.addEventListener('click', () => {
            pdfOverlay.classList.add('hidden');
            pdfFrame.src = pdfFrame.src;
        });

        // Maximize
        pdfMaximize.addEventListener('click', () => {
            window.open('assets/nihalshettyresume.pdf', '_blank');
            pdfOverlay.classList.add('hidden');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', attachPDFListeners);
    } else {
        attachPDFListeners();
    }
}

setupPDFViewer(); 