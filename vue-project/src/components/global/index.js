import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Header_Service from "@/components/Service/Header_Service.vue";
import Main_Service from "@/components/Service/Main_Service.vue";
import Footer_Service from "@/components/Service/Footer_Service.vue";
import Header_Contact from "@/components/Contact/Header_Contact.vue";
import Main_Contact from "@/components/Contact/Main_Contact.vue";
import Footer_Contact from "@/components/Contact/Footer_Contact.vue";
import Header_Doc from "@/components/Documents/Header_Doc.vue";
import Main_Doc from "@/components/Documents/Main_Doc.vue";



const components = [
    {name: Header, component: Header},
    {name: Footer, component: Footer},
    {name: Main, component: Main},
    {name: Header_Service, component: Header_Service},
    {name: Main_Service, component: Main_Service},
    {name: Footer_Service, component: Footer_Service},
    {name: Header_Contact, component: Header_Contact},
    {name: Main_Contact, component: Main_Contact},
    {name: Footer_Contact, component: Footer_Contact},
    {name: Header_Doc, component: Header_Doc},
    {name: Main_Doc, component: Main_Doc}
];


export default{
    install(app){
        components.forEach((component) => {
            app.component(component.name, component.component);
        })
    }
}