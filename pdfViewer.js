// PDF Viewer logic
function setupPDFViewer() {
    function attachPDFListeners() {
        const pdfOverlay = document.getElementById('pdf-viewer-overlay');
        const pdfMinimize = document.querySelector('.pdf-minimize');
        const pdfClose = document.querySelector('.pdf-close');
        const pdfMaximize = document.querySelector('.pdf-maximize');
        const pdfFrame = document.getElementById('pdf-frame');
        const pdfHeader = pdfOverlay.querySelector('.pdf-viewer-header');

        const terminal = document.getElementById('terminal');
        function getBounds() {
            const tRect = terminal.getBoundingClientRect();
            const oRect = pdfOverlay.getBoundingClientRect();
            return {
                minX: tRect.left,
                maxX: tRect.right - oRect.width,
                minY: tRect.top,
                maxY: tRect.bottom - oRect.height
            };
        }

        function centerOverlay() {
            pdfOverlay.style.left = '50%';
            pdfOverlay.style.top = '50%';
            pdfOverlay.style.transform = 'translate(-50%, -50%)';
            pdfOverlay.style.transition = 'box-shadow 0.2s, border 0.2s, left 0.15s, top 0.15s';
        }

        document.body.addEventListener('click', function(e) {
            const link = e.target.closest('.info-link');
            if (link && link.href && link.href.endsWith('nihalshettyresume.pdf')) {
                e.preventDefault();
                pdfFrame.src = 'assets/nihalshettyresume.pdf';
                document.querySelector('.pdf-viewer-title').textContent = 'Resume - Nihal Shetty';
                centerOverlay();
                if (pdfOverlay) pdfOverlay.classList.remove('hidden');
            }
            
            const publicationLink = e.target.closest('.publication-pdf-link');
            if (publicationLink && publicationLink.href && publicationLink.href.endsWith('doc.pdf')) {
                e.preventDefault();
                pdfFrame.src = 'assets/doc.pdf';
                document.querySelector('.pdf-viewer-title').textContent = 'Publication - Nihal Shetty';
                centerOverlay();
                if (pdfOverlay) pdfOverlay.classList.remove('hidden');
            }
        });

        pdfMinimize.addEventListener('click', () => {
            pdfOverlay.classList.add('hidden');
        });

        pdfClose.addEventListener('click', () => {
            pdfOverlay.classList.add('hidden');
            pdfFrame.src = pdfFrame.src;
        });

        pdfMaximize.addEventListener('click', () => {
            const currentSrc = pdfFrame.src;
            if (currentSrc.includes('nihalshettyresume.pdf')) {
                window.open('assets/nihalshettyresume.pdf', '_blank');
            } else if (currentSrc.includes('doc.pdf')) {
                window.open('assets/doc.pdf', '_blank');
            }
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