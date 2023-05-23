import { createApp, } from 'vue'
import App from './components/Contact.vue'
import global from './components/global/index'
import VueCookies from 'vue-cookies'
import { createI18n } from 'vue-i18n';


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const i18n = createI18n({
    locale: 'UA', // Set the default locale to Spanish

    messages: {
        ES: {
            // Header
            NameofCompany: 'Empresa',
            OurService: 'Nuestros servicios',
            Contact: 'Contacto',
            Document: 'Documento',

            //

            //Main
            Tabs1: 'Rellenar el formulario',
            Tabs2: 'Mapa',
            Tabs3: 'Contacto',
            //Contact
            FormTitle: 'Rellenar el formulario',
            Name: 'Nombre',
            Surname: 'Apellidos',
            Phones: 'Su número de teléfono',
            Email: 'Email',
            Message: 'Mensaje',

            //
            //Finish
            FooterText: 'TRADUCCIONES Y LEGALIZACIONES',
            FooterCardText: 'Encontramos un enfoque personal para cada cliente y garantizamos un resultado de alta calidad que le hará volver a nosotros una y otra vez.',
            Mail: 'POST',
            Phone: 'Números de teléfono',
            AText: '© 2023 Todos los derechos reservados:',
            //

        },
        UA: {
            // Header
            NameofCompany: 'Назва Компанії',
            OurService: 'Наші послуги',
            Contact: 'Контакт',
            Document: 'Документи',

            //
            // Main
            Tabs1: 'Форма заповнення',
            Tabs2: 'Мапа',
            Tabs3: 'Контакт',
            FormTitle: 'Контакт з нами',
            Name: 'Ім\'я',
            Surname: 'Прізвище',
            Phones: 'Ваш телефон',
            Email: 'Пошта',
            Message: 'Повідомлення',

            //

            //Footer
            FooterText: 'ПЕРЕКЛАДИ ТА ЛЕГАЛІЗАЦІЯS',
            FooterCardText: 'Знаходимо особистий підхід до кожного клієнта і гарантуємо якісний результат, який змусить Вас повертатися до нас знову і знову.',
            Mail: 'ПОШТА',
            Phone: 'Номера Телефонів',
            AText: '© 2023 Всі права захищені:',
            //

        }
    }
});






const app = createApp(App);
app.use(VueCookies)


app.use(global);
app.use(i18n);
app.mount('#app')
