<script setup>
import router from "../../router/index.js";

const openICP = () => {
    window.open('https://beian.miit.gov.cn/#/Integrated/index', '_blank');
}
</script>

<template>
    <footer class="footer footer-text">
        <div class="footer-side">
            <div @click="window.location.href = '/privacy-policy'" class="footer-item">隐私政策</div>
            <div class="vertical-divider"></div>
            <div @click="router.push('/terms-and-conditions')" class="footer-item">条款与条件</div>
            <div class="vertical-divider"></div>
            <div @click="openICP" class="footer-item">苏ICP备 2023002963号</div>
        </div>
        <div class="footer-side">
            <div class="copyright">版权所有 © 2024 Amos Tang. 保留所有权利。</div>
        </div>
    </footer>
</template>

<style scoped>
.copyright {
    margin: 0 10px 0 10px;
    transition: all 0.3s ease;
}

.footer-side {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
}

.footer {
    display: flex;
    flex-direction: row;
    background: #F2F2F7;
    padding: 30px 0 30px 0;
}

.footer-text {
    font-size: 11px;
    color: rgba(0, 0, 0, .56);
    line-height: 2;
}

.footer-item {
    cursor: pointer;
    margin: 0 10px 0 10px;
    transition: all 0.3s ease;
}

.footer-item:hover {
    color: rgba(0, 0, 0, 0.9);
}

.footer-item:active {
    color: rgba(0, 0, 0, 0.8);
}

.vertical-divider {
    width: 1px;
    height: 15px;
    background-color: rgba(0, 0, 0, 0.4);
}

/* 小屏幕 (手机横屏, ≥ 576px) */
@media (max-width: 768px) {
    .footer {
        flex-direction: column;
    }
}

</style>