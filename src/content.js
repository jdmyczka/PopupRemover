// content.js

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) {
                setTimeout(() => {
                    const style = window.getComputedStyle(node);
                    const isFixed = style.position === 'fixed';
                    const hasPopupClass = node.classList.contains('popup') || node.classList.contains('modal');
                    const hasPopupId = node.id === 'popup' || node.id === 'modal';

                    if (isFixed || hasPopupClass || hasPopupId) {
                        console.log('Popup detected!');
                        node.remove();
                    }
                }, 100);
            }
        });
    });
});

observer.observe(document.body, { childList: true, subtree: true });

const popupSelectors = [
    '.fc-dialog-container',
    '.outpost-cta',
    '.outpost-popup',
    '[role="dialog"]',
    '[aria-label="Please allow ads on our site"]',
    '.modal',
    '.popup',
    '.overlay',
    '.MuiDialog-container',
    '.qc-cmp2-container',
    '.fEy1Z2XT',
    '.pushly-prompt-wrapper',
	'.bt-softwall'
];

popupSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => el.remove());
});

const antiAdblockSelectors = [
    '._9r0K-Oum',
    '.aI8fZlpv',
    '._6Tt4x1jq',
    '._2RuuJiGc',
    '.JDeYciWM',
    '._4KvUwxDm'
];

antiAdblockSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => element.remove());
});

// Remove dimming effects or overlays
const overlays = document.querySelectorAll('[style*="rgba"]');
overlays.forEach(overlay => overlay.remove());

// Restore scroll and ensure all elements allow scrolling
document.body.style.overflow = 'auto !important';
document.documentElement.style.overflow = 'auto !important';

document.documentElement.style.setProperty('overflow', 'auto', 'important');
document.body.style.setProperty('overflow', 'auto', 'important');


const allElements = document.querySelectorAll('*');
allElements.forEach(el => {
    const style = window.getComputedStyle(el);

    // Ensure no element forces scroll blocking
    if (style.overflow === 'hidden' || style.overflow === 'hidden !important') {
        el.style.overflow = 'auto !important';
        el.style.overflowY = 'auto !important';
    }

    // Reset filter, opacity, or background dimming
    if (style.filter !== 'none' || style.opacity !== '1') {
        el.style.filter = 'none';
        el.style.opacity = '1';
    }

    if (style.position === 'fixed') {
        el.style.position = 'relative';  // Change position to relative if fixed blocking scroll
    }
});

// Ensure flex elements don't block scroll
const flexElements = document.querySelectorAll('[style*="display: flex"], [style*="display: -webkit-flex"], [style*="display: -ms-flexbox"], [style*="display: flexbox"]');
flexElements.forEach(element => {
    element.style.display = 'none !important';
});
