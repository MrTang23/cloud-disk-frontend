<template>
    <header class="header">
        <div class="title">Amos Cloud</div>
    </header>
    <main class="main">
        <div class="privacy-policy">
            <h1>条款与条件</h1>
            <p>
                欢迎使用 Amos Cloud
                云存储服务。为保障您的权益以及维护平台秩序，请在使用服务之前仔细阅读以下条款与条件。继续使用本服务即视为您同意本条款。</p>

            <h2>1. 服务概述</h2>
            <p>
                本服务旨在为用户提供安全、可靠的在线文件存储、管理和分享功能。用户可以在平台上存储个人或业务文件。禁止用于任何违法、欺诈、或侵犯他人权利的活动。</p>

            <h2>2. 用户资格</h2>
            <p>2.1 您注册服务时所提供的个人信息必须真实、准确和完整。</p>
            <p>2.2 如您代表公司或其他法律实体注册和使用本服务，您需保证拥有该实体的合法授权。</p>

            <h2>3. 用户账户及安全</h2>
            <p>3.1 您对自己的账户及密码的保密性负有全部责任。任何通过您的账户进行的活动均视为您本人或经授权的行为。</p>
            <p>3.2 虽然我们尽力确保数据的安全性，但不对因技术问题或不可抗力事件造成的数据丢失负责。</p>
            <p>3.3 我们建议用户启用多因素认证，以提高账户的安全性。</p>

            <h2>4. 用户行为及限制</h2>
            <p>4.1 您承诺遵守所有适用的法律法规以及本条款的规定，不得使用本服务从事任何违法活动。</p>
            <p>4.2 您不得上传含有色情、暴力、诽谤、仇恨、恶意代码等不良内容的文件。</p>
            <p>4.3 您不得滥用本服务，包括但不限于频繁操作造成的系统负担。</p>
            <p>4.4 本平台有权在您违反本条款时中止或终止您的账户，并根据情况采取进一步的法律措施。</p>

            <h2>5. 用户内容及知识产权</h2>
            <p>5.1 用户通过本服务上传、发布或共享的内容归用户所有。平台在为您提供服务时可合理地使用您的内容。</p>
            <p>5.2
                您应确保您上传的内容不侵犯任何第三方的知识产权或其他合法权利。如因您的内容侵权导致本平台遭受索赔或损失，您需承担相关责任。</p>
            <p>5.3 您有责任定期备份数据，我们不对任何数据的丢失或损坏承担责任。</p>

            <h2>6. 隐私保护</h2>
            <p>我们承诺保护您的隐私并遵守适用的数据保护法律。有关数据的收集、使用和保护，请参阅我们的《隐私政策》。</p>

            <h2>7. 服务的变更与终止</h2>
            <p>7.1 本平台保留在任何时间对服务进行修改、暂停或终止的权利，并尽可能提前通知用户。</p>
            <p>7.2 平台可能会自动更新服务的部分功能或内容，用户同意接受此类更新。</p>
            <p>7.3 平台有权在用户违反本条款时终止用户的访问权，并删除其上传的全部内容。</p>

            <h2>8. 免责声明</h2>
            <p>8.1 我们按“现状”及“可用性”提供本服务，但不保证服务没有中断或没有缺陷。</p>
            <p>8.2 在法律允许的范围内，平台不对因不可抗力、网络问题或系统错误造成的服务中断、数据丢失负责。</p>

            <h2>9. 条款的修改</h2>
            <p>我们保留随时更新本条款的权利，并通过平台公告或电子邮件通知用户。请定期查阅最新版本的条款。</p>

            <h2>10. 争议解决</h2>
            <p>10.1 如因本服务引发任何争议，应首先通过协商解决。</p>
            <p>10.2 若协商未果，双方同意将争议提交至本平台注册地有管辖权的法院诉讼解决。</p>

            <h2>11. 联系我们</h2>
            <p>如您对本条款有任何疑问或需进一步协助，请通过以下联系方式与我们联系：</p>
            <p><strong>电子邮件地址：amos_cloud@yeah.net</strong></p>

            <p>感谢您选择 Amos Cloud 云存储服务。</p>
        </div>
    </main>
    <footer>
        <Footer></Footer>
    </footer>
</template>

<script setup>
import Footer from "./components/Footer.vue";
</script>

<style scoped>
.main {
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    flex: 1;
    box-sizing: border-box;
}

.header {
    position: fixed;
    width: 100vw;
    backdrop-filter: blur(10px);
    opacity: 1;
    display: flex;
    height: 44px;
    padding-left: 10px;
    align-items: center;
}

.title {
    line-height: 1.5;
    font-size: 20px;
    font-weight: 700;
}

.privacy-policy {
    padding: 20px 10%;
    line-height: 1.6;
    max-width: 1000px;
    margin: 44px auto 0 auto;
}

.privacy-policy h1 {
    font-size: 2em;
    margin-bottom: 10px;
    text-align: center;
}

.privacy-policy h2 {
    font-size: 1.4em;
    margin-top: 20px;
    color: #333;
}

.privacy-policy p, .privacy-policy li {
    margin-bottom: 10px;
    color: #555;
}

@media (prefers-color-scheme: dark) {
    .privacy-policy h1 {
        color: #ffffff;
    }

    .privacy-policy h2 {
        color: #cccccc;
    }

    .privacy-policy p, .privacy-policy li {
        color: #b3b3b3;
    }
}

@media (max-width: 768px) {
    .privacy-policy {
        padding: 15px 5%;
    }

    .privacy-policy h1 {
        font-size: 1.8em;
    }

    .privacy-policy h2 {
        font-size: 1.2em;
    }

    .privacy-policy p, .privacy-policy li {
        font-size: 0.95em;
    }
}

@media (max-width: 480px) {
    .privacy-policy {
        padding: 10px 5%;
    }

    .privacy-policy h1 {
        font-size: 1.6em;
    }

    .privacy-policy h2 {
        font-size: 1.1em;
    }

    .privacy-policy p, .privacy-policy li {
        font-size: 0.9em;
    }
}

/* 大屏幕设置 */
@media (min-width: 1440px) {
    .privacy-policy {
        padding: 40px 10%;
    }

    .privacy-policy h1 {
        font-size: 2.2em; /* 保持适度增加的字体大小 */
    }

    .privacy-policy h2 {
        font-size: 1.4em; /* 较小的标题字体增加 */
    }

    .privacy-policy p, .privacy-policy li {
        font-size: 1em; /* 保持常规文本大小 */
    }
}
</style>