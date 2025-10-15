<<template>
  <div class="overlay" :class="{ 'show': viewCart }" id="modal-cart">
    <div class="modal">
      <header class="modal-header">
        <h2 class="modal-title">Cart</h2>
        <button class="modal-close" @click="closeCart()">x</button>
      </header>
      <table class="cart-table">
        <colgroup>
          <col class="col-goods" />
          <col class="col-price" />
          <col class="col-minus" />
          <col class="col-qty" />
          <col class="col-plus" />
          <col class="col-total-price" />
          <col class="col-delete" />
        </colgroup>
        <thead>
          <tr>
            <th>Good(s)</th>
            <th>Price</th>
            <th colspan="3">Qty.</th>
            <th colspan="2">Total</th>
          </tr>
        </thead>
        <tbody class="cart-table__goods">

          <!-- Новое -->
          <tr v-if="cart.length === 0">
            <td colspan="7" class="empty-cart-message">Корзина пуста</td>
          </tr>
          <!-- Новое -->

          <tr class="card-item" v-for="item in cart" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}$</td>
            <td><button class="cart-btn-minus" :disabled="item.count <= 1" @click="decrease(item)">
                -
              </button></td>
            <td>{{ item.count }}</td>
            <td><button class="cart-btn-plus" @click="increase(item)">
                +
              </button></td>
            <td>{{ item.price * item.count }}</td>
            <td><button class="cart-btn-delete" @click="remove(item)">
                x
              </button></td>
          </tr>
        </tbody>
        <tfoot v-if="cart.length > 0">
          <tr>
            <th colspan=" 5">Total:</th>
            <th class="card-table__total" colspan="2">{{ total }}$</th>
          </tr>
        </tfoot>
      </table>
      <form class="modal-form" action="">
        <input class="modal-input" type="text" placeholder="Имя" name="nameCustomer" />
        <input class="modal-input" type="text" placeholder="Телефон" name="phoneCustomer" />
        <button class="button cart-buy" type="submit">
          <span class="button-text">Checkout</span>
        </button>
      </form>
    </div>
  </div>
</template>

  <script setup lang="ts">
  import type { CartItem } from '~/models/cart-item.model'

  const viewCart = useViewCart()
  const cart = useCart()
  const total = computed(() => cart.value.reduce((sum, item) => {
    return sum + (item.price * item.count)
  }, 0))

  const closeCart = () => {
    viewCart.value = false
  }

  const increase = (item: CartItem) => {
    const findItem = cart.value.find(c => c.id === item.id)
    if (findItem.id) {
      findItem.count++
    }
  }
  const decrease = (item: CartItem) => {
    const findItem = cart.value.find(c => c.id === item.id)
    if (findItem.id) {
      findItem.count--
    }
  }
  const remove = (item: CartItem) => {
    const findItem = cart.value.find(c => c.id === item.id)
    if (findItem.id) {
      cart.value = cart.value.filter(c => c.id !== item.id)
    }
  }
</script>
  <style scoped>
  .empty-cart-message {
    text-align: center;
    padding: 2rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: #555;
  }
</style>
