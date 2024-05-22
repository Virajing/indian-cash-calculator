function calculateTotal() {
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

    const totalAmount = (notes500 * 500) + (notes200 * 200) + (notes100 * 100) + (notes50 * 50) + (notes20 * 20) +
                        (notes10 * 10) + (coins10 * 10) + (coins5 * 5) +
                        (coins2 * 2) + (coins1 * 1);

    document.getElementById('totalAmount').innerText = `Total Amount: ₹${totalAmount}`;
}
