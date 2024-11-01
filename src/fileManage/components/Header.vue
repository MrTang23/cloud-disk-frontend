<script setup>

</script>

<template>
    <div class="header">
        <div class="header-left">
            <div>AmosCloud</div><div class="title">云盘</div>
        </div>

    </div>
</template>

<style scoped>
.header {
    display: flex;
    font-size: 19px;
    flex-direction: row;
    background: #F5F5F7;
    height: 44px;
    border-bottom: 1px solid #e6e6ea;
    box-sizing: border-box;
    align-items: center;
    padding-left: 16px;
}
.header-left{
    font-weight: 600;
    display: flex;
    flex-direction: row;
}
.title{
    color: rgb(0, 113, 235);
    margin-left: 7px;
}

@media (prefers-color-scheme: dark) {
    .header{
        background: #323236;
        border-bottom: 1px solid transparent;
    }
}

</style>