<script>

export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),

}
</script>

<template>
    <footer className="text-white text-center text-lg-start mt-4" style="background-color: #0a4275;">
        <!-- Grid container -->
        <div className="container p-4">
            <!--Grid row-->
            <div className="row">
                <!--Grid column-->
                <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
                    <h5 className="text-uppercase">ПЕРЕКЛАДИ ТА ЛЕГАЛІЗАЦІЯ</h5>

                    <p>
                        Знаходимо особистий підхід до кожного клієнта і гарантуємо якісний результат,
                        який змусить Вас повертатися до нас знову і знову.
                    </p>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Пошта</h5>

                    <ul className="list-unstyled mb-0">
                        <li>
                            <a href="#!" className="text-white">example1@hotmail.com</a>
                        </li>
                        <li>
                            <a href="#!" className="text-white">example2@hotmail.com</a>
                        </li>

                    </ul>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-0">Номера Телефонів</h5>

                    <ul className="list-unstyled mt-2">
                        <li>
                            +38 (097)-169-3737
                        </li>
                        <li>
                            +38 (087)-123-4212
                        </li>
                        <li>
                            +38 (087)-123-4211
                        </li>

                    </ul>
                </div>
                <!--Grid column-->
            </div>
            <!--Grid row-->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2023 Всі права захищені:
            <a className="text-white" href="../../../index.html">Бюро перекладів</a>
        </div>
        <!-- Copyright -->
    </footer>
</template>

<style>

</style>