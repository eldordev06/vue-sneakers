<script setup>
import { onMounted, reactive, watch, provide, ref, computed } from 'vue';
import axios from "axios";
import { useToast } from "vue-toastification";
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Drawer from './components/drawer/Drawer.vue';

const state = reactive({
        products: Array,
        isLoading: true,
    }),
    orderState = reactive({
        products: Array,
        totalPrice: Number,
        isCreatingOrder: false
    }),
    filters = reactive({
        searchQuery: '',
        sortBy: 'title',
    }),
    localProducts = reactive({
        favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
        orders: localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : []
    }),
    toast = useToast(),
    isDrawerOpen = ref(false),
    price = computed(() => localProducts.cart.reduce((acc, product) => acc + product.price, 0)),
    taxPct = 5,
    taxation = computed(() => Math.round(price.value / 100 * taxPct)),
    totalPrice = computed(() => price.value + taxation.value);

async function fetchProducts() {
    const params = {
        sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
        params.title = `*${filters.searchQuery.trim()}*`
    }

    try {
        const { data } = await axios.get(
            `https://23b81715610c7bf4.mokky.dev/products`, {
                params
            }
        );
        state.products = data.map(obj => {
            const newObj = { ...obj }

            if(localProducts.favorites) {
                const addedProduct = localProducts.favorites.find(localObj => localObj.id === obj.id);

                if(addedProduct) {
                    newObj.isFavorite = addedProduct.isFavorite;
                }
            }

            if(localProducts.cart) {
                const addedProduct = localProducts.cart.find(localObj => localObj.id === obj.id);

                if(addedProduct) {
                    newObj.inCart = addedProduct.inCart;
                }
            }

            return newObj;
        });
    } catch (error) {
        console.error('Error fetching data', error);
        toast.error('Не удалось получить данные')
    } finally {
        state.isLoading = false;
    }
}
async function addToFavorites(product) {
    if(!product.isFavorite) {
        product.isFavorite = true;
        localProducts.favorites.push(product);
    } else {
        product.isFavorite = false;
        localProducts.favorites.splice(localProducts.favorites.indexOf(product), 1);
    }
    localStorage.setItem('favorites', JSON.stringify(localProducts.favorites));
}
async function addToCart(product) {
    if(!product.inCart) {
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
}
function createOrder() {
    orderState.isCreatingOrder = true;
    orderState.products = localProducts.cart;
    orderState.totalPrice = totalPrice.value;

    toast.info('Оформлаем ваш заказ...');
    
    const order = {
        id: localProducts.orders.length,
        products: orderState.products,
        totalPrice: orderState.totalPrice
    }
    
    setTimeout(async () => {
        try {
            localProducts.orders.push(order);
            localProducts.cart = [];
            
            await fetchProducts();
            
            localStorage.setItem('orders', JSON.stringify(localProducts.orders));
            localStorage.removeItem('cart');

            toast.success('Заказ был успешно создан');
        } catch (error) {
           console.error(error);
        } finally {
            orderState.isCreatingOrder = false;
        }
    }, 3000);
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
    orderState
});
</script>

<template>
    <div class="min-h-screen bg-[#E7F6FF] p-4 sm:p-[85px]">
        <div class="bg-white rounded-[20px] min-h-screen container">
            <Drawer v-if="isDrawerOpen" />
            <Navbar @open-drawer="openDrawer" />
            <RouterView :filters="filters"
            />
        </div>
    </div>
</template>

<style scoped></style>
