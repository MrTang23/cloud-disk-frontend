<template>
    <header class="header">
        <div class="title">Amos Cloud</div>
    </header>
    <main class="main">
        <div class="privacy-policy">
            <h1>隐私政策</h1>
            <p><strong>生效日期：</strong>2024年10月31日</p>

            <p>
                Amos
                Cloud（“本服务”或“我们”）非常重视您的隐私，并承诺保护您的个人信息。本隐私政策旨在帮助您了解我们如何收集、使用、存储和保护您在使用本服务时提供的个人信息。请您仔细阅读以下条款，以便充分了解我们关于您个人信息的处理方式。</p>

            <h2>1. 信息收集</h2>
            <ul>
                <li><strong>账户信息：</strong>注册账户时，您需提供用户名、电子邮件地址、密码等信息。</li>
                <li><strong>使用数据：</strong>当您使用本服务时，我们会自动收集您与服务互动的相关信息，包括 IP
                    地址、浏览器类型、访问时间和页面访问记录等。
                </li>
                <li><strong>文件数据：</strong>您上传到网盘的文件和文件夹将会存储在我们的服务器上，以便您访问、分享和管理这些文件。
                </li>
            </ul>

            <h2>2. 信息使用</h2>
            <p>我们将收集的信息用于以下目的：</p>
            <ul>
                <li><strong>提供和改进服务：</strong>使用您的账户信息为您创建和管理账户，提供网盘的核心功能，并改进用户体验。
                </li>
                <li><strong>身份验证：</strong>通过用户提供的账户信息验证用户身份，确保账户安全。</li>
                <li><strong>安全保障：</strong>分析使用数据，识别和防范潜在的欺诈和安全风险。</li>
                <li><strong>通信：</strong>向您发送关于账户活动、安全更新、重要通知或与服务相关的其他信息。</li>
            </ul>

            <h2>3. 信息共享</h2>
            <p>
                我们非常重视您的隐私保护，承诺不会在未获得您的明确授权下，将您的个人信息泄露或共享给任何第三方。在符合法律法规的前提下，我们确保您的数据严格保密，未经您的同意绝不会用于任何未经授权的用途。</p>

            <h2>4. 数据存储与安全</h2>
            <ul>
                <li><strong>数据存储：</strong>您的个人信息和文件数据将会被存储在安全的服务器中，我们将采取合理的技术措施来确保数据的安全。
                </li>
                <li><strong>数据保护措施：</strong>我们采用加密、访问控制等手段来保护您的信息，避免未经授权的访问、修改或泄露。
                </li>
            </ul>

            <h2>5. 数据保留</h2>
            <ul>
                <li><strong>账户数据：</strong>在您使用服务期间，我们会保留您的账户信息。若您终止使用服务，我们将根据相关法律和法规要求的期限保留您的信息。
                </li>
                <li><strong>文件数据：</strong>在您删除上传的文件或清理回收站文件后，相关文件数据将会从我们的服务器中永久删除。
                </li>
            </ul>

            <h2>6. 您的权利</h2>
            <p>
                根据适用的隐私法律法规，您有权访问、修改或删除您的个人信息。您可以随时登录账户进行更新，或联系支持团队获取帮助。</p>

            <h2>7. 隐私政策的更新</h2>
            <p>
                我们可能会不时更新隐私政策。更新后的隐私政策将在本页面发布，且生效日期将会更新。建议您定期查看本隐私政策，以便了解最新的个人信息处理方式。</p>

            <h2>8. 联系我们</h2>
            <p>如果您对本隐私政策有任何疑问或需要进一步的信息，请通过以下方式联系我们：</p>
            <p><strong>电子邮件地址：amos_cloud@yeah.net</strong></p>
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