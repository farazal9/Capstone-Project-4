
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  
    let cartItemsContainer = document.getElementById('cart-items');

    if (cartItems.length === 0) {
      cartItemsContainer.innerHTML = '<tr><td colspan="5">Your cart is empty.</td></tr>';
    } else {
   
      cartItems.forEach((item, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>
            <input type="number" value="1" min="1" class="form-control quantity" data-index="${index}" />
          </td>
          <td>${item.price}</td>
          <td>
            <button class="btn btn-danger remove-item" data-index="${index}">Remove</button>
          </td>
        `;
        cartItemsContainer.appendChild(row);
      });

    
      document.querySelectorAll('.remove-item').forEach((button) => {
        button.addEventListener('click', function () {
          let index = button.getAttribute('data-index');
          cartItems.splice(index, 1); 
          localStorage.setItem('cartItems', JSON.stringify(cartItems)); 
          location.reload(); 
        });
      });

    
      document.querySelectorAll('.quantity').forEach((input) => {
        input.addEventListener('input', function () {
          let index = input.getAttribute('data-index');
          let quantity = input.value;
       
          let price = parseFloat(cartItems[index].price.replace('$', ''));
          let total = (price * quantity).toFixed(2);
          input.closest('tr').querySelector('td:nth-child(4)').innerText = `$${total}`;
        });
      });
    }
  