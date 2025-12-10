# 页面建设中

> 此处显示 Markdown 渲染测试文章。**摘要**：本文旨在测试 Markdown 渲染器对各种格式的支持程度。包含**排版**、*代码*、~~删除线~~、数学公式以及复杂表格等。

---

## 1. 文本样式 (Typography)

### 1.1 强调与修饰
这是一段普通文本。这是**粗体 (Bold)**，这是*斜体 (Italic)*，这是***粗斜体 (Bold Italic)***。
有时候我们需要~~删除文本 (Strikethrough)~~。
如果支持 HTML 标签，这里应该是 <kbd>Ctrl</kbd> + <kbd>C</kbd> (Keyboard input)。
这是一个底部的脚注引用[^1]。

### 1.2 标题层级 (Heading Levels)
# H1 标题
## H2 标题
### H3 标题
#### H4 标题
##### H5 标题
###### H6 标题

---

## 2. 列表与引用 (Lists & Quotes)

### 2.1 无序与有序列表
* 一级列表项 A
* 一级列表项 B
    * 二级嵌套列表 A
    * 二级嵌套列表 B
        1.  三级有序嵌套 A
        2.  三级有序嵌套 B

### 2.2 任务列表 (Task Lists)
- [x] 已完成的任务 (Checked)
- [ ] 未完成的任务 (Unchecked)
- [ ] **关键任务**：必须在周五前完成

### 2.3 引用块 (Blockquotes)
> 这是一个一级引用。
>
> > 这是一个嵌套的二级引用。
> > *引用中甚至可以包含列表。*
>
> 回到一级引用。

---

## 3. 代码展示 (Code)

### 3.1 行内代码 (Inline Code)
请使用 `console.log('Hello World')` 来输出日志，或者检查变量 `user_id`。

### 3.2 代码块 (Fenced Code Blocks)

**Python:**
```python
def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
```

**JavaScript:**
```javascript
const greet = (name) => {
  return `Hello, ${name}!`;
};
// TODO: Refactor this function
console.log(greet('Developer'));
```

**JSON:**
```json
{
  "project": "Markdown Test",
  "version": 1.0,
  "features": ["highlighting", "rendering"]
}
```

---

## 4. 表格与对齐 (Tables)

| 左对齐标题 | 居中标题 | 右对齐标题 |
| :--- | :---: | ---: |
| 文本左对齐 | 文本居中 | 文本右对齐 |
| $100 | $200 | $300 |
| `code` | **Bold** | [链接](#) |

---

## 5. 数学公式与图表 (Math & Media)

### 5.1 数学公式 (LaTeX)
行内公式：质能方程是 $E=mc^2$。

块级公式 (Display Math)：
$$
f(x) = \int_{-\infty}^\infty \hat f(\xi)\,e^{2\pi i \xi x} \,d\xi
$$

### 5.2 链接与图片
这是一个[普通的链接](https://www.google.com)。
这是一个带有鼠标悬停标题的[链接](https://www.github.com "GitHub Homepage")。

**图片测试：**
![示例图片](https://placehold.co/300x200 "图片标题")

---

## 6. 特殊元素 (Extras)

### 6.1 分割线
上面和下面都有分割线。

***

### 6.2 HTML 混排 (Raw HTML)
<div style={{ textAlign: 'center' }}>
  <p>如果渲染器支持原生 HTML，这段文字应该是居中的。</p>
  <p style={{ color: 'red' }}>这段文字应该是红色的。</p>
</div>

### 6.3 自动链接
访问 https://www.example.com 或发送邮件至 test@example.com。

---

[^1]: 这是一个脚注的详细内容。通常渲染在文章的最底部。