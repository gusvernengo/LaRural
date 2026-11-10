// Enable JS-scoped reveal animations
document.documentElement.classList.add('js');

const PAGE_VIEWS = {
    "encuentro.html":  "\u003c!-- HERO ENCUENTRO --\u003e\r\n    \u003csection class=\"hero-encuentro\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003cdiv class=\"hero-institucion-content\"\u003e\r\n          \u003ch1 class=\"hero-title\"\u003e\r\n            El campo\u003cbr /\u003e\r\n            unido es\u003cbr /\u003e\r\n            \u003cspan class=\"text-lime\"\u003emás fuerte\u003c/span\u003e\r\n          \u003c/h1\u003e\r\n          \u003cp class=\"hero-lead-white\"\u003eUn encuentro para escucharnos\u003c/p\u003e\r\n          \u003cp class=\"hero-desc\"\u003e\r\n            Un espacio para conocer el trabajo institucional, compartir inquietudes y descubrir cómo participar.\r\n          \u003c/p\u003e\r\n        \u003c/div\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e\r\n\r\n    \u003c!-- 3 COLUMNS (01, 02, 03) --\u003e\r\n    \u003csection class=\"section-encuentro-highlights\" id=\"ejes-encuentro\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003cdiv class=\"encuentro-cols\" data-stagger=\"100\"\u003e\r\n          \u003cdiv data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"role-number\"\u003e01\u003c/span\u003e\r\n            \u003ch2 class=\"encuentro-col-title\"\u003eCharlas e intercambio\u003c/h2\u003e\r\n            \u003cp class=\"encuentro-col-text\"\u003e\r\n              Un espacio para compartir experiencias, plantear inquietudes y escuchar miradas de la región.\r\n            \u003c/p\u003e\r\n          \u003c/div\u003e\r\n\r\n          \u003cdiv data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"role-number\"\u003e02\u003c/span\u003e\r\n            \u003ch2 class=\"encuentro-col-title\"\u003eServicios y beneficios\u003c/h2\u003e\r\n            \u003cp class=\"encuentro-col-text\"\u003e\r\n              Conocé el trabajo institucional y los recursos disponibles para los socios.\r\n            \u003c/p\u003e\r\n          \u003c/div\u003e\r\n\r\n          \u003cdiv data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"role-number\"\u003e03\u003c/span\u003e\r\n            \u003ch2 class=\"encuentro-col-title\"\u003eOrientación para asociarte\u003c/h2\u003e\r\n            \u003cp class=\"encuentro-col-text\"\u003e\r\n              Informate sobre los pasos y compartí tus consultas con nuestro equipo.\r\n            \u003c/p\u003e\r\n          \u003c/div\u003e\r\n        \u003c/div\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e\r\n\r\n    \u003c!-- EVENT INFO STRIP (DATE, TIME, LOCATION) --\u003e\r\n    \u003csection class=\"section-event-strip\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003cdiv class=\"event-strip-box\" data-reveal=\"up\" data-stagger=\"100\"\u003e\r\n          \u003c!-- Calendar --\u003e\r\n          \u003cdiv class=\"event-strip-item\" data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"event-strip-icon\" aria-hidden=\"true\"\u003e\r\n              \u003csvg width=\"46\" height=\"46\" viewBox=\"0 0 48 48\" fill=\"none\"\u003e\r\n                \u003crect x=\"6\" y=\"10\" width=\"36\" height=\"32\" rx=\"5\" stroke=\"#465425\" stroke-width=\"3\" fill=\"#ffffff\" /\u003e\r\n                \u003cpath d=\"M6 18H42V15C42 12.2386 39.7614 10 37 10H11C8.23858 10 6 12.2386 6 15V18Z\" fill=\"#465425\" /\u003e\r\n                \u003cline x1=\"15\" y1=\"6\" x2=\"15\" y2=\"12\" stroke=\"#465425\" stroke-width=\"3.2\" stroke-linecap=\"round\" /\u003e\r\n                \u003cline x1=\"33\" y1=\"6\" x2=\"33\" y2=\"12\" stroke=\"#465425\" stroke-width=\"3.2\" stroke-linecap=\"round\" /\u003e\r\n                \u003cg fill=\"#465425\"\u003e\r\n                  \u003crect x=\"12\" y=\"23\" width=\"4\" height=\"4\" rx=\"1\" /\u003e\r\n                  \u003crect x=\"19\" y=\"23\" width=\"4\" height=\"4\" rx=\"1\" /\u003e\r\n                  \u003crect x=\"26\" y=\"23\" width=\"4\" height=\"4\" rx=\"1\" /\u003e\r\n                  \u003crect x=\"33\" y=\"23\" width=\"4\" height=\"4\" rx=\"1\" /\u003e\r\n                  \u003crect x=\"12\" y=\"29\" width=\"4\" height=\"4\" rx=\"1\" /\u003e\r\n                  \u003crect x=\"19\" y=\"29\" width=\"4\" height=\"4\" rx=\"1\" /\u003e\r\n                  \u003crect x=\"26\" y=\"29\" width=\"4\" height=\"4\" rx=\"1\" /\u003e\r\n                  \u003crect x=\"33\" y=\"29\" width=\"4\" height=\"4\" rx=\"1\" /\u003e\r\n                  \u003crect x=\"12\" y=\"35\" width=\"4\" height=\"4\" rx=\"1\" /\u003e\r\n                  \u003crect x=\"19\" y=\"35\" width=\"4\" height=\"4\" rx=\"1\" /\u003e\r\n                  \u003crect x=\"26\" y=\"35\" width=\"4\" height=\"4\" rx=\"1\" /\u003e\r\n                \u003c/g\u003e\r\n              \u003c/svg\u003e\r\n            \u003c/span\u003e\r\n            \u003cspan class=\"event-strip-text\"\u003e\r\n              5 de septiembre\u003cbr /\u003e\r\n              del 2027\r\n            \u003c/span\u003e\r\n          \u003c/div\u003e\r\n\r\n          \u003c!-- Clock --\u003e\r\n          \u003cdiv class=\"event-strip-item\" data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"event-strip-icon\" aria-hidden=\"true\"\u003e\r\n              \u003csvg width=\"44\" height=\"44\" viewBox=\"0 0 48 48\" fill=\"none\"\u003e\r\n                \u003ccircle cx=\"24\" cy=\"24\" r=\"20\" fill=\"#465425\" /\u003e\r\n                \u003cpolyline points=\"24,12 24,24 31,30\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" /\u003e\r\n              \u003c/svg\u003e\r\n            \u003c/span\u003e\r\n            \u003cspan class=\"event-strip-text\"\u003e10:00 hs\u003c/span\u003e\r\n          \u003c/div\u003e\r\n\r\n          \u003c!-- Location Pin --\u003e\r\n          \u003cdiv class=\"event-strip-item\" data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"event-strip-icon\" aria-hidden=\"true\"\u003e\r\n              \u003csvg width=\"42\" height=\"44\" viewBox=\"0 0 44 48\" fill=\"none\"\u003e\r\n                \u003cpath d=\"M22 4C13.1634 4 6 11.1634 6 20C6 31.25 22 44 22 44C22 44 38 31.25 38 20C38 11.1634 30.8366 4 22 4Z\" fill=\"#465425\" /\u003e\r\n                \u003ccircle cx=\"22\" cy=\"19\" r=\"6.5\" fill=\"#ffffff\" /\u003e\r\n              \u003c/svg\u003e\r\n            \u003c/span\u003e\r\n            \u003cspan class=\"event-strip-text\"\u003e\r\n              Predio Sociedad\u003cbr /\u003e\r\n              Rural de Goya\r\n            \u003c/span\u003e\r\n          \u003c/div\u003e\r\n        \u003c/div\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e\r\n\r\n    \u003c!-- ACTIVIDADES / UNA AGENDA PARA SEGUIR CONSTRUYENDO JUNTOS --\u003e\r\n    \u003csection class=\"section-agenda\" id=\"actividades\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003cdiv class=\"agenda-header\"\u003e\r\n          \u003cspan class=\"section-eyebrow\" data-reveal=\"up\"\u003eActividades\u003c/span\u003e\r\n          \u003ch2 class=\"section-heading section-heading--dark\" data-reveal=\"up\" data-reveal-delay=\"100\"\u003e\r\n            Una agenda para\u003cbr /\u003e\r\n            seguir construyendo juntos.\r\n          \u003c/h2\u003e\r\n        \u003c/div\u003e\r\n\r\n        \u003cdiv class=\"agenda-grid\"\u003e\r\n          \u003cdiv class=\"agenda-list\" data-stagger=\"100\" data-stagger-start=\"300\"\u003e\r\n            \u003cdiv class=\"agenda-item active\" data-index=\"0\" data-img=\"assets/img/encuentro-agenda.jpg\" data-alt=\"Presentación institucional en la Sociedad Rural de Goya\" data-reveal=\"up\"\u003e\r\n              \u003cspan class=\"agenda-icon-circle\" aria-hidden=\"true\"\u003e\r\n                \u003c!-- Podium / Speaker Icon --\u003e\r\n                \u003csvg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"#465425\"\u003e\r\n                  \u003ccircle cx=\"14\" cy=\"7\" r=\"3.5\" /\u003e\r\n                  \u003cpath d=\"M9 14C9 12.3431 10.3431 11 12 11H16C17.6569 11 19 12.3431 19 14V16H9V14Z\" /\u003e\r\n                  \u003cpath d=\"M5 17H23V20H21L20 24H8L7 20H5V17Z\" /\u003e\r\n                \u003c/svg\u003e\r\n              \u003c/span\u003e\r\n              \u003cdiv\u003e\r\n                \u003ch3 class=\"agenda-item-title\"\u003ePresentación institucional\u003c/h3\u003e\r\n                \u003cp class=\"agenda-item-desc\"\u003e\r\n                  Conocé los principales ejes de trabajo, proyectos y acciones de la institución.\r\n                \u003c/p\u003e\r\n              \u003c/div\u003e\r\n            \u003c/div\u003e\r\n\r\n            \u003cdiv class=\"agenda-item\" data-index=\"1\" data-img=\"assets/img/encuentro-intercambio.jpg\" data-alt=\"Intercambio con productores en salón\" data-reveal=\"up\"\u003e\r\n              \u003cspan class=\"agenda-icon-circle\" aria-hidden=\"true\"\u003e\r\n                \u003c!-- People / Group Icon --\u003e\r\n                \u003csvg width=\"30\" height=\"28\" viewBox=\"0 0 30 28\" fill=\"#465425\"\u003e\r\n                  \u003ccircle cx=\"15\" cy=\"9\" r=\"3.5\" /\u003e\r\n                  \u003ccircle cx=\"8\" cy=\"11.5\" r=\"2.6\" /\u003e\r\n                  \u003ccircle cx=\"22\" cy=\"11.5\" r=\"2.6\" /\u003e\r\n                  \u003cpath d=\"M9.5 19.5C9.5 16.5 11.9 14.2 15 14.2C18.1 14.2 20.5 16.5 20.5 19.5V22H9.5V19.5Z\" /\u003e\r\n                  \u003cpath d=\"M3.5 20.5C3.5 18.1 5.3 16.2 7.7 16.2C8.3 16.2 8.9 16.3 9.4 16.6C8.5 17.6 8 18.9 8 20.4V22H3.5V20.5Z\" /\u003e\r\n                  \u003cpath d=\"M26.5 20.5C26.5 18.1 24.7 16.2 22.3 16.2C21.7 16.2 21.1 16.3 20.6 16.6C21.5 17.6 22 18.9 22 20.4V22H26.5V20.5Z\" /\u003e\r\n                \u003c/svg\u003e\r\n              \u003c/span\u003e\r\n              \u003cdiv\u003e\r\n                \u003ch3 class=\"agenda-item-title\"\u003eIntercambio con productores\u003c/h3\u003e\r\n                \u003cp class=\"agenda-item-desc\"\u003e\r\n                  Un espacio abierto para dialogar sobre los desafíos y oportunidades del sector.\r\n                \u003c/p\u003e\r\n              \u003c/div\u003e\r\n            \u003c/div\u003e\r\n\r\n            \u003cdiv class=\"agenda-item\" data-index=\"2\" data-img=\"assets/img/encuentro-afiliacion.jpg\" data-alt=\"Productores e integrantes de la institución\" data-reveal=\"up\"\u003e\r\n              \u003cspan class=\"agenda-icon-circle\" aria-hidden=\"true\"\u003e\r\n                \u003c!-- Document Icon --\u003e\r\n                \u003csvg width=\"26\" height=\"28\" viewBox=\"0 0 26 28\" fill=\"#465425\"\u003e\r\n                  \u003cpath d=\"M6 3C4.89543 3 4 3.89543 4 5V23C4 24.1046 4.89543 25 6 25H20C21.1046 25 22 24.1046 22 23V10L15 3H6Z\" /\u003e\r\n                  \u003cpath d=\"M15 3V10H22\" fill=\"#eceee2\" /\u003e\r\n                  \u003crect x=\"8\" y=\"14\" width=\"10\" height=\"2\" rx=\"1\" fill=\"#eceee2\" /\u003e\r\n                  \u003crect x=\"8\" y=\"18.5\" width=\"7\" height=\"2\" rx=\"1\" fill=\"#eceee2\" /\u003e\r\n                \u003c/svg\u003e\r\n              \u003c/span\u003e\r\n              \u003cdiv\u003e\r\n                \u003ch3 class=\"agenda-item-title\"\u003eInformación sobre afiliación\u003c/h3\u003e\r\n                \u003cp class=\"agenda-item-desc\"\u003e\r\n                  Todo lo que necesitás saber para ser parte y participar activamente.\r\n                \u003c/p\u003e\r\n              \u003c/div\u003e\r\n            \u003c/div\u003e\r\n          \u003c/div\u003e\r\n\r\n          \u003cdiv class=\"topics-media\" data-reveal=\"up-large\" data-reveal-delay=\"200\"\u003e\r\n            \u003cdiv class=\"agenda-photo-card\"\u003e\r\n              \u003cimg src=\"assets/img/encuentro-agenda.jpg\" alt=\"Presentación institucional en la Sociedad Rural de Goya\" id=\"topicsImage\" /\u003e\r\n            \u003c/div\u003e\r\n            \u003cdiv class=\"carousel-dots\" role=\"tablist\" aria-label=\"Actividades de la agenda\"\u003e\r\n              \u003cbutton class=\"carousel-dot active\" data-index=\"0\" data-img=\"assets/img/encuentro-agenda.jpg\" data-alt=\"Presentación institucional en la Sociedad Rural de Goya\" aria-label=\"Presentación institucional\"\u003e\u003c/button\u003e\r\n              \u003cbutton class=\"carousel-dot\" data-index=\"1\" data-img=\"assets/img/encuentro-intercambio.jpg\" data-alt=\"Intercambio con productores en salón\" aria-label=\"Intercambio con productores\"\u003e\u003c/button\u003e\r\n              \u003cbutton class=\"carousel-dot\" data-index=\"2\" data-img=\"assets/img/encuentro-afiliacion.jpg\" data-alt=\"Productores e integrantes de la institución\" aria-label=\"Información sobre afiliación\"\u003e\u003c/button\u003e\r\n            \u003c/div\u003e\r\n          \u003c/div\u003e\r\n        \u003c/div\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e\r\n\r\n    \u003c!-- MAP BANNER --\u003e\r\n    \u003csection class=\"section-map-banner\" id=\"mapa\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003ca class=\"map-banner-card\" href=\"https://maps.app.goo.gl/8guxcbkxGf3yaXQS6\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Ver el predio de la Sociedad Rural de Goya en Google Maps\" data-reveal=\"up-large\"\u003e\r\n          \u003cdiv class=\"map-banner-content\"\u003e\r\n            \u003cspan class=\"map-pin-large\" aria-hidden=\"true\"\u003e\r\n              \u003csvg width=\"46\" height=\"54\" viewBox=\"0 0 44 52\" fill=\"none\"\u003e\r\n                \u003cpath d=\"M22 2C11.5066 2 3 10.5066 3 21C3 34.25 22 50 22 50C22 50 41 34.25 41 21C41 10.5066 32.4934 2 22 2Z\" fill=\"#ffffff\" /\u003e\r\n                \u003ccircle cx=\"22\" cy=\"20\" r=\"8\" fill=\"#778c6f\" /\u003e\r\n              \u003c/svg\u003e\r\n            \u003c/span\u003e\r\n            \u003cdiv\u003e\r\n              \u003ch2 class=\"map-banner-title\"\u003eMapa del encuentro\u003c/h2\u003e\r\n              \u003cp class=\"map-banner-sub\"\u003ePredio Sociedad Rural de Goya\u003c/p\u003e\r\n            \u003c/div\u003e\r\n          \u003c/div\u003e\r\n        \u003c/a\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e",
    "asociate.html":  "\u003c!-- ==========================================\r\n         VIEW 1: SOLICITUD DE AFILIACIÓN (FORM)\r\n         ========================================== --\u003e\r\n    \u003cdiv id=\"formView\" class=\"form-view\"\u003e\r\n      \u003c!-- HERO ASOCIATE --\u003e\r\n      \u003csection class=\"hero-asociate\"\u003e\r\n        \u003cdiv class=\"container\"\u003e\r\n          \u003cdiv class=\"hero-institucion-content\"\u003e\r\n            \u003cspan class=\"hero-kicker-lime\"\u003eGoya · Corrientes\u003c/span\u003e\r\n            \u003ch1 class=\"hero-title\"\u003e\r\n              Solicitud\u003cbr /\u003e\r\n              de afiliación\r\n            \u003c/h1\u003e\r\n            \u003cp class=\"hero-desc\"\u003e\r\n              Sumate a una institución que impulsa el campo\u003cbr /\u003e\r\n              y su gente, desde hace casi un siglo.\r\n            \u003c/p\u003e\r\n          \u003c/div\u003e\r\n        \u003c/div\u003e\r\n      \u003c/section\u003e\r\n\r\n      \u003c!-- FORM + HELP SIDEBAR --\u003e\r\n      \u003csection class=\"section-asociate-form\"\u003e\r\n        \u003cdiv class=\"container\"\u003e\r\n          \u003cdiv class=\"asociate-layout\"\u003e\r\n            \u003c!-- Left Form Card --\u003e\r\n            \u003cdiv class=\"asociate-form-card\" data-reveal=\"up\"\u003e\r\n              \u003ch2 class=\"asociate-form-title\"\u003eSolicitud de afiliación\u003c/h2\u003e\r\n\r\n              \u003cform id=\"afiliacionForm\" novalidate\u003e\r\n                \u003cdiv class=\"form-grid-2col\"\u003e\r\n                  \u003cdiv class=\"form-group\"\u003e\r\n                    \u003clabel for=\"nombre\" class=\"form-label\"\u003eNombre y apellido *\u003c/label\u003e\r\n                    \u003cinput type=\"text\" id=\"nombre\" name=\"nombre\" class=\"form-input\" required /\u003e\r\n                  \u003c/div\u003e\r\n\r\n                  \u003cdiv class=\"form-group\"\u003e\r\n                    \u003clabel for=\"localidad\" class=\"form-label\"\u003eLocalidad o paraje *\u003c/label\u003e\r\n                    \u003cinput type=\"text\" id=\"localidad\" name=\"localidad\" class=\"form-input\" required /\u003e\r\n                  \u003c/div\u003e\r\n\r\n                  \u003cdiv class=\"form-group\"\u003e\r\n                    \u003clabel for=\"telefono\" class=\"form-label\"\u003eTeléfono de contacto *\u003c/label\u003e\r\n                    \u003cinput type=\"tel\" id=\"telefono\" name=\"telefono\" class=\"form-input\" required /\u003e\r\n                  \u003c/div\u003e\r\n\r\n                  \u003cdiv class=\"form-group\"\u003e\r\n                    \u003clabel for=\"correo\" class=\"form-label\"\u003eCorreo electrónico (opcional)\u003c/label\u003e\r\n                    \u003cinput type=\"email\" id=\"correo\" name=\"correo\" class=\"form-input\" /\u003e\r\n                  \u003c/div\u003e\r\n\r\n                  \u003cdiv class=\"form-group\"\u003e\r\n                    \u003clabel for=\"establecimiento\" class=\"form-label\"\u003eNombre del establecimiento (opcional)\u003c/label\u003e\r\n                    \u003cinput type=\"text\" id=\"establecimiento\" name=\"establecimiento\" class=\"form-input\" /\u003e\r\n                  \u003c/div\u003e\r\n\r\n                  \u003cdiv class=\"form-group\"\u003e\r\n                    \u003clabel for=\"cabezas\" class=\"form-label\"\u003eCantidad de cabezas de ganado\u003c/label\u003e\r\n                    \u003cinput type=\"text\" id=\"cabezas\" name=\"cabezas\" class=\"form-input\" /\u003e\r\n                  \u003c/div\u003e\r\n                \u003c/div\u003e\r\n\r\n                \u003chr class=\"form-divider\" /\u003e\r\n\r\n                \u003cdiv class=\"form-info-row\"\u003e\r\n                  \u003cspan class=\"form-info-badge\" aria-hidden=\"true\"\u003ei\u003c/span\u003e\r\n                  \u003cdiv class=\"form-info-text\"\u003e\r\n                    \u003cstrong\u003eUsaremos estos datos para gestionar la solicitud y contactarte sobre los próximos pasos.\u003c/strong\u003e\r\n                    \u003cspan\u003eCampos propuestos sujetos a validación institucional.\u003c/span\u003e\r\n                  \u003c/div\u003e\r\n                \u003c/div\u003e\r\n\r\n                \u003clabel class=\"form-checkbox-row\"\u003e\r\n                  \u003cinput type=\"checkbox\" id=\"aceptoDatos\" name=\"aceptoDatos\" /\u003e\r\n                  \u003cspan\u003eComprendo el uso de los datos para esta solicitud.\u003c/span\u003e\r\n                \u003c/label\u003e\r\n\r\n                \u003cp id=\"formErrorMsg\" class=\"form-error-msg\" hidden\u003e\r\n                  Por favor, completá los campos obligatorios: Nombre y apellido, Localidad o paraje y Teléfono de contacto.\r\n                \u003c/p\u003e\r\n\r\n                \u003cdiv class=\"form-buttons-row\"\u003e\r\n                  \u003cbutton type=\"submit\" class=\"btn btn-olive\"\u003eEnviar solicitud de prueba\u003c/button\u003e\r\n                  \u003ca href=\"beneficios.html\" class=\"btn btn-white-bordered\"\u003eVolver\u003c/a\u003e\r\n                \u003c/div\u003e\r\n              \u003c/form\u003e\r\n            \u003c/div\u003e\r\n\r\n            \u003c!-- Right Help Card --\u003e\r\n            \u003caside class=\"asociate-help-card\" data-reveal=\"up-large\" data-reveal-delay=\"200\"\u003e\r\n              \u003cdiv class=\"asociate-help-top\"\u003e\r\n                \u003ch3 class=\"asociate-help-title\"\u003e¿Necesitás ayuda?\u003c/h3\u003e\r\n                \u003cp class=\"asociate-help-sub\"\u003eConsultá con la institución.\u003c/p\u003e\r\n                \u003cdiv class=\"asociate-help-line\"\u003e\u003c/div\u003e\r\n              \u003c/div\u003e\r\n              \u003cdiv class=\"asociate-help-img\"\u003e\r\n                \u003cimg src=\"assets/img/asociate-ayuda.jpg\" alt=\"Molino y tranquera rural\" /\u003e\r\n              \u003c/div\u003e\r\n            \u003c/aside\u003e\r\n          \u003c/div\u003e\r\n        \u003c/div\u003e\r\n      \u003c/section\u003e\r\n    \u003c/div\u003e\r\n\r\n    \u003c!-- ==========================================\r\n         VIEW 2: CONFIRMACIÓN (¡GRACIAS POR ACERCARTE!)\r\n         ========================================== --\u003e\r\n    \u003cdiv id=\"confirmView\" class=\"confirm-view\" hidden\u003e\r\n      \u003c!-- TOP HERO SECTION --\u003e\r\n      \u003csection class=\"section-confirm-hero\"\u003e\r\n        \u003cdiv class=\"container\"\u003e\r\n          \u003cdiv class=\"confirm-hero-grid\"\u003e\r\n            \u003cdiv\u003e\r\n              \u003cspan class=\"section-eyebrow\"\u003eSolicitud de afiliación\u003c/span\u003e\r\n              \u003ch1 class=\"confirm-giant-title\"\u003e\r\n                ¡Gracias por\u003cbr /\u003e\r\n                acercarte!\r\n              \u003c/h1\u003e\r\n              \u003cp class=\"confirm-lead\"\u003eRecibimos tu solicitud de prueba.\u003c/p\u003e\r\n            \u003c/div\u003e\r\n\r\n            \u003cdiv class=\"history-seal\"\u003e\r\n              \u003cimg src=\"assets/img/logo-srg.png\" alt=\"Logo Sociedad Rural de Goya\" /\u003e\r\n            \u003c/div\u003e\r\n          \u003c/div\u003e\r\n        \u003c/div\u003e\r\n      \u003c/section\u003e\r\n\r\n      \u003c!-- MIDDLE CONFIRMATION BANNER --\u003e\r\n      \u003csection class=\"section-confirm-banner\"\u003e\r\n        \u003cdiv class=\"container\"\u003e\r\n          \u003cdiv class=\"confirm-banner-inner\"\u003e\r\n            \u003cspan class=\"confirm-check-circle\" aria-hidden=\"true\"\u003e\r\n              \u003csvg width=\"44\" height=\"44\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u003e\r\n                \u003cpolyline points=\"20 6 9 17 4 12\" /\u003e\r\n              \u003c/svg\u003e\r\n            \u003c/span\u003e\r\n            \u003cdiv\u003e\r\n              \u003ch2 class=\"confirm-banner-title\"\u003eSolicitud enviada\u003c/h2\u003e\r\n              \u003cp class=\"confirm-banner-text\"\u003e\r\n                Esta pantalla confirma el envío de prueba.\u003cbr /\u003e\r\n                La institución informaría cómo continuar con la solicitud real.\r\n              \u003c/p\u003e\r\n            \u003c/div\u003e\r\n          \u003c/div\u003e\r\n        \u003c/div\u003e\r\n      \u003c/section\u003e\r\n\r\n      \u003c!-- ¿QUÉ SUCEDE DESPUÉS? --\u003e\r\n      \u003csection class=\"section-confirm-next\"\u003e\r\n        \u003cdiv class=\"container\"\u003e\r\n          \u003ch2 class=\"section-heading\"\u003e¿Qué sucede después?\u003c/h2\u003e\r\n\r\n          \u003cdiv class=\"confirm-next-cards\" data-stagger=\"100\"\u003e\r\n            \u003carticle class=\"confirm-step-card\" data-reveal=\"up\"\u003e\r\n              \u003cspan class=\"role-number\"\u003e01\u003c/span\u003e\r\n              \u003ch3 class=\"role-card-title\"\u003eRevisión de datos\u003c/h3\u003e\r\n              \u003cp class=\"role-card-text\"\u003e\r\n                La institución revisaría\u003cbr /\u003e\r\n                la solicitud recibida.\r\n              \u003c/p\u003e\r\n            \u003c/article\u003e\r\n\r\n            \u003carticle class=\"confirm-step-card\" data-reveal=\"up\"\u003e\r\n              \u003cspan class=\"role-number\"\u003e02\u003c/span\u003e\r\n              \u003ch3 class=\"role-card-title\"\u003eContacto\u003c/h3\u003e\r\n              \u003cp class=\"role-card-text\"\u003e\r\n                Se comunicaría a través\u003cbr /\u003e\r\n                del medio indicado.\r\n              \u003c/p\u003e\r\n            \u003c/article\u003e\r\n\r\n            \u003carticle class=\"confirm-step-card\" data-reveal=\"up\"\u003e\r\n              \u003cspan class=\"role-number\"\u003e03\u003c/span\u003e\r\n              \u003ch3 class=\"role-card-title\"\u003ePróximos pasos\u003c/h3\u003e\r\n              \u003cp class=\"role-card-text\"\u003e\r\n                Se informarían las condiciones\u003cbr /\u003e\r\n                para continuar con el trámite.\r\n              \u003c/p\u003e\r\n            \u003c/article\u003e\r\n          \u003c/div\u003e\r\n\r\n          \u003cp class=\"confirm-footnote\"\u003eProcedimiento sujeto a confirmación institucional.\u003c/p\u003e\r\n\r\n          \u003cdiv class=\"confirm-actions\"\u003e\r\n            \u003ca href=\"index.html\" class=\"btn btn-olive\"\u003eVolver al inicio\u003c/a\u003e\r\n            \u003ca href=\"beneficios.html\" class=\"btn btn-crimson\"\u003eVer beneficios\u003c/a\u003e\r\n          \u003c/div\u003e\r\n        \u003c/div\u003e\r\n      \u003c/section\u003e\r\n    \u003c/div\u003e",
    "institucion.html":  "\u003c!-- HERO INSTITUCIÓN --\u003e\r\n    \u003csection class=\"hero-institucion\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003cdiv class=\"hero-institucion-content\"\u003e\r\n          \u003cspan class=\"hero-kicker-lime\"\u003eNuestra Institución\u003c/span\u003e\r\n          \u003ch1 class=\"hero-title\"\u003e\r\n            Unidos por un campo\u003cbr /\u003e\r\n            con más futuro\r\n          \u003c/h1\u003e\r\n          \u003cp class=\"hero-desc\"\u003e\r\n            Una entidad gremial sin fines de lucro que representa a los productores ganaderos de la región.\r\n          \u003c/p\u003e\r\n        \u003c/div\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e\r\n\r\n    \u003c!-- QUIÉNES SOMOS / UNA HISTORIA COMPARTIDA --\u003e\r\n    \u003csection class=\"section-history\" id=\"quienes-somos\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003cdiv class=\"history-grid\"\u003e\r\n          \u003cdiv class=\"history-text\"\u003e\r\n            \u003cspan class=\"section-eyebrow\" data-reveal=\"up\"\u003eQuiénes somos\u003c/span\u003e\r\n            \u003ch2 class=\"section-heading\" data-reveal=\"up\"\u003eUna historia compartida\u003c/h2\u003e\r\n            \u003cp data-reveal=\"up\" data-reveal-delay=\"100\"\u003e\r\n              La Sociedad Rural de Goya es una entidad gremial sin fines de lucro fundada en 1938.\r\n              Representa a productores ganaderos de Goya y promueve su participación en la vida institucional.\r\n            \u003c/p\u003e\r\n            \u003cp data-reveal=\"up\" data-reveal-delay=\"200\"\u003e\r\n              Su trabajo busca acercar las inquietudes del sector, impulsar gestiones y mantener informados\r\n              a los productores sobre temas vinculados con su actividad.\r\n            \u003c/p\u003e\r\n          \u003c/div\u003e\r\n\r\n          \u003cdiv class=\"history-seal\" data-reveal=\"up-large\" data-reveal-delay=\"200\"\u003e\r\n            \u003cimg src=\"assets/img/logo-srg.png\" alt=\"Logo Sociedad Rural de Goya\" /\u003e\r\n          \u003c/div\u003e\r\n        \u003c/div\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e\r\n\r\n    \u003c!-- NUESTRO ROL GREMIAL / ¿QUÉ SIGNIFICA REPRESENTAR? --\u003e\r\n    \u003csection class=\"section-role\" id=\"rol-gremial\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003cdiv class=\"role-intro\"\u003e\r\n          \u003cspan class=\"section-eyebrow\" data-reveal=\"up\"\u003eNuestro rol gremial\u003c/span\u003e\r\n          \u003ch2 class=\"section-heading\" data-reveal=\"up\"\u003e¿Qué significa representar?\u003c/h2\u003e\r\n          \u003cp data-reveal=\"up\" data-reveal-delay=\"100\"\u003e\r\n            Es reunir las inquietudes de los productores y acercarlas a organismos y espacios de decisión.\r\n            La participación permite conocer necesidades y construir una voz compartida.\r\n          \u003c/p\u003e\r\n        \u003c/div\u003e\r\n\r\n        \u003cdiv class=\"role-cards-grid\" data-stagger=\"100\"\u003e\r\n          \u003carticle class=\"role-card\" data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"role-number\"\u003e01\u003c/span\u003e\r\n            \u003ch3 class=\"role-card-title\"\u003eEscuchar\u003c/h3\u003e\r\n            \u003cp class=\"role-card-text\"\u003e\r\n              Conocer las necesidades de productores.\r\n            \u003c/p\u003e\r\n          \u003c/article\u003e\r\n\r\n          \u003carticle class=\"role-card\" data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"role-number\"\u003e02\u003c/span\u003e\r\n            \u003ch3 class=\"role-card-title\"\u003eGestionar\u003c/h3\u003e\r\n            \u003cp class=\"role-card-text\"\u003e\r\n              Acercar inquietudes a los organismos correspondientes.\r\n            \u003c/p\u003e\r\n          \u003c/article\u003e\r\n\r\n          \u003carticle class=\"role-card\" data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"role-number\"\u003e03\u003c/span\u003e\r\n            \u003ch3 class=\"role-card-title\"\u003eInformar\u003c/h3\u003e\r\n            \u003cp class=\"role-card-text\"\u003e\r\n              Comunicar novedades y gestiones de interés para el sector.\r\n            \u003c/p\u003e\r\n          \u003c/article\u003e\r\n        \u003c/div\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e\r\n\r\n    \u003c!-- TEMAS QUE NOS INVOLUCRAN / TRABAJAR POR EL CAMPO --\u003e\r\n    \u003csection class=\"section-topics\" id=\"temas\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003cdiv class=\"topics-header\"\u003e\r\n          \u003cspan class=\"section-eyebrow\" data-reveal=\"up\"\u003eTemas que nos involucran\u003c/span\u003e\r\n          \u003ch2 class=\"section-heading\" data-reveal=\"up\" data-reveal-delay=\"100\"\u003eTrabajar por el campo\u003c/h2\u003e\r\n        \u003c/div\u003e\r\n\r\n        \u003cdiv class=\"topics-grid\"\u003e\r\n          \u003cdiv class=\"topics-media\" data-reveal=\"up-large\" data-reveal-delay=\"200\"\u003e\r\n            \u003cdiv class=\"topics-image-frame\"\u003e\r\n              \u003cimg src=\"assets/img/caminos-rurales.jpg\" alt=\"Caminos rurales e infraestructura en Goya\" id=\"topicsImage\" /\u003e\r\n            \u003c/div\u003e\r\n            \u003cdiv class=\"carousel-dots\" role=\"tablist\" aria-label=\"Temas de trabajo\"\u003e\r\n              \u003cbutton class=\"carousel-dot active\" data-index=\"0\" data-img=\"assets/img/caminos-rurales.jpg\" data-alt=\"Caminos rurales e infraestructura en Goya\" aria-label=\"Caminos rurales\"\u003e\u003c/button\u003e\r\n              \u003cbutton class=\"carousel-dot\" data-index=\"1\" data-img=\"assets/img/tema-electrificacion.jpg\" data-alt=\"Electrificación en zonas rurales\" aria-label=\"Electrificación\"\u003e\u003c/button\u003e\r\n              \u003cbutton class=\"carousel-dot\" data-index=\"2\" data-img=\"assets/img/tema-conectividad.jpg\" data-alt=\"Conectividad y comunicación para productores\" aria-label=\"Conectividad\"\u003e\u003c/button\u003e\r\n            \u003c/div\u003e\r\n          \u003c/div\u003e\r\n\r\n          \u003cdiv class=\"topics-list\" data-stagger=\"100\" data-stagger-start=\"300\"\u003e\r\n            \u003cdiv class=\"topic-item active\" data-index=\"0\" data-img=\"assets/img/caminos-rurales.jpg\" data-alt=\"Caminos rurales e infraestructura en Goya\" data-reveal=\"up\"\u003e\r\n              \u003ch3 class=\"topic-title\"\u003eCaminos rurales\u003c/h3\u003e\r\n              \u003cp class=\"topic-desc\"\u003eInfraestructura y circulación para la actividad productiva.\u003c/p\u003e\r\n            \u003c/div\u003e\r\n\r\n            \u003cdiv class=\"topic-item\" data-index=\"1\" data-img=\"assets/img/tema-electrificacion.jpg\" data-alt=\"Electrificación en zonas rurales\" data-reveal=\"up\"\u003e\r\n              \u003ch3 class=\"topic-title\"\u003eElectrificación\u003c/h3\u003e\r\n              \u003cp class=\"topic-desc\"\u003eAcceso a la energía en los espacios rurales.\u003c/p\u003e\r\n            \u003c/div\u003e\r\n\r\n            \u003cdiv class=\"topic-item\" data-index=\"2\" data-img=\"assets/img/tema-conectividad.jpg\" data-alt=\"Conectividad y comunicación para productores\" data-reveal=\"up\"\u003e\r\n              \u003ch3 class=\"topic-title\"\u003eConectividad\u003c/h3\u003e\r\n              \u003cp class=\"topic-desc\"\u003eComunicación e información para los productores.\u003c/p\u003e\r\n            \u003c/div\u003e\r\n          \u003c/div\u003e\r\n        \u003c/div\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e\r\n\r\n    \u003c!-- BANNER PARTICIPACIÓN --\u003e\r\n    \u003csection class=\"section-cta-banner\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003cdiv class=\"cta-banner-box cta-banner-box--compact\" data-reveal=\"up\"\u003e\r\n          \u003ch2 class=\"cta-banner-title\"\u003eTu participación fortalece nuestra representación.\u003c/h2\u003e\r\n          \u003ca href=\"beneficios.html\" class=\"btn btn-white\"\u003e\r\n            Ver beneficios\r\n            \u003csvg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u003e\r\n              \u003cline x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\" /\u003e\r\n              \u003cpolyline points=\"13 6 19 12 13 18\" /\u003e\r\n            \u003c/svg\u003e\r\n          \u003c/a\u003e\r\n        \u003c/div\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e",
    "index.html":  "\u003c!-- HERO SECTION --\u003e\r\n    \u003csection class=\"hero-home\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003cdiv class=\"hero-home-content\"\u003e\r\n          \u003cspan class=\"hero-eyebrow\"\u003eDesde 1938 · Goya, Corrientes\u003c/span\u003e\r\n          \u003ch1 class=\"hero-title\"\u003e\r\n            Sociedad Rural \u003cbr /\u003e\r\n            de Goya\r\n          \u003c/h1\u003e\r\n          \u003cp class=\"hero-subtitle\"\u003eEl campo unido es más fuerte\u003c/p\u003e\r\n          \u003cp class=\"hero-desc\"\u003e\r\n            Somos una institución gremial y técnica al servicio del productor agropecuario,\r\n            impulsando remates, capacitación y desarrollo para toda la región.\r\n          \u003c/p\u003e\r\n          \u003ca href=\"institucion.html\" class=\"hero-action\"\u003e\r\n            \u003cspan class=\"hero-play-btn\" aria-hidden=\"true\"\u003e\r\n              \u003csvg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"currentColor\"\u003e\r\n                \u003cpolygon points=\"7,4 20,12 7,20\" /\u003e\r\n              \u003c/svg\u003e\r\n            \u003c/span\u003e\r\n            \u003cspan class=\"hero-action-label\"\u003e\r\n              Conocé más\r\n              \u003csvg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u003e\r\n                \u003cline x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\" /\u003e\r\n                \u003cpolyline points=\"13 6 19 12 13 18\" /\u003e\r\n              \u003c/svg\u003e\r\n            \u003c/span\u003e\r\n          \u003c/a\u003e\r\n        \u003c/div\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e\r\n\r\n    \u003c!-- 3 PILLARS SECTION --\u003e\r\n    \u003csection class=\"section-pillars\" id=\"beneficios\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003cdiv class=\"pillars-grid\" data-stagger=\"100\"\u003e\r\n          \u003carticle class=\"pillar-card\" data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"pillar-badge\"\u003e1\u003c/span\u003e\r\n            \u003ch2 class=\"pillar-title\"\u003eRepresentación gremial\u003c/h2\u003e\r\n            \u003cp class=\"pillar-text\"\u003e\r\n              Acercamos las necesidades del sector a los ámbitos de decisión.\r\n            \u003c/p\u003e\r\n          \u003c/article\u003e\r\n\r\n          \u003carticle class=\"pillar-card\" data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"pillar-badge\"\u003e2\u003c/span\u003e\r\n            \u003ch2 class=\"pillar-title\"\u003eServicios al productor\u003c/h2\u003e\r\n            \u003cp class=\"pillar-text\"\u003e\r\n              Información y acompañamiento para la actividad productiva.\r\n            \u003c/p\u003e\r\n          \u003c/article\u003e\r\n\r\n          \u003carticle class=\"pillar-card\" data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"pillar-badge\"\u003e3\u003c/span\u003e\r\n            \u003ch2 class=\"pillar-title\"\u003eParticipación\u003c/h2\u003e\r\n            \u003cp class=\"pillar-text\"\u003e\r\n              Espacios para compartir inquietudes y construir propuestas.\r\n            \u003c/p\u003e\r\n          \u003c/article\u003e\r\n        \u003c/div\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e\r\n\r\n    \u003c!-- TU VOZ TAMBIÉN CUENTA --\u003e\r\n    \u003csection class=\"section-voice\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003cdiv class=\"voice-grid\"\u003e\r\n          \u003cdiv class=\"voice-content\"\u003e\r\n            \u003ch2 class=\"section-heading\" data-reveal=\"up\"\u003eTu voz también cuenta\u003c/h2\u003e\r\n            \u003cp class=\"voice-text\" data-reveal=\"up\" data-reveal-delay=\"100\"\u003e\r\n              Una institución que escucha a los productores y promueve el trabajo compartido\r\n              para fortalecer la representación del sector.\r\n            \u003c/p\u003e\r\n            \u003ca href=\"institucion.html\" class=\"btn btn-olive\" data-reveal=\"up\" data-reveal-delay=\"200\"\u003eConocé la institución\u003c/a\u003e\r\n          \u003c/div\u003e\r\n          \u003cdiv class=\"voice-media\" data-reveal=\"up-large\" data-reveal-delay=\"200\"\u003e\n            \u003cdiv class=\"voice-image-wrap\"\u003e\n              \u003cimg src=\"assets/img/a8.jpeg\" alt=\"Sociedad Rural de Goya\" id=\"voiceImage\" /\u003e\n            \u003c/div\u003e\n            \u003cdiv class=\"carousel-dots\" role=\"tablist\" aria-label=\"Imágenes de la Sociedad Rural\"\u003e\n              \u003cbutton class=\"carousel-dot active\" data-index=\"0\" data-img=\"assets/img/a8.jpeg\" aria-label=\"Foto 1\"\u003e\u003c/button\u003e\n              \u003cbutton class=\"carousel-dot\" data-index=\"1\" data-img=\"assets/img/a6.jpeg\" aria-label=\"Foto 2\"\u003e\u003c/button\u003e\n              \u003cbutton class=\"carousel-dot\" data-index=\"2\" data-img=\"assets/img/a4.jpeg\" aria-label=\"Foto 3\"\u003e\u003c/button\u003e\n            \u003c/div\u003e\n          \u003c/div\u003e\r\n        \u003c/div\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e\r\n\r\n    \u003c!-- BANNER ENCUENTRO --\u003e\r\n    \u003csection class=\"section-cta-banner\" id=\"encuentro\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003cdiv class=\"cta-banner-box\" data-reveal=\"up\"\u003e\r\n          \u003cdiv\u003e\r\n            \u003ch2 class=\"cta-banner-title\" data-reveal=\"up\"\u003eUn encuentro para escucharnos\u003c/h2\u003e\r\n            \u003cp class=\"cta-banner-sub\" data-reveal=\"up\" data-reveal-delay=\"100\"\u003eConocé la propuesta y las oportunidades de participar.\u003c/p\u003e\r\n          \u003c/div\u003e\r\n          \u003ca href=\"encuentro.html\" class=\"btn btn-white\" data-reveal=\"up\" data-reveal-delay=\"200\"\u003e\r\n            Ver encuentro\r\n            \u003csvg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u003e\r\n              \u003cline x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\" /\u003e\r\n              \u003cpolyline points=\"13 6 19 12 13 18\" /\u003e\r\n            \u003c/svg\u003e\r\n          \u003c/a\u003e\r\n        \u003c/div\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e",
    "beneficios.html":  "\u003c!-- HERO BENEFICIOS --\u003e\r\n    \u003csection class=\"hero-beneficios\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003cdiv class=\"hero-institucion-content\"\u003e\r\n          \u003cspan class=\"hero-kicker-lime\"\u003eSociedad Rural de Goya\u003c/span\u003e\r\n          \u003ch1 class=\"hero-title\"\u003e\r\n            Estamos cerca\u003cbr /\u003e\r\n            del productor\r\n          \u003c/h1\u003e\r\n          \u003cp class=\"hero-desc\"\u003e\r\n            Conocé nuestras acciones gremiales y la propuesta de beneficios para asociados.\r\n          \u003c/p\u003e\r\n        \u003c/div\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e\r\n\r\n    \u003c!-- NUESTRO LABOR / UNA VOZ PARA EL SECTOR --\u003e\r\n    \u003csection class=\"section-history\" id=\"nuestro-labor\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003cdiv class=\"history-grid\"\u003e\r\n          \u003cdiv class=\"history-text\"\u003e\r\n            \u003cspan class=\"section-eyebrow\" data-reveal=\"up\"\u003eNuestra labor\u003c/span\u003e\r\n            \u003ch2 class=\"section-heading\" data-reveal=\"up\"\u003eUna voz para el sector\u003c/h2\u003e\r\n            \u003cp data-reveal=\"up\" data-reveal-delay=\"100\"\u003e\r\n              Representamos inquietudes del sector y promovemos el diálogo sobre temas\r\n              que forman parte de la vida y la actividad rural.\r\n            \u003c/p\u003e\r\n          \u003c/div\u003e\r\n\r\n          \u003cdiv class=\"history-seal\" data-reveal=\"up-large\" data-reveal-delay=\"200\"\u003e\r\n            \u003cdiv class=\"horizontal-emblem\"\u003e\r\n              \u003csvg viewBox=\"0 0 100 100\" role=\"img\" aria-label=\"Emblema Sociedad Rural Goya\"\u003e\r\n                \u003cpath d=\"M 8 46.5 A 42 42 0 0 1 46.5 8 L 46.5 26 A 24 24 0 0 0 26 46.5 Z\" fill=\"#991b1e\" /\u003e\r\n                \u003cpath d=\"M 53.5 8 A 42 42 0 0 1 92 46.5 L 74 46.5 A 24 24 0 0 0 53.5 26 Z\" fill=\"#991b1e\" /\u003e\r\n                \u003cg fill=\"#5c4320\"\u003e\r\n                  \u003cpath d=\"M 26.2 52.5 L 8.2 52.5 A 42 42 0 0 0 10.6 64.9 L 27.4 57.4 Z\" /\u003e\r\n                  \u003cpath d=\"M 28.6 60.5 L 12.4 68.7 A 42 42 0 0 0 18.8 79.1 L 32.3 65.5 Z\" /\u003e\r\n                  \u003cpath d=\"M 34.4 67.8 L 21.8 81.8 A 42 42 0 0 0 31.6 88.6 L 39.2 71.2 Z\" /\u003e\r\n                  \u003cpath d=\"M 42.3 72.7 L 35.5 90.2 A 42 42 0 0 0 47.6 92.0 L 47.6 74.0 Z\" /\u003e\r\n                  \u003cpath d=\"M 52.4 74.0 L 52.4 92.0 A 42 42 0 0 0 64.5 90.2 L 57.7 72.7 Z\" /\u003e\r\n                  \u003cpath d=\"M 60.8 71.2 L 68.4 88.6 A 42 42 0 0 0 78.2 81.8 L 65.6 67.8 Z\" /\u003e\r\n                  \u003cpath d=\"M 67.7 65.5 L 81.2 79.1 A 42 42 0 0 0 87.6 68.7 L 71.4 60.5 Z\" /\u003e\r\n                  \u003cpath d=\"M 72.6 57.4 L 89.4 64.9 A 42 42 0 0 0 91.8 52.5 L 73.8 52.5 Z\" /\u003e\r\n                \u003c/g\u003e\r\n                \u003ccircle cx=\"50\" cy=\"50\" r=\"18.5\" fill=\"#465425\" /\u003e\r\n              \u003c/svg\u003e\r\n              \u003cdiv class=\"horizontal-emblem-text\"\u003e\r\n                \u003cdiv\u003eSociedad\u003c/div\u003e\r\n                \u003cdiv\u003eRural Goya\u003c/div\u003e\r\n              \u003c/div\u003e\r\n            \u003c/div\u003e\r\n          \u003c/div\u003e\r\n        \u003c/div\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e\r\n\r\n    \u003c!-- ACCIONES PARA LOS PRODUCTORES --\u003e\r\n    \u003csection class=\"section-actions-list\" id=\"acciones\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003ch2 class=\"section-heading\" data-reveal=\"up\"\u003eAcciones para los productores\u003c/h2\u003e\r\n\r\n        \u003cdiv class=\"actions-table\" data-stagger=\"100\"\u003e\r\n          \u003cdiv class=\"action-row\" data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"action-num\"\u003e01\u003c/span\u003e\r\n            \u003ch3 class=\"action-name\"\u003eRepresentación gremial\u003c/h3\u003e\r\n            \u003cp class=\"action-desc\"\u003e\r\n              Acercamos las inquietudes del sector a organismos e instituciones correspondientes.\r\n            \u003c/p\u003e\r\n          \u003c/div\u003e\r\n\r\n          \u003cdiv class=\"action-row\" data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"action-num\"\u003e02\u003c/span\u003e\r\n            \u003ch3 class=\"action-name\"\u003eCaminos e infraestructura\u003c/h3\u003e\r\n            \u003cp class=\"action-desc\"\u003e\r\n              Promovemos el diálogo sobre caminos rurales y condiciones para la actividad productiva.\r\n            \u003c/p\u003e\r\n          \u003c/div\u003e\r\n\r\n          \u003cdiv class=\"action-row\" data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"action-num\"\u003e03\u003c/span\u003e\r\n            \u003ch3 class=\"action-name\"\u003eEnergía y conectividad\u003c/h3\u003e\r\n            \u003cp class=\"action-desc\"\u003e\r\n              Comunicamos necesidades de acceso a electricidad y servicios de comunicación en zonas rurales.\r\n            \u003c/p\u003e\r\n          \u003c/div\u003e\r\n\r\n          \u003cdiv class=\"action-row\" data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"action-num\"\u003e04\u003c/span\u003e\r\n            \u003ch3 class=\"action-name\"\u003eInformación y encuentro\u003c/h3\u003e\r\n            \u003cp class=\"action-desc\"\u003e\r\n              Compartimos novedades y promovemos el intercambio de experiencias y propuestas.\r\n            \u003c/p\u003e\r\n          \u003c/div\u003e\r\n        \u003c/div\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e\r\n\r\n    \u003c!-- PARA ASOCIADOS / BENEFICIOS PARA SEGUIR CRECIENDO --\u003e\r\n    \u003csection class=\"section-benefits-grid\" id=\"para-asociados\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003cdiv class=\"benefits-intro\"\u003e\r\n          \u003cspan class=\"section-eyebrow\" data-reveal=\"up\"\u003ePara asociados\u003c/span\u003e\r\n          \u003ch2 class=\"section-heading\" data-reveal=\"up\"\u003eBeneficios para seguir creciendo\u003c/h2\u003e\r\n          \u003cp data-reveal=\"up\" data-reveal-delay=\"100\"\u003e\r\n            Una propuesta para acompañar a los productores y fortalecer su participación en la institución.\r\n          \u003c/p\u003e\r\n          \u003cp class=\"benefits-note\" data-reveal=\"up\" data-reveal-delay=\"150\"\u003ePropuesta sujeta a confirmación institucional.\u003c/p\u003e\r\n        \u003c/div\u003e\r\n\r\n        \u003cdiv class=\"benefits-cards-2x2\" data-stagger=\"100\"\u003e\r\n          \u003carticle class=\"benefit-media-card\" data-reveal=\"up\"\u003e\r\n            \u003cdiv\u003e\r\n              \u003ch3 class=\"benefit-media-title\"\u003eAsesoramiento\u003c/h3\u003e\r\n              \u003cp class=\"benefit-media-desc\"\u003e\r\n                Orientación sobre consultas vinculadas con la actividad y gestiones institucionales.\r\n              \u003c/p\u003e\r\n            \u003c/div\u003e\r\n            \u003cdiv class=\"benefit-media-img\"\u003e\r\n              \u003cimg src=\"assets/img/a1.jpeg\" alt=\"Asesoramiento al productor rural\" loading=\"lazy\" /\u003e\r\n            \u003c/div\u003e\r\n          \u003c/article\u003e\r\n\r\n          \u003carticle class=\"benefit-media-card\" data-reveal=\"up\"\u003e\r\n            \u003cdiv\u003e\r\n              \u003ch3 class=\"benefit-media-title\"\u003eCapacitaciones\u003c/h3\u003e\r\n              \u003cp class=\"benefit-media-desc\"\u003e\r\n                Charlas para informarse y compartir experiencias.\r\n              \u003c/p\u003e\r\n            \u003c/div\u003e\r\n            \u003cdiv class=\"benefit-media-img\"\u003e\r\n              \u003cimg src=\"assets/img/a3.webp\" alt=\"Capacitaciones y charlas rurales\" loading=\"lazy\" /\u003e\r\n            \u003c/div\u003e\r\n          \u003c/article\u003e\r\n\r\n          \u003carticle class=\"benefit-media-card\" data-reveal=\"up\"\u003e\r\n            \u003cdiv\u003e\r\n              \u003ch3 class=\"benefit-media-title\"\u003eConvenios comerciales\u003c/h3\u003e\r\n              \u003cp class=\"benefit-media-desc\"\u003e\r\n                Posibles acuerdos con comercios del sector, sujetos a confirmación.\r\n              \u003c/p\u003e\r\n            \u003c/div\u003e\r\n            \u003cdiv class=\"benefit-media-img\"\u003e\r\n              \u003cimg src=\"assets/img/a2.webp\" alt=\"Convenios comerciales para socios\" loading=\"lazy\" /\u003e\r\n            \u003c/div\u003e\r\n          \u003c/article\u003e\r\n\r\n          \u003carticle class=\"benefit-media-card\" data-reveal=\"up\"\u003e\r\n            \u003cdiv\u003e\r\n              \u003ch3 class=\"benefit-media-title\"\u003eDescuentos\u003c/h3\u003e\r\n              \u003cp class=\"benefit-media-desc\"\u003e\r\n                Accedé a descuentos especiales en comercios y eventos vinculados al sector agropecuario.\r\n              \u003c/p\u003e\r\n            \u003c/div\u003e\r\n            \u003cdiv class=\"benefit-media-img\"\u003e\r\n              \u003cimg src=\"assets/img/a7.webp\" alt=\"Descuentos y beneficios para asociados\" loading=\"lazy\" /\u003e\r\n            \u003c/div\u003e\r\n          \u003c/article\u003e\r\n        \u003c/div\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e\r\n\r\n    \u003c!-- ¿CÓMO SOLICITAR LA AFILIACIÓN? --\u003e\r\n    \u003csection class=\"section-affiliation\" id=\"afiliacion\"\u003e\r\n      \u003cdiv class=\"container\"\u003e\r\n        \u003ch2 class=\"section-heading\" data-reveal=\"up\"\u003e¿Cómo solicitar la afiliación?\u003c/h2\u003e\r\n\r\n        \u003cdiv class=\"pillars-grid\" data-stagger=\"100\"\u003e\r\n          \u003carticle class=\"pillar-card pillar-card--light\" data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"pillar-badge\"\u003e1\u003c/span\u003e\r\n            \u003ch3 class=\"pillar-title\"\u003eConsultá\u003c/h3\u003e\r\n            \u003cp class=\"pillar-text\"\u003eConocé los requisitos y la cuota.\u003c/p\u003e\r\n          \u003c/article\u003e\r\n\r\n          \u003carticle class=\"pillar-card pillar-card--light\" data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"pillar-badge\"\u003e2\u003c/span\u003e\r\n            \u003ch3 class=\"pillar-title\"\u003eCompletá\u003c/h3\u003e\r\n            \u003cp class=\"pillar-text\"\u003eIngresá tus datos en la solicitud.\u003c/p\u003e\r\n          \u003c/article\u003e\r\n\r\n          \u003carticle class=\"pillar-card pillar-card--light\" data-reveal=\"up\"\u003e\r\n            \u003cspan class=\"pillar-badge\"\u003e3\u003c/span\u003e\r\n            \u003ch3 class=\"pillar-title\"\u003eContinuá\u003c/h3\u003e\r\n            \u003cp class=\"pillar-text\"\u003eLa institución te informará los pasos siguientes.\u003c/p\u003e\r\n          \u003c/article\u003e\r\n        \u003c/div\u003e\r\n\r\n        \u003cdiv class=\"affiliation-actions\" data-reveal=\"up\" data-reveal-delay=\"300\"\u003e\r\n          \u003ca href=\"asociate.html\" class=\"btn btn-olive\"\u003eQuiero asociarme\u003c/a\u003e\r\n          \u003ca href=\"#contacto\" class=\"btn btn-outline\"\u003eHacer una consulta\u003c/a\u003e\r\n        \u003c/div\u003e\r\n      \u003c/div\u003e\r\n    \u003c/section\u003e"
};

PAGE_VIEWS["encuentro.html"] = PAGE_VIEWS["encuentro.html"]
  .replaceAll('assets/img/encuentro-agenda.jpg', 'assets/img/a11.jpg')
  .replaceAll('assets/img/encuentro-intercambio.jpg', 'assets/img/a12.jpg')
  .replaceAll('assets/img/encuentro-afiliacion.jpg', 'assets/img/a13.jpg');

const PAGE_TITLES = {
  'index.html': 'Sociedad Rural de Goya — Inicio',
  'institucion.html': 'Sociedad Rural de Goya — Institución',
  'beneficios.html': 'Sociedad Rural de Goya — Beneficios',
  'encuentro.html': 'Sociedad Rural de Goya — Encuentro',
  'asociate.html': 'Sociedad Rural de Goya — Solicitud de Afiliación'
};

// Preload all hero, topic, benefit, and agenda images in memory for smooth transitions
[
  'assets/img/hero-inicio.jpg',
  'assets/img/hero-institucion.jpg',
  'assets/img/hero-beneficios.jpg',
  'assets/img/hero-encuentro.jpg',
  'assets/img/hero-asociate.jpg',
  'assets/img/caminos-rurales.jpg',
  'assets/img/tema-electrificacion.jpg',
  'assets/img/tema-conectividad.jpg',
  'assets/img/beneficio-asesoramiento.jpg',
  'assets/img/beneficio-capacitaciones.jpg',
  'assets/img/beneficio-convenios.jpg',
  'assets/img/beneficio-participacion.jpg',
  'assets/img/encuentro-agenda.jpg',
  'assets/img/encuentro-intercambio.jpg',
  'assets/img/encuentro-afiliacion.jpg',
  'assets/img/encuentro-mapa.jpg',
  'assets/img/asociate-ayuda.jpg',
  'assets/img/logo-srg.png'
].forEach((src) => {
  const img = new Image();
  img.src = src;
});

let autoCarouselTimer = null;
let voiceCarouselTimer = null;
let isNavigating = false;
let revealObserver = null;
let spyObserver = null;

/* =========================================================
   SCROLL-TRIGGERED REVEAL, STAGGER, CAROUSEL & SCROLLSPY
   ========================================================= */
function initScrollAnimations() {
  if (revealObserver) revealObserver.disconnect();
  if (spyObserver) spyObserver.disconnect();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Assign incremental delays to children of [data-stagger] (step 100ms, max 600ms)
  document.querySelectorAll('[data-stagger]').forEach((group) => {
    const step = parseInt(group.dataset.stagger || '100', 10);
    const startOffset = parseInt(group.dataset.staggerStart || '0', 10);
    Array.from(group.children).forEach((child, idx) => {
      if (!child.hasAttribute('data-reveal')) {
        child.setAttribute('data-reveal', 'up');
      }
      if (!child.hasAttribute('data-reveal-delay')) {
        const delay = Math.min(startOffset + idx * step, 600);
        child.dataset.revealDelay = String(delay);
      }
    });
  });

  // 2. Apply custom delays & observe all [data-reveal] elements (trigger at 12% viewport)
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-revealed'));
  } else {
    revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const variant = el.getAttribute('data-reveal') || 'up';
          el.style.willChange = variant === 'wipe' ? 'clip-path' : 'opacity, transform';

          requestAnimationFrame(() => {
            el.classList.add('is-revealed');
          });

          el.addEventListener(
            'transitionend',
            () => {
              el.style.willChange = 'auto';
            },
            { once: true }
          );

          obs.unobserve(el);
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => {
      if (el.dataset.revealDelay) {
        el.style.setProperty('--reveal-delay', el.dataset.revealDelay + 'ms');
      }
      revealObserver.observe(el);
    });
  }

  // 3. Optional horizontal card track carousel ([data-carousel])
  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('[data-carousel-track]');
    const prevBtn = carousel.querySelector('[data-carousel-prev]');
    const nextBtn = carousel.querySelector('[data-carousel-next]');
    if (!track) return;
    let index = 0;
    const move = (dir) => {
      const card = track.firstElementChild;
      if (!card) return;
      const gap = parseFloat(getComputedStyle(track).gap || '0');
      const stepWidth = card.getBoundingClientRect().width + gap;
      const maxIdx = Math.max(0, track.children.length - 1);
      index = Math.min(maxIdx, Math.max(0, index + dir));
      track.style.transform = 'translateX(' + -(index * stepWidth) + 'px)';
    };
    prevBtn?.addEventListener('click', () => move(-1));
    nextBtn?.addEventListener('click', () => move(1));
  });

  // 4. Scrollspy for in-page anchor links (rootMargin "-45% 0px -45% 0px")
  const sections = document.querySelectorAll('main section[id], footer[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute('id');
          document.querySelectorAll('.nav-links a[href^="#"]').forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    sections.forEach((sec) => spyObserver.observe(sec));
  }
}

function initPageInteractions() {
  if (autoCarouselTimer) {
    clearInterval(autoCarouselTimer);
    autoCarouselTimer = null;
  }
  if (voiceCarouselTimer) {
    clearInterval(voiceCarouselTimer);
    voiceCarouselTimer = null;
  }

  initScrollAnimations();

  // Automatic 3-second image rotation for Inicio (Tu voz tambien cuenta: a8, a6, a4)
  const voiceImage = document.getElementById('voiceImage');
  const voiceDots = document.querySelectorAll('.voice-media .carousel-dot');
  if (voiceImage && voiceDots.length > 0) {
    let currentVoiceIndex = 0;
    const voiceImages = Array.from(voiceDots).map((d) => ({
      src: d.dataset.img,
      alt: d.getAttribute('aria-label') || 'Sociedad Rural de Goya'
    }));

    function setVoiceImage(index) {
      voiceDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      const target = voiceImages[index];
      if (target && !voiceImage.src.endsWith(target.src)) {
        voiceImage.classList.add('img-switching');
        setTimeout(() => {
          voiceImage.src = target.src;
          if (target.alt) voiceImage.alt = target.alt;
          requestAnimationFrame(() => {
            voiceImage.classList.remove('img-switching');
          });
        }, 200);
      }
    }

    voiceDots.forEach((dot, i) => {
      dot.style.pointerEvents = 'auto';
      dot.style.cursor = 'pointer';
      dot.addEventListener('click', () => {
        currentVoiceIndex = i;
        setVoiceImage(i);
        if (voiceCarouselTimer) {
          clearInterval(voiceCarouselTimer);
          voiceCarouselTimer = setInterval(() => {
            currentVoiceIndex = (currentVoiceIndex + 1) % voiceImages.length;
            setVoiceImage(currentVoiceIndex);
          }, 3000);
        }
      });
    });

    voiceCarouselTimer = setInterval(() => {
      currentVoiceIndex = (currentVoiceIndex + 1) % voiceImages.length;
      setVoiceImage(currentVoiceIndex);
    }, 3000);
  }

  // Automatic 3-second image rotation for Institucion (topics) & Encuentro (agenda)
  const topicDots = document.querySelectorAll('.section-topics .carousel-dot, .section-agenda .carousel-dot');
  const topicItems = document.querySelectorAll('.topic-item, .agenda-item');
  const topicsImage = document.getElementById('topicsImage');

  function setActiveTopic(index) {
    let newSrc = '';
    let newAlt = '';

    topicDots.forEach((dot, i) => {
      const isMatch = i === index;
      dot.classList.toggle('active', isMatch);
      if (isMatch && dot.dataset.img) {
        newSrc = dot.dataset.img;
        newAlt = dot.dataset.alt || '';
      }
    });

    topicItems.forEach((item, i) => {
      const isMatch = i === index;
      item.classList.toggle('active', isMatch);
      if (isMatch && item.dataset.img) {
        newSrc = item.dataset.img;
        newAlt = item.dataset.alt || '';
      }
    });

    if (topicsImage && newSrc && !topicsImage.src.endsWith(newSrc)) {
      topicsImage.classList.add('img-switching');
      setTimeout(() => {
        topicsImage.src = newSrc;
        if (newAlt) topicsImage.alt = newAlt;
        requestAnimationFrame(() => {
          topicsImage.classList.remove('img-switching');
        });
      }, 200);
    }
  }

  if (topicItems.length > 0 && topicsImage) {
    let currentIndex = 0;
    autoCarouselTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % topicItems.length;
      setActiveTopic(currentIndex);
    }, 3000);
  }

    const afiliacionForm = document.getElementById('afiliacionForm');
  const formView = document.getElementById('formView');
  const confirmView = document.getElementById('confirmView');
  const formErrorMsg = document.getElementById('formErrorMsg');

  const requiredIds = ['nombre', 'localidad', 'telefono'];

  requiredIds.forEach((id) => {
    const inputEl = document.getElementById(id);
    if (inputEl) {
      inputEl.addEventListener('input', () => {
        if (inputEl.value.trim() !== '') {
          inputEl.classList.remove('input-error');
        }
        const allValid = requiredIds.every((reqId) => {
          const el = document.getElementById(reqId);
          return el && el.value.trim() !== '';
        });
        if (allValid && formErrorMsg) {
          formErrorMsg.hidden = true;
        }
      });
    }
  });

  function showConfirmView() {
    if (!formView || !confirmView) return;
    formView.hidden = true;
    confirmView.hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    initScrollAnimations();
  }

  if (afiliacionForm) {
    afiliacionForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let firstInvalid = null;
      requiredIds.forEach((id) => {
        const inputEl = document.getElementById(id);
        if (inputEl) {
          const isEmpty = inputEl.value.trim() === '';
          inputEl.classList.toggle('input-error', isEmpty);
          if (isEmpty && !firstInvalid) {
            firstInvalid = inputEl;
          }
        }
      });

      if (firstInvalid) {
        if (formErrorMsg) {
          formErrorMsg.hidden = false;
        }
        firstInvalid.focus();
        return;
      }

      if (formErrorMsg) {
        formErrorMsg.hidden = true;
      }
      showConfirmView();
    });
  }
}

function navigateToPage(targetHref, pushHistory = true) {
  if (isNavigating) return true;

  const [rawPath, hash] = targetHref.split('#');
  const pageName = rawPath.split('/').pop() || 'index.html';

  if (!PAGE_VIEWS[pageName]) return false;

  const mainEl = document.querySelector('main');
  if (!mainEl) return false;

  const navLinksContainer = document.querySelector('.nav-links');
  const menuBtn = document.querySelector('.mobile-menu-toggle');
  if (navLinksContainer) {
    navLinksContainer.style.visibility = 'visible';
    navLinksContainer.classList.remove('open');
  }
  if (menuBtn) {
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  document.querySelectorAll('.nav-links a').forEach((link) => {
    const linkPage = (link.getAttribute('href') || '').split('#')[0].split('/').pop();
    link.classList.toggle('active', linkPage === pageName && pageName !== 'asociate.html' && !link.classList.contains('btn-nav-cta-mobile'));
  });

  isNavigating = true;
  mainEl.classList.add('page-fade-out');

  setTimeout(() => {
    mainEl.innerHTML = PAGE_VIEWS[pageName];
    document.title = PAGE_TITLES[pageName] || document.title;

    initPageInteractions();

    if (pushHistory) {
      try {
        window.history.pushState({ pageName, hash }, '', targetHref);
      } catch (_) {}
    }

    if (hash) {
      const targetEl = document.getElementById(hash);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    requestAnimationFrame(() => {
      mainEl.classList.remove('page-fade-out');
      isNavigating = false;
    });
  }, 160);

  return true;
}

function initApp() {
  const menuBtn = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const isOpen = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when clicking any navigation link
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  initPageInteractions();

  // Intercept clicks on internal links for smooth animated page transition
  document.body.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }

    if (href.startsWith('#')) {
      const targetEl = document.getElementById(href.slice(1));
      if (targetEl) {
        e.preventDefault();
        navLinks?.classList.remove('open');
        menuBtn?.setAttribute('aria-expanded', 'false');
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const pageName = href.split('#')[0].split('/').pop();
    if (PAGE_VIEWS[pageName]) {
      e.preventDefault();
      navigateToPage(href, true);
    }
  });

  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.pageName) {
      const target = e.state.pageName + (e.state.hash ? '#' + e.state.hash : '');
      navigateToPage(target, false);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
