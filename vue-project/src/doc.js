import { createApp, } from 'vue'
import App from './Document.vue'
import global from './components/global/index'
import VueCookies from 'vue-cookies'
import { createI18n } from 'vue-i18n';


import 'bootstrap/dist/css/bootstrap.min.css'
// import './assets/main.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'






const app = createApp(App);
const i18n = createI18n({
    locale: 'UA', // Set the default locale to Spanish

    messages: {
        ES: {
            // Header
            NameofCompany: 'Empresa',
            OurService: 'Nuestros servicios',
            Contact: 'Contacto',
            Document: 'Documento',
            LegalTranslateH1: 'TRADUCCIONES Y LEGALIZACIONES',
            LegalTranslateH2: 'LEGALIZACIÓN DE DOCUMENTOS PARA EL CONSULADO DE ESPAÑA Y LOS PAÍSES SCHENGEN',
            LegalTranslateH4: 'Documentos, apostilla, traducción para ciudadanos de Ucrania',
            //
            //
            Name: 'Título.',
            Describe: 'Descripción.',
            Info: 'Información.',
            //Main
            DocTitle1: 'Extracto',
            DocDescribe: 'EXTRACTO del sistema de información y análisis "Contabilización de la información sobre ' +
                'el sometimiento de una persona a responsabilidad penal y antecedentes penales"',
            DocInfo: 'Hoy en día, se expide en lugar de un "certificado de no antecedentes penales" y es un documento oficial que confirma que una persona no tiene antecedentes penales. También confirma ' +
                'que la persona no figura en la lista de personas buscadas. En Ucrania, el "extracto" sobre la ausencia de antecedentes penales lo expide el Departamento de Información y Apoyo Analítico del Ministerio del Interior".',
            DocTitle2: 'Certificado de no antecedentes penales',
            DocDescribe2: 'El certificado de ausencia de antecedentes penales es un documento que certifica que una persona no ha sido objeto de responsabilidad penal y no es buscada en Ucrania.',
            DocInfo2: 'El certificado se expide en un formulario especial, que indica su serie y número. El documento se imprime en papel normal A5 y tiene dibujos y elementos de seguridad especiales que hacen imposible falsificarlo.',
            DocTitle3: 'Certificado de',
            DocDescribeC1:'Certificado de nacimiento - un certificado de registro estatal del acto del estado civil - el hecho del nacimiento del niño',
            DocDescribeC2:'Certificado de matrimonio es un documento oficial que confirma que dos personas están casadas',
            DocDescribeC3:'Certificado de divorcio es un documento oficial expedido por la oficina del registro civil para confirmar el hecho del divorcio entre los cónyuges.',
            DocDescribeC4:'El certificado de defunción es un documento expedido como confirmación del hecho del fallecimiento de un ciudadano durante el registro estatal en la oficina del registro civil.',
            DocTitle4: 'Documentos adicionales:',
            DocDescribeD1: 'Extracto del registro estatal sobre el cambio de apellido',
            DocDescribeD2: 'Extracto del registro estatal sobre la presencia/ausencia de bienes inmuebles',
            DocDescribeD3: 'Copias de resoluciones judiciales en Ucrania',
            DocDescribeD4: 'Extracto del registro estatal sobre el cambio de apellido',
            DocDescribeD5: 'Enviamos consultas a las empresas para confirmar la experiencia laboral',
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
            LegalTranslateH1: 'ПЕРЕКЛАДИ ТА ЛЕГАЛІЗАЦІЯ',
            LegalTranslateH2: 'ЛЕГАЛІЗАЦІЯ ДОКУМЕНТІВ ДЛЯ КОНСУЛЬСТВА ІСПАНІЇ ТА КРАЇН ШЕНГЕНСЬКОЇ ЗОНИ',
            LegalTranslateH4: 'Документи, апостиль, переклад для громадян України',
            //
            //
            Name: 'Назва ',
            Describe: 'Опис ',
            Info: 'Інформація ',
            // Main
            DocTitle1: 'Витяг',
            DocDescribe: 'ВИТЯГ з інформаційно-аналітичної системи' +
                ' “Облік інформації про притягнення особи до кримінальної відповідальності та наявності судимостей”',
            DocInfo: 'На сьогоднішній день видається замість “довідки про несудимість” і є офіційним документом, який підтверджує відсутності судимості у фізичної особи. А також факт того, що фізична особа не перебуває у розшуку. В Україні “витяг” про відсутність судимості видає Управління інформаційно-аналітичного забезпечення МВС.”',
            DocTitle2: 'Довідка про відсутність судимості',
            DocDescribe2: 'Довідка про відсутність судимості – це документ, який свідчить про те, що особа не залучалося до кримінальної відповідальності і не перебуває в розшуку на території України.',
            DocInfo2: '"Довідка оформляється на спеціальному бланку, де вказується його серія та номер. Документ друкується на звичайному папері формату А5 і має спеціальні форми захисту і малюнки, які унеможливлюють підробку документа."',
            DocTitle3: 'Свідоцтво про',
            DocDescribeC1:'Свідоцтво про народження – свідоцтво про державну реєстрацію акту цивільного стану – факту народження дитини',
            DocDescribeC2:'Свідоцтво про укладення шлюбу – офіційний документ, який підтверджує, що двоє людей перебувають у шлюбі.',
            DocDescribeC3:'Свідоцтво про розлучення – офіційний документ, що видається органами реєстрації актів цивільного стану (РАЦС) на підтвердження факту розірвання шлюбу між подружжям.',
            DocDescribeC4:'Свідоцтво про смерть – це документ, що видається в якості підтвердження факту смерті громадянина при державній реєстрації в органах актів цивільного стану.',
            DocTitle4: 'Додатковi документи:',
            DocDescribeD1: 'Витяг з державного реєстру про зміну прізвища',
            DocDescribeD2: 'Виписка з державного реєстру про наявність / відсутність нерухомості',
            DocDescribeD3: 'Копії рішень судів України',
            DocDescribeD4: 'Витяг з державного реєстру про зміну прізвища',
            DocDescribeD5: 'Подаємо запити на підприємства для підтвердження стажу',
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
app.use(VueCookies)


app.use(global);
app.use(i18n)

app.mount('#app')
