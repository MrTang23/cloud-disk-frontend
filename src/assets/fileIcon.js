const fileTypeMap = [
    // 文档类型
    {label: 'PDF 文档', icon: 'fa-file-pdf', color: '#D9534F'},
    {label: 'Word 文档', icon: 'fa-file-word', color: '#2B579A'},
    {label: 'Excel 表格', icon: 'fa-file-excel', color: '#217346'},
    {label: 'PowerPoint 演示文稿', icon: 'fa-file-powerpoint', color: '#D24726'},
    {label: '文本文件', icon: 'fa-file-alt', color: '#6C757D'},
    {label: 'Markdown 文件', icon: 'fa-file-code', color: '#6C757D'},
    {label: 'Pages 文稿', icon: 'fa-file-alt', color: '#FF9500'},
    {label: 'Numbers 表格', icon: 'fa-file-alt', color: '#34C759'},
    {label: 'Keynote 演示文稿', icon: 'fa-file-alt', color: '#1E90FF'},
    {label: 'RTF 文档', icon: 'fa-file-alt', color: '#6C757D'},
    {label: 'OpenDocument 文档', icon: 'fa-file-alt', color: '#6C757D'},

    // 图片类型
    {label: 'JPEG 图像', icon: 'fa-file-image', color: '#4A9012'},
    {label: 'JPEG 图像', icon: 'fa-file-image', color: '#4A9012'},
    {label: 'PNG 图像', icon: 'fa-file-image', color: '#4A9012'},
    {label: 'GIF 图像', icon: 'fa-file-image', color: '#4A9012'},
    {label: 'BMP 图像', icon: 'fa-file-image', color: '#4A9012'},
    {label: 'SVG 图像', icon: 'fa-file-image', color: '#4A9012'},
    {label: 'WebP 图像', icon: 'fa-file-image', color: '#4A9012'},
    {label: 'TIFF 图像', icon: 'fa-file-image', color: '#4A9012'},
    {label: 'ICO 图标', icon: 'fa-file-image', color: '#4A9012'},

    // 音频类型
    {label: 'MP3 音频', icon: 'fa-file-audio', color: '#FF9500'},
    {label: 'WAV 音频', icon: 'fa-file-audio', color: '#FF9500'},
    {label: 'AAC 音频', icon: 'fa-file-audio', color: '#FF9500'},
    {label: 'FLAC 音频', icon: 'fa-file-audio', color: '#FF9500'},
    {label: 'OGG 音频', icon: 'fa-file-audio', color: '#FF9500'},
    {label: 'M4A 音频', icon: 'fa-file-audio', color: '#FF9500'},

    // 视频类型
    {label: 'MP4 视频', icon: 'fa-file-video', color: '#D9534F'},
    {label: 'AVI 视频', icon: 'fa-file-video', color: '#D9534F'},
    {label: 'MOV 视频', icon: 'fa-file-video', color: '#D9534F'},
    {label: 'WMV 视频', icon: 'fa-file-video', color: '#D9534F'},
    {label: 'FLV 视频', icon: 'fa-file-video', color: '#D9534F'},
    {label: 'MKV 视频', icon: 'fa-file-video', color: '#D9534F'},
    {label: 'WebM 视频', icon: 'fa-file-video', color: '#D9534F'},

    // 压缩类型
    {label: 'ZIP 压缩文件', icon: 'fa-file-archive', color: '#FF9500'},
    {label: 'RAR 压缩文件', icon: 'fa-file-archive', color: '#FF9500'},
    {label: '7Z 压缩文件', icon: 'fa-file-archive', color: '#FF9500'},
    {label: 'TAR 压缩文件', icon: 'fa-file-archive', color: '#FF9500'},
    {label: 'GZIP 压缩文件', icon: 'fa-file-archive', color: '#FF9500'},
    {label: 'BZ2 压缩文件', icon: 'fa-file-archive', color: '#FF9500'},

    // 其他常见类型
    {label: '可执行文件', icon: 'fa-file', color: '#6C757D'},
    {label: 'Android 应用程序', icon: 'fa-file', color: '#3DDC84'},
    {label: 'ISO 镜像文件', icon: 'fa-file', color: '#6C757D'},
    {label: 'DMG 镜像文件', icon: 'fa-file', color: '#6C757D'},

    {label: '文件夹', icon: 'folder-closed', color: 'hsl(210, 100%, 45%)'}
];

// 将 fileTypeMap 转换成对象，以 label 作为键
const fileTypeMapObject = fileTypeMap.reduce((acc, item) => {
    acc[item.label] = item;
    return acc;
}, {});

// 查找函数
export function getFileTypeByLabel(label) {
    return fileTypeMapObject[label] || null; // 如果没有找到，返回 null
}