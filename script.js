function updateSubTotal(denomination, multiplier, subTotalId) {
    const count = parseInt(document.getElementById(denomination).value) || 0;
    const subTotal = count * multiplier;
    document.getElementById(subTotalId).innerText = `₹${subTotal}`;
    calculateTotal();
}

function calculateTotal() {
    const notes2000 = parseInt(document.getElementById('notes2000').value) || 0;
    const notes500 = parseInt(document.getElementById('notes500').value) || 0;
    const notes200 = parseInt(document.getElementById('notes200').value) || 0;
    const notes100 = parseInt(document.getElementById('notes100').value) || 0;
    const notes50 = parseInt(document.getElementById('notes50').value) || 0;
    const notes20 = parseInt(document.getElementById('notes20').value) || 0;
    const notes10 = parseInt(document.getElementById('notes10').value) || 0;
    const coins10 = parseInt(document.getElementById('coins10').value) || 0;
    const coins5 = parseInt(document.getElementById('coins5').value) || 0;
    const coins2 = parseInt(document.getElementById('coins2').value) || 0;
    const coins1 = parseInt(document.getElementById('coins1').value) || 0;

    const totalAmount = (notes2000 * 2000) + (notes500 * 500) + (notes200 * 200) +
                        (notes100 * 100) + (notes50 * 50) + (notes20 * 20) +
                        (notes10 * 10) + (coins10 * 10) + (coins5 * 5) +
                        (coins2 * 2) + (coins1 * 1);

    document.getElementById('totalAmount').innerText = `Total Amount: ₹${totalAmount}`;
}

document.getElementById('notes2000').addEventListener('input', () => updateSubTotal('notes2000', 2000, 'total2000'));
document.getElementById('notes500').addEventListener('input', () => updateSubTotal('notes500', 500, 'total500'));
document.getElementById('notes200').addEventListener('input', () => updateSubTotal('notes200', 200, 'total200'));
document.getElementById('notes100').addEventListener('input', () => updateSubTotal('notes100', 100, 'total100'));
document.getElementById('notes50').addEventListener('input', () => updateSubTotal('notes50', 50, 'total50'));
document.getElementById('notes20').addEventListener('input', () => updateSubTotal('notes20', 20, 'total20'));
document.getElementById('notes10').addEventListener('input', () => updateSubTotal('notes10', 10, 'total10'));
document.getElementById('coins10').addEventListener('input', () => updateSubTotal('coins10', 10, 'totalCoins10'));
document.getElementById('coins5').addEventListener('input', () => updateSubTotal('coins5', 5, 'totalCoins5'));
document.getElementById('coins2').addEventListener('input', () => updateSubTotal('coins2', 2, 'totalCoins2'));
document.getElementById('coins1').addEventListener('input', () => updateSubTotal('coins1', 1, 'totalCoins1'));
