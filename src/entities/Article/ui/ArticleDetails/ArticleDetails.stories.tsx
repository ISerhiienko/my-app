import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Article } from "entities/Article";
import { ArticleBlockType, ArticleType } from "entities/Article/model/types/article";
import { ArticleDetails } from "./ArticleDetails";

export default {
    title: "entities/ArticleDetails",
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

const article: Article = {
    id: "1",
    title: "Javascript news",
    subtitle: "Що нового в JS за 2022 год?",
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    views: 1022,
    createdAt: "03.09.2025",
    type: [ArticleType.IT],
    blocks: [
        {
            id: "1",
            type: ArticleBlockType.TEXT,
            title: "Заголовок цього блока",
            paragraphs: [
                "Програма, яку за традицією називають «Hello, world!», дуже проста. Вона виводить кудись фразу «Hello, world!» або іншу подібну, за допомогою якоїсь мови.",
                "JavaScript — це мова, програми на якій можна виконувати в різних середовищах. У нашому випадку йдеться про браузери та серверну платформу Node.js. Якщо ви досі не написали жодного рядка коду на JS і читаєте цей текст у браузері на настільному комп’ютері, це означає, що ви буквально на кілька секунд від своєї першої JavaScript-програми.",
                "Існують й інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм на JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Як правило, код оформлюють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати й безпосередньо в код сторінки. Все це робиться за допомогою тегу <script>. Коли браузер виявляє такий код, він виконує його. Детальніше про тег script можна дізнатися на сайті w3school.com. Зокрема, розглянемо приклад, що демонструє роботу з веб-сторінкою за допомогою JavaScript, наведений на цьому ресурсі. Цей приклад можна запустити й за допомогою цього ресурсу (шукайте кнопку Try it Yourself), але ми зробимо трохи інакше. А саме, створимо в якомусь текстовому редакторі (наприклад, у VS Code або в Notepad++) новий файл, який назвемо hello.html, і додамо до нього наступний код:",
            ],
        },
        {
            id: "4",
            type: ArticleBlockType.CODE,
            code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;",
        },
        {
            id: "5",
            type: ArticleBlockType.TEXT,
            title: "Заголовок этого блока",
            paragraphs: [
                "Програма, яку за традицією називають «Hello, world!», дуже проста. Вона виводить кудись фразу «Hello, world!» або іншу подібну, за допомогою якоїсь мови.",
                "Існують й інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм на JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Як правило, код оформлюють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати й безпосередньо в код сторінки. Все це робиться за допомогою тегу <script>. Коли браузер виявляє такий код, він виконує його. Детальніше про тег script можна дізнатися на сайті w3school.com. Зокрема, розглянемо приклад, що демонструє роботу з веб-сторінкою за допомогою JavaScript, наведений на цьому ресурсі. Цей приклад можна запустити й за допомогою цього ресурсу (шукайте кнопку Try it Yourself), але ми зробимо трохи інакше. А саме, створимо в якомусь текстовому редакторі (наприклад, у VS Code або в Notepad++) новий файл, який назвемо hello.html, і додамо до нього наступний код:",
            ],
        },
    ],
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
    },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: true,
    },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
    articleDetails: {
        error: "error",
    },
})];
