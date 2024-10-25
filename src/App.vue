<script setup>
import { onMounted, reactive, watch, provide, ref, computed } from 'vue';
import axios from 'axios';
import { useToast } from 'vue-toastification';
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Drawer from './components/drawer/Drawer.vue';

const state = reactive({
        products: [],
        isLoading: true,
    }),
    orderState = reactive({
        orderId: null,
        products: [],
        totalPrice: 0,
        isCreatingOrder: false,
    }),
    filters = reactive({
        searchQuery: '',
        sortBy: 'title',
    }),
    localProducts = reactive({
        favorites: localStorage.getItem('favorites')
            ? JSON.parse(localStorage.getItem('favorites'))
            : [],
        cart: localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : [],
        orders: localStorage.getItem('orders')
            ? JSON.parse(localStorage.getItem('orders'))
            : [],
    }),
    toast = useToast(),
    isDrawerOpen = ref(false),
    price = computed(() =>
        localProducts.cart.reduce((acc, product) => acc + product.price, 0),
    ),
    taxPct = 5,
    taxation = computed(() => Math.round((price.value / 100) * taxPct)),
    totalPrice = computed(() => price.value + taxation.value),
    editingOrder = false;

async function fetchProducts() {
    const params = {
        sortBy: filters.sortBy,
    };

    if (filters.searchQuery) {
        params.title = `*${filters.searchQuery.trim()}*`;
    }

    try {
        const { data } = await axios.get(
            `https://23b81715610c7bf4.mokky.dev/products`,
            {
                params,
            },
        );
        state.products = data.map((obj) => {
            const newObj = { ...obj };

            if (localProducts.favorites) {
                const addedProduct = localProducts.favorites.find(
                    (localObj) => localObj.id === obj.id,
                );

                if (addedProduct) {
                    newObj.isFavorite = addedProduct.isFavorite;
                }
            }

            if (localProducts.cart) {
                const addedProduct = localProducts.cart.find(
                    (localObj) => localObj.id === obj.id,
                );

                if (addedProduct) {
                    newObj.inCart = addedProduct.inCart;
                }
            }

            return newObj;
        });
    } catch (error) {
        console.error('Error fetching data', error);
        toast.error('Не удалось получить данные');
    } finally {
        state.isLoading = false;
    }
}
function addToFavorites(product) {
    if (!product.isFavorite) {
        product.isFavorite = true;
        localProducts.favorites.push(product);
    } else {
        product.isFavorite = false;
        localProducts.favorites.splice(
            localProducts.favorites.indexOf(product),
            1,
        );
    }
    localStorage.setItem('favorites', JSON.stringify(localProducts.favorites));
}
function addToCart(product) {
    if (!product.inCart) {
        product.inCart = true;
        localProducts.cart.push(product);
    } else {
        product.inCart = false;
        localProducts.cart.splice(localProducts.cart.indexOf(product), 1);
    }
    localStorage.setItem('cart', JSON.stringify(localProducts.cart));
}
function openDrawer() {
    document.body.style.overflowY = 'hidden';
    isDrawerOpen.value = true;
}
function closeDrawer() {
    document.body.style.overflowY = 'auto';
    isDrawerOpen.value = false;
    orderState.orderId = null;
}
function createOrder() {
    orderState.isCreatingOrder = true;
    orderState.products = localProducts.cart;
    orderState.totalPrice = totalPrice.value;

    let orderId = null;

    if (localProducts.orders.length) {
        orderId = localProducts.orders[localProducts.orders.length - 1].id + 1;
    } else {
        orderId = localProducts.orders.length + 1;
    }

    toast.info('Оформлаем ваш заказ...');

    const order = {
        id: orderId,
        products: orderState.products,
        totalPrice: orderState.totalPrice,
    };

    setTimeout(async () => {
        try {
            localProducts.cart = [];

            await fetchProducts();

            orderState.orderId = order.id;
            localProducts.orders.push(order);
            localStorage.setItem(
                'orders',
                JSON.stringify(localProducts.orders),
            );
            localStorage.removeItem('cart');

            toast.success('Заказ был успешно создан');
        } catch (error) {
            console.error(error);
            localProducts.cart = JSON.parse(localStorage.getItem('cart'));
        } finally {
            orderState.isCreatingOrder = false;
        }
    }, 3000);
}
function deleteOrder(order) {
    localProducts.orders.splice(
        localProducts.orders.find((obj) => obj.id === order.id),
        1,
    );
    localStorage.setItem('orders', JSON.stringify(localProducts.orders));
    toast.success('Заказ был успешно удалён');
}

onMounted(async () => await fetchProducts());
watch(filters, async () => await fetchProducts());

provide('state', state);
provide('addToFavorites', addToFavorites);
provide('addToCart', addToCart);
provide('drawer', {
    localProducts,
    isDrawerOpen,
    openDrawer,
    closeDrawer,
    taxation,
    taxPct,
    totalPrice,
    createOrder,
    orderState,
});
provide('orders', localProducts.orders);
provide('deleteOrder', deleteOrder);
</script>

<template>
    <div class="min-h-screen bg-[#E7F6FF] p-4 sm:p-[85px]">
        <div class="bg-white rounded-[20px] min-h-screen container">
            <Drawer v-if="isDrawerOpen" />
            <Navbar @open-drawer="openDrawer" />
            <main class="relative z-0 px-10 sm:px-[60px]">
                <RouterView
                    :state="state"
                    :filters="filters"
                />
            </main>
        </div>
    </div>
</template>

<style scoped>
.input-focus:has(input:focus) {
    @apply border-gray-400;
}
.input-focus:has(input:focus) svg {
    @apply text-gray-400;
}
</style>
